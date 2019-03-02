import React from "react"
import { ChevronLeft } from "react-feather"

export function LeftArrow({ handleOnClick }) {
  return (
    <ChevronLeft
      onClick={handleOnClick}
      style={{
        position: "fixed",
        top: "calc(50% - 24px)",
        left: 0,
        height: "48px",
        width: "48px",
        color: "#fff",
        cursor: "pointer",
        zIndex: 999
      }}
    />
  )
}

export default LeftArrow
