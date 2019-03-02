import React from "react"
import { ChevronRight } from "react-feather"

export function RightArrow({ handleOnClick }) {
  return (
    <ChevronRight
      onClick={handleOnClick}
      style={{
        position: "fixed",
        top: "calc(50% - 24px)",
        right: 0,
        height: "48px",
        width: "48px",
        color: "#fff",
        cursor: "pointer",
        zIndex: 999
      }}
    />
  )
}

export default RightArrow
