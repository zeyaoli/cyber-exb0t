import React from "react";

const TitleBar = (props) => {
  return (
    <div className='title-bar'>
      <div className='title-bar-text'>{props.name}</div>
      <div className='title-bar-controls'>
        <button aria-label='Minimize' />
        <button aria-label='Maximize' />
        <button aria-label='Close' />
      </div>
    </div>
  );
};

export default TitleBar;
