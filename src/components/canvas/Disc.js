import React from "react";

const Disc = ({ changeVoice, name, voiceNum, speaking }) => {
  const text = "Are you ready to have sex with me? Press the mic and say yes";
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
