import React, { useState, useEffect } from "react";
import TitleBar from "../TitleBar";
import "./canvas.css";
import Discs from "./Discs";

const CanvasWrapper = ({ changeVoice, speaking, messages }) => {
  const [choicesHidden, setChoicesHidden] = useState(false);
  let lastMessage = messages[messages.length - 1];
  // console.log(lastMessage);
  useEffect(() => {
    if (
      lastMessage ===
      `sweet! let's get started. we're in the jacuzzi. what do you want to do to me?`
    ) {
      setChoicesHidden(true);
    }
  }, [choicesHidden, lastMessage]);
  // console.log(choicesHidden);
  return (
    <div className={`window canvasWrapper`}>
      <TitleBar name='cyber$exb0t' />
      <div className={`window-body canvasBody`}>
        <div className={`container innerCanvas`}>
          {!choicesHidden && (
            <Discs changeVoice={changeVoice} speaking={speaking} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CanvasWrapper;
