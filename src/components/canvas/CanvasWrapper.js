import React, { useState } from "react";
import TitleBar from "../TitleBar";
import "./canvas.css";
import Discs from "./Discs";

const CanvasWrapper = ({ changeVoice, speaking }) => {
  return (
    <div className={`window canvasWrapper`}>
      <TitleBar name='cyber$exb0t' />
      <div className={`window-body canvasBody`}>
        <div className={`container innerCanvas`}>
          <Discs changeVoice={changeVoice} speaking={speaking} />
        </div>
      </div>
    </div>
  );
};

export default CanvasWrapper;
