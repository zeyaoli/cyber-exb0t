import React, { useState, useEffect, useRef } from "react";
import ChatWrapper from "../talker/ChatWrapper";

const OutputDisplay = ({ messages }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [messages]);
  return (
    <div className={`container`} id='output'>
      <ChatWrapper messages={messages} />
      <div ref={messagesEndRef} />
    </div>
  );
};

export default OutputDisplay;
