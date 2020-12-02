import React, { useState, useEffect } from "react";
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

  return <div className='chatWrapper'>{items}</div>;
};

export default ChatWrapper;
