import React, { useState, useCallback, useEffect } from "react";
import Talker from "../components/talker/Talker";
import CanvasWrapper from "../components/canvas/CanvasWrapper";
import InitPopup from "../components/InitPopup";
import "./App.css";
import { getData } from "../utils/data";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useSpeechSynthesis } from "react-speech-kit";
import socketIOClient from "socket.io-client";
import SocketContext from "../utils/SocketContext";

let socket;

const App = () => {
  const ENDPOINT = "http://127.0.0.1:8080";
  //enable speech to text
  const { transcript, resetTranscript } = useSpeechRecognition();
  //enable text to speech
  const { speak, voices, speaking } = useSpeechSynthesis();
  // set Voices
  const [voiceIndex, setVoiceIndex] = useState(null);
  // const [voice, setVoice] = useState(voices[0]);
  // console.log(voice);
  const voice = voices[voiceIndex] || null;

  const changeVoice = useCallback(
    (text, index) => {
      setVoiceIndex(index);
      speak({ text, voice });
      console.log(index);
      console.log("selected " + voice);
    },
    [speak, voice]
  );
  const data = getData();
  const botName = data.botName;
  // set the initial message
  const [messages, setMessages] = useState([
    { name: botName, message: data.response.init },
  ]);
  //wrap speak and push new message to one function
  const addMessage = useCallback(
    (message) => {
      setMessages((messages) => [...messages, message]);
      if (message.name === botName) {
        console.log(voice);
        console.log("speaking " + voice);
        speak({ text: message.message, voice });
        console.log("spoke  " + message.message);
      }
    },
    [botName, speak, voice]
  );
  //check if the popup is gone or not - if gone enter the game
  // also a button to trigger speech synthesis
  const [isPopupDone, setIsPopupDone] = useState(false);

  useEffect(() => {
    //setup socket connection when mounted
    // add transports websocket to avoid CORS
    socket = socketIOClient(ENDPOINT, { transports: ["websocket"] });
    socket.on("connect", () => {
      console.log(`socket ${socket.id} connected`);
    });

    socket.on("botOutput", (data) => {
      addMessage({ name: botName, message: data.text });
    });

    // CLEAN UP THE EFFECT
    return () => socket.disconnect();
    //
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      <div className='app'>
        <InitPopup
          isPopupDone={isPopupDone}
          setIsPopupDone={setIsPopupDone}
          messages={messages}
        />
        <div className={isPopupDone ? `afterPopup` : `beforePopup`}>
          <CanvasWrapper
            transcript={transcript}
            changeVoice={changeVoice}
            speaking={speaking}
          />
          <Talker
            messages={messages}
            setMessages={setMessages}
            addMessage={addMessage}
            transcript={transcript}
            resetTranscript={resetTranscript}
          />
        </div>
      </div>
    </SocketContext.Provider>
  );
};

export default App;
