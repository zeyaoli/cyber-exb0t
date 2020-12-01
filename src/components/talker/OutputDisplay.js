import React, { useState, useEffect } from "react";
import { getState } from "../../utils/state";
import ChatWrapper from "../talker/ChatWrapper";

const OutputDisplay = () => {
  let botResponse = getState().bot.response.init;
  const botName = getState().bot.name;
  const [botOutput, setOutput] = useState(botResponse);
  useEffect(() => {
    setOutput(botResponse);
  });
  return (
    <div className={`container`} id='output'>
      <ChatWrapper name={botName} output={botOutput} />
    </div>
  );
};

export default OutputDisplay;
