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

const Talker = ({ message, setMessage }) => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [userInput, setUserInput] = useState("");
  const data = getData();
  const [messages, setMessages] = useState([
    { name: "cyber$exb0t", message: data.response.init },
  ]);

  return (
    <div className={`window talker`}>
      <TitleBar name='dirty-talker' />
      <div className='window-body'>
        <p className='instruction'>
          press the mic icon at the bottom of screen to speak to your bot
        </p>
        <hr className='solid'></hr>
        <OutputDisplay messages={messages} />
        <EmojiWrapper
          message={message}
          messages={messages}
          setMessage={setMessage}
          setMessages={setMessages}
        />
        <InputDisplay userInput={userInput} />
        <TalkButton
          setUserInput={setUserInput}
          transcript={transcript}
          resetTranscript={resetTranscript}
          message={message}
          messages={messages}
          setMessage={setMessage}
          setMessages={setMessages}
        />
      </div>
    </div>
  );
};

export default Talker;
