import React, { useState } from "react";
import TitleBar from "../TitleBar";
import { getState } from "../../utils/state";

const CanvasWrapper = () => {
  return (
    <div className={`window canvasWrapper`}>
      <TitleBar name='cyber$exb0t' />
      <div className='window-body'></div>
    </div>
  );
};

export default CanvasWrapper;
