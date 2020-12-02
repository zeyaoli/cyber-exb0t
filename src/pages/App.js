import React, { useState } from "react";
import Talker from "../components/talker/Talker";
import CanvasWrapper from "../components/canvas/CanvasWrapper";
import "./App.css";

const App = () => {
  const [message, setMessage] = useState("");
  return (
    <div className='app'>
      <CanvasWrapper message={message} setMessage={setMessage} />
      <Talker message={message} setMessage={setMessage} />
    </div>
  );
};

export default App;
