import React from "react"
import { ChevronLeft, ChevronRight } from "react-feather"

export function Arrow({ direction, handleOnClick }) {
  const style = {
    position: "fixed",
    top: "calc(50% - 24px)",
    height: "48px",
    width: "48px",
    color: "#fff",
    cursor: "pointer",
    zIndex: 999
  }

  style[direction] = 0

  return (
    direction === "right" ? (
      <ChevronRight
        onClick={handleOnClick}
        style={style}
      />
    ) : (
      <ChevronLeft
        onClick={handleOnClick}
        style={style}
      />
    )
  )
}

export default Arrow
