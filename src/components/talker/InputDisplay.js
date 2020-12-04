import React from "react";

const InputDisplay = ({ userInput }) => {
  return (
    <div className={`container`} id='input'>
      <p>{userInput}</p>
    </div>
  );
};

export default InputDisplay;
