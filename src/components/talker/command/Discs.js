import React from "react";
import Disc from "./Disc";
import "./Discs.css";

const Discs = ({ changeVoice, speaking }) => {
  return (
    <div className='discs'>
      <Disc
        changeVoice={changeVoice}
        speaking={speaking}
        name='Voice 1'
        voiceNum='0'
      />
      <Disc
        changeVoice={changeVoice}
        speaking={speaking}
        name='Voice 2'
        voiceNum='10'
      />
      <Disc
        changeVoice={changeVoice}
        speaking={speaking}
        name='Voice 3'
        voiceNum='11'
      />
      <Disc
        changeVoice={changeVoice}
        speaking={speaking}
        name='Voice 4'
        voiceNum='33'
      />
    </div>
  );
};

export default Discs;
