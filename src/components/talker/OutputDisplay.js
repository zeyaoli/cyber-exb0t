import React, { useEffect, useRef } from "react";
import ChatWrapper from "../talker/ChatWrapper";

const OutputDisplay = ({ messages }) => {
  const messagesEndRef = useRef(null);

  //auto scroll to the bottom: https://stackoverflow.com/questions/37620694/how-to-scroll-to-bottom-in-react
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [messages]);

  // useEffect(()=>{

  // },)

  return (
    <div className={`container`} id='output'>
      <ChatWrapper messages={messages} />
      <div ref={messagesEndRef} />
    </div>
  );
};

export default OutputDisplay;
