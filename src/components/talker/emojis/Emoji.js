import React, { useContext } from "react";
import { getData } from "../../../utils/data";

const Emoji = (props) => {
  let response = null;
  const handleClick = () => {
    const botName = "cyber$exb0t";
    if (props.name === "heart") {
      response = { name: botName, message: getData().response.heart };
    }
    // invokes the callback with the new value
    props.onClick(response);
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
