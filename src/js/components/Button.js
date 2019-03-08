import React from "react";

const Button = ({ title, handleOnClick }) => {
  const style = {
    height: "2em",
    fontSize: "1.5em",
    borderRadius: "3px",
    cursor: "pointer"
  };

  return (
    <div>
      <button style={style} onClick={handleOnClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
