import React from "react";

function RightArrow(props) {
  return <button onClick={props.onClick}>{props.title}</button>;
}

export default RightArrow;
