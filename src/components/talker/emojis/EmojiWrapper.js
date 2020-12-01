import React from "react";
import Emoji from "./Emoji";
import "./emoji.css";

const EmojiWrapper = () => {
  return (
    <div className='emojiWrapper'>
      <Emoji name='heart' img='/assets/emojis/heart.png' />
      <Emoji name='glasses-eye' img='/assets/emojis/glasses.png' />
      <Emoji name='heart-eyes' img='/assets/emojis/heart-eyes.png' />
      <Emoji name='laugh' img='/assets/emojis/laugh.png' />
    </div>
  );
};

export default EmojiWrapper;
