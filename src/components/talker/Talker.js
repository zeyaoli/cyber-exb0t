import React, { useState } from "react";
import TitleBar from "../TitleBar";
import { getState } from "../../utils/state";
import OutputDisplay from "./OutputDisplay";
import EmojiWrapper from "./emojis/EmojiWrapper";
import InputDisplay from "./InputDisplay";
import TalkButton from "./TalkButton";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./talker.css";

const Talker = () => {
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
        <OutputDisplay />
        <EmojiWrapper />
        <InputDisplay userInput={userInput} />
        <TalkButton
          setUserInput={setUserInput}
          transcript={transcript}
          resetTranscript={resetTranscript}
        />
      </div>
    </div>
  );
};

export default Talker;
