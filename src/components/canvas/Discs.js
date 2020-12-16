import React from "react";
import Disc from "./Disc";

const Discs = ({ changeVoice, speaking }) => {
  return (
    <div className='discs'>
      <h4>Click below to test out a voice</h4>
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
