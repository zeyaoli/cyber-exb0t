import React, { useState } from "react";
import TitleBar from "../TitleBar";
import OutputDisplay from "./OutputDisplay";
import EmojiWrapper from "./emojis/EmojiWrapper";
import InputDisplay from "./InputDisplay";
import TalkButton from "./TalkButton";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useSpeechSynthesis } from "react-speech-kit";
import "./talker.css";

//https://github.com/JamesBrill/react-speech-recognition

const Talker = ({ messages, setMessages, addMessage }) => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [userInput, setUserInput] = useState("");
  const lastMessage = messages[messages.length - 1].message;
  console.log(lastMessage);
  const { speak } = useSpeechSynthesis();
  return (
    <div className={`window talker`}>
      <TitleBar name='dirty-talker' />
      <div className='window-body'>
        <p className='instruction'>
          press the mic icon at the bottom of screen to speak to your bot
        </p>
        <hr className='solid'></hr>
        <OutputDisplay messages={messages} />
        <EmojiWrapper addMessage={addMessage} />
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
