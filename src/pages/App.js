import React, { useState, useCallback } from "react";
import Talker from "../components/talker/Talker";
import CanvasWrapper from "../components/canvas/CanvasWrapper";
import InitPopup from "../components/InitPopup";
import "./App.css";
import { getData } from "../utils/data";
import { useSpeechSynthesis } from "react-speech-kit";
const App = () => {
  const { speak } = useSpeechSynthesis();
  const data = getData();
  const botName = data.botName;

  const [messages, setMessages] = useState([
    { name: botName, message: data.response.init },
  ]);
  //wrap speak and push new message to one function
  const addMessage = useCallback(
    (message) => {
      setMessages((messages) => [...messages, message]);
      if (message.name === botName) {
        speak({ text: message.message });
      }
    },
    [botName, speak]
  );
  //check if the popup is gone or not - if gone enter the game
  // also a button to trigger speech synthesis
  const [isPopupDone, setIsPopupDone] = useState(false);

  return (
    <div className='app'>
      <InitPopup
        isPopupDone={isPopupDone}
        setIsPopupDone={setIsPopupDone}
        messages={messages}
      />
      <div className={isPopupDone ? `afterPopup` : `beforePopup`}>
        <CanvasWrapper />
        <Talker
          messages={messages}
          setMessages={setMessages}
          addMessage={addMessage}
        />
      </div>
    </div>
  );
};

export default App;
