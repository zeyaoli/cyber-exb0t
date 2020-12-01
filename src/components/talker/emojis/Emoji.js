import React from "react";

const Emoji = (props) => {
  const handleClick = () => {
    console.log(props.name);
  };
  return (
    <input
      type='image'
      src={props.img}
      className='emoji'
      alt={props.name}
      onClick={handleClick}
      width='35'
      height='35'
    />
  );
};

export default Emoji;
