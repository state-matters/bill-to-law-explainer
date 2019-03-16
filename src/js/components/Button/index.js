import React, { forwardRef } from "react"
import "./button.css"

const Button = forwardRef(({ children, ...props }, ref) => {
  const style = {
    height: "2em",
    fontSize: "1.5em",
    borderRadius: "3px",
    cursor: "pointer",
    display: "inline-block"
  }

  return (
    <button className="button" style={style} {...props} ref={ref}>
      {children}
    </button>
  )
})

export default Button
