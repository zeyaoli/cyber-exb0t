import React, { useState, useContext } from "react";
import SocketContext from "../../utils/SocketContext";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { getData } from "../../utils/data";

const TalkButton = ({
  setUserInput,
  transcript,
  resetTranscript,
  setMessages,
  messages,
}) => {
  const socket = useContext(SocketContext);
  const [isTalking, setIsTalking] = useState(false);

  const humanName = getData().humanName;

  const handleTalking = () => {
    if (!isTalking) {
      resetTranscript();
      setIsTalking(true);
      SpeechRecognition.startListening();
    } else {
      SpeechRecognition.stopListening();
      setUserInput(transcript);
      //if blank, don't send out to the output
      if (transcript !== "") {
        setMessages((messages) => [
          ...messages,
          { name: humanName, message: transcript },
        ]);
      }
      // console.log(transcript);
      socket.emit("userInput", { transcript });

      //   resetTranscript();
      setIsTalking(false);
    }
  };

  return (
    <>
      <button className={`talkButton`} onClick={handleTalking}>
        <img
          src='/assets/images/TalkButton.svg'
          alt='talk'
          id='buttonImg'
        ></img>
        {isTalking ? "Hearing..." : "Talk"}
      </button>
    </>
  );
};

export default TalkButton;
