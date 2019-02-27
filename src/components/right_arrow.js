import React from "react";
import "../styles/right-arrow.css";
import RightArrowImg from "../images/right-arrow.png";

function RightArrow(props) {
  return (
    <img
      onClick={props.onClick}
      src={RightArrowImg}
      className="right-arrow-img"
    />
  );
}

export default RightArrow;
