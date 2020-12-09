import React from "react";
import Disc from "./Disc";

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
        voiceNum='15'
      />
      <Disc
        changeVoice={changeVoice}
        speaking={speaking}
        name='Voice 4'
        voiceNum='20'
      />
    </div>
  );
};

export default Discs;
