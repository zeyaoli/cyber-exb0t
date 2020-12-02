import React, { useState, useEffect } from "react";
import TitleBar from "../TitleBar";
import OutputDisplay from "./OutputDisplay";
import EmojiWrapper from "./emojis/EmojiWrapper";
import InputDisplay from "./InputDisplay";
import TalkButton from "./TalkButton";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { getData } from "../../utils/data";
import "./talker.css";

//https://github.com/JamesBrill/react-speech-recognition
//https://github.com/compulim/react-say

const Talker = ({ messages, setMessages }) => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [userInput, setUserInput] = useState("");
  return (
    <div className={`window talker`}>
      <TitleBar name='dirty-talker' />
      <div className='window-body'>
        <p className='instruction'>
          press the mic icon at the bottom of screen to speak to your bot
        </p>
        <hr className='solid'></hr>
        <OutputDisplay messages={messages} />
        <EmojiWrapper messages={messages} setMessages={setMessages} />
        <InputDisplay userInput={userInput} />
        <TalkButton
          setUserInput={setUserInput}
          transcript={transcript}
          resetTranscript={resetTranscript}
          messages={messages}
          setMessages={setMessages}
        />
      </div>
    </div>
  );
};

export default Talker;
