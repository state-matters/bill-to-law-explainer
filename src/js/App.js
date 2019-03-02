import React, { Component } from "react"
import "../styles/App.css"
import { STEPS } from "../config"
import { Arrow } from "./components"
import { Step } from "./pages"

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      activeStep: STEPS[0]
    }
  }

  render() {
    return (
      <div className="App">
        <Arrow
          direction="left"
          handleOnClick={this.changeStep.bind(this, false)}
        />
        {STEPS.map((step, idx) => (
          <div
            className={this.getStepClass(step, idx)}
            key={idx}
          >
            <Step
              handleOnKeyDown={this.onKeyPressed}
              step={step}
            />
          </div>
        ))}
        <Arrow
          direction="right"
          handleOnClick={this.changeStep.bind(this, true)}
        />
      </div>
    )
  }

  changeStep = increase => {
    const { activeStep } = this.state
    const idx = STEPS.map(step => step.key).indexOf(activeStep.key)
    const nextStep = increase ? STEPS[idx + 1] : STEPS[idx - 1]
    if (nextStep) {
      this.setState({ activeStep: nextStep })
    }
  }

  getStepClass = (step, idx) => {
    const { activeStep } = this.state
    if (step.key === activeStep.key) {
      return "active-step"
    }
    const activeIdx = STEPS.map(step => step.key).indexOf(activeStep.key)
    return idx > activeIdx ? "future-step" : "past-step"
  }

  onKeyPressed = e => {
    console.log(e)
    // this.setState() {
    //   return {
    //     title: STEPS[].title++, //how do we ++ with the STEPS array?
    //     subTitle: STEPS[].subTitle++
    //   }
    // }
  }
}

export default App
