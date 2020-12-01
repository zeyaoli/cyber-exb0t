import React from "react";
import Talker from "../components/talker/Talker";
import CanvasWrapper from "../components/canvas/CanvasWrapper";
import "./App.css";

const App = () => {
  return (
    <div className='app'>
      <CanvasWrapper />
      <Talker />
    </div>
  );
};

export default App;
