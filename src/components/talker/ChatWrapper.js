import React, { useState, useEffect } from "react";
import { getState } from "../../utils/state";
import "./Chat.css";

const ChatWrapper = (props) => {
  return (
    <div className='chatWrapper'>
      <p
        className={`chatName ${props.name === "cyber$exb0t" ? `bot` : `human`}`}
      >
        {props.name}
      </p>
      <p className='chatOutput'>{props.output}</p>
    </div>
  );
};

export default ChatWrapper;
