import React from "react";
import "../styles/left-arrow.css";
import LeftArrowImg from "../images/left-arrow.png";

export function LeftArrow(props) {
  return (
    <img
      onClick={props.onClick}
      src={LeftArrowImg}
      className="left-arrow-img"
    />
  );
}

export default LeftArrow;
