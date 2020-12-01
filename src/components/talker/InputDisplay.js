import React, { useState, useEffect } from "react";
import { getState } from "../../utils/state";

const InputDisplay = ({ userInput }) => {
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log(myInput);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div className={`container`} id='input'>
      <p>{userInput}</p>
    </div>
  );
};

export default InputDisplay;
