import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { getState } from "../../utils/state";

const TalkButton = ({
  setUserInput,
  transcript,
  resetTranscript,
  setMessages,
  messages,
}) => {
  const [isTalking, setIsTalking] = useState(false);
  let myInput = getState().me.input;

  const handleTalking = () => {
    if (!isTalking) {
      resetTranscript();
      setIsTalking(true);
      SpeechRecognition.startListening();
    } else {
      SpeechRecognition.stopListening();
      myInput = transcript;
      setUserInput(myInput);
      //if blank, don't send out to the output
      if (transcript !== "") {
        setMessages((messages) => [
          ...messages,
          { name: "human", message: myInput },
        ]);
      }

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
