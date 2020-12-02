import React, { useState } from "react";
import Talker from "../components/talker/Talker";
import CanvasWrapper from "../components/canvas/CanvasWrapper";
import "./App.css";
import { getData } from "../utils/data";
const App = () => {
  const data = getData();
  const botName = data.botName;
  const [messages, setMessages] = useState([
    { name: botName, message: data.response.init },
  ]);

  return (
    <div className='app'>
      <CanvasWrapper />
      <Talker messages={messages} setMessages={setMessages} />
    </div>
  );
};

export default App;
