import React, { useState, useEffect } from "react";
import { getState } from "../../utils/state";
import ChatWrapper from "../talker/ChatWrapper";

const OutputDisplay = ({ messages }) => {
  return (
    <div className={`container`} id='output'>
      <ChatWrapper messages={messages} />
    </div>
  );
};

export default OutputDisplay;
