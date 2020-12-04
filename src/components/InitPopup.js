import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const InitPopup = ({ isPopupDone, setIsPopupDone, messages }) => {
  const { speak } = useSpeechSynthesis();
  const initMessage = messages[messages.length - 1].message;
  const handleClick = () => {
    setIsPopupDone(true);
    speak({ text: initMessage });
  };

  return (
    <div className='scrim' style={{ display: isPopupDone ? `none` : `block` }}>
      <div className='popup window'>
        <div className='title-bar'>
          <div className='title-bar-text'>welcome to cyber$exb0t</div>
          <div className='title-bar-controls'>
            <button aria-label='Close' onClick={handleClick} />
          </div>
        </div>
        <div className='window-body' id='window-popup'>
          <p>Welcome to cyber$exb0t</p>
          <p>Use headphones and a mic to get the full experience</p>
          <button onClick={handleClick}>Ok</button>
        </div>
      </div>
    </div>
  );
};

export default InitPopup;
