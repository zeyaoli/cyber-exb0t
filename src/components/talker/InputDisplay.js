import React, { useState, useEffect } from "react";
import Discs from "./command/Discs";
import Prompt from "./command/Prompt";
const InputDisplay = ({ changeVoice, speaking, messages }) => {
  const [hideButton, setHideButton] = useState(false);
  let lastMessage = messages[messages.length - 1];
  console.log(lastMessage);
  useEffect(() => {
    if (lastMessage.message.includes(`what's your name`)) {
      setHideButton(true);
    }
  }, [lastMessage]);
  console.log(hideButton);
  return (
    <div className={`container`} id='input'>
      {!hideButton ? (
        <Discs changeVoice={changeVoice} speaking={speaking} />
      ) : (
        <Prompt />
      )}
    </div>
  );
};

export default InputDisplay;
