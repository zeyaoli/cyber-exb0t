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

const Talker = ({
  voiceIndex,
  messages,
  setMessages,
  addMessage,
  transcript,
  resetTranscript,
  changeVoice,
  speaking,
}) => {
  const [userInput, setUserInput] = useState("");
  const lastMessage = messages[messages.length - 1].message;
  // console.log(lastMessage);
  const { speak } = useSpeechSynthesis();
  return (
    <div className={`window talker`}>
      <TitleBar name='cyber$exb0t' />
      <div className='window-body'>
        <p className='instruction'>
          press the mic icon at the bottom of screen to speak to your bot
        </p>
        <hr className='solid'></hr>
        <OutputDisplay messages={messages} />
        <EmojiWrapper addMessage={addMessage} voiceIndex={voiceIndex} />
        <InputDisplay
          changeVoice={changeVoice}
          speaking={speaking}
          messages={messages}
        />
        <TalkButton
          setUserInput={setUserInput}
          transcript={transcript}
          resetTranscript={resetTranscript}
          messages={messages}
          setMessages={setMessages}
          addMessage={addMessage}
        />
      </div>
    </div>
  );
};

export default Talker;
