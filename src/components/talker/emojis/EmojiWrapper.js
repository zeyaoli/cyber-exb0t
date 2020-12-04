import React from "react";
import Emoji from "./Emoji";
import "./emoji.css";
import { useSpeechSynthesis } from "react-speech-kit";

const EmojiWrapper = ({ addMessage }) => {
  const { speak } = useSpeechSynthesis();
  const handleClick = (response) => {
    addMessage(response);
  };
  return (
    // pass an onclick callback to Emoji
    <div className='emojiWrapper'>
      <Emoji
        name='heart'
        img='/assets/emojis/heart.png'
        onClick={handleClick}
      />
      <Emoji
        name='glasses-eye'
        img='/assets/emojis/glasses.png'
        onClick={handleClick}
      />
      <Emoji
        name='heart-eyes'
        img='/assets/emojis/heart-eyes.png'
        onClick={handleClick}
      />
      <Emoji
        name='laugh'
        img='/assets/emojis/laugh.png'
        onClick={handleClick}
      />
    </div>
  );
};

export default EmojiWrapper;
