import React, { useState } from "react";
import TitleBar from "../TitleBar";
import "./canvas.css";

const CanvasWrapper = ({ message, setMessage }) => {
  return (
    <div className={`window canvasWrapper`}>
      <TitleBar name='cyber$exb0t' />
      <div className={`window-body canvasBody`}>
        <div className={`container innerCanvas`}></div>
      </div>
    </div>
  );
};

export default CanvasWrapper;
