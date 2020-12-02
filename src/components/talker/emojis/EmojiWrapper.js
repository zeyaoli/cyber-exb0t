import React from "react";
import Emoji from "./Emoji";
import "./emoji.css";

export const EmojisContext = React.createContext();

const EmojiWrapper = ({ messages, setMessages }) => {
  const handleClick = (response) => {
    setMessages((messages) => [...messages, response]);
  };
  return (
    // pass an onclick callback to Emoji
    <div className='emojiWrapper'>
      <Emoji
        name='heart'
        img='/assets/emojis/heart.png'
        onClick={handleClick}
      />
      <Emoji name='glasses-eye' img='/assets/emojis/glasses.png' />
      <Emoji name='heart-eyes' img='/assets/emojis/heart-eyes.png' />
      <Emoji name='laugh' img='/assets/emojis/laugh.png' />
    </div>
  );
};

export default EmojiWrapper;
