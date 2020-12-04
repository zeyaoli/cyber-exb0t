import React from "react";
import "./Chat.css";

const ChatWrapper = ({ messages }) => {
  const items = messages.map((message, index) => {
    return (
      <div key={index}>
        <p
          className={`chatName ${
            message.name === "cyber$exb0t" ? `bot` : `human`
          }`}
        >
          {message.name}
        </p>
        <p className='chatOutput'>{message.message}</p>
      </div>
    );
  });

  return (
    <div className='chatWrapper'>
      {/* <p
        className={`chatName ${props.name === "cyber$exb0t" ? `bot` : `human`}`}
      >
        {props.name}
      </p>
      <p className='chatOutput'>{props.message}</p> */}
      {items}
    </div>
  );
};

export default ChatWrapper;
