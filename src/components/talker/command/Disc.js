import React from "react";
import { getData } from "../../../utils/data";

const Disc = ({ changeVoice, name, voiceNum, speaking }) => {
  const text = getData().initQuestion;
  const testVoice = () => {
    if (!speaking) {
      changeVoice(text, voiceNum);
    }
  };
  return (
    <div className='disc'>
      <button onClick={testVoice}>{name}</button>
    </div>
  );
};

export default Disc;
