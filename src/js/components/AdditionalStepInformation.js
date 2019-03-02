import React from "react"

function AdditionalStepInformation({ show, step }) {
  return (
    <div className={show ? "additional-information-active" : "additional-information-inactive"}>
      <p>{step.additionalInformation}</p>
    </div>
  )
}

export default AdditionalStepInformation
