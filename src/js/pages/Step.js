import React, { Fragment } from "react";

function Step({ handleOnKeyDown, step }) {
  return (
    <div onKeyDown={handleOnKeyDown} tabIndex="0">
      <header className="App-header">
        <Fragment>
          <h2>{step.title}</h2>
          <p>{step.subTitle}</p>
        </Fragment>
      </header>
    </div>
  )
}

export default Step
