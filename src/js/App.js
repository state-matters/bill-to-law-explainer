import React, { Component } from "react"
import "../styles/App.css"
import { STEPS } from "../config"
import { Arrow, Button } from "./components"
import { Step } from "./pages"

const BUTTON_STEP = 2

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      activeStep: STEPS[0],
      steps: STEPS
    }
    this.onButtonClick = this.onButtonClick.bind(this)
  }

  render() {
    return (
      <div className="App">
        {this.getStepIdx() !== BUTTON_STEP && this.getStepIdx() !== 0 && (
          <Arrow direction="left" handleOnClick={this.changeStep.bind(this, false)} />
        )}
        {this.state.steps.map((step, idx) => (
          <div className={this.getStepClass(step, idx)} key={idx}>
            <Step handleOnKeyDown={this.onKeyPressed} step={step} />
          </div>
        ))}
        {this.getStepIdx() !== BUTTON_STEP && this.getStepIdx() < this.state.steps.length - 1 && (
          <Arrow direction="right" handleOnClick={this.changeStep.bind(this, true)} />
        )}

        {this.state.activeStep.key === "ideaBecomesABill" && (
          <div className="buttons-container">
            <Button onClick={this.onButtonClick.bind(this, "SENATE")}>
              Take your bill to the Senate!
            </Button>
            <Button onClick={this.onButtonClick.bind(this, "HOUSE")}>
              Take your bill to the House!
            </Button>
          </div>
        )}
      </div>
    )
  }

  changeStep = increase => {
    const idx = this.getStepIdx()
    const nextStep = increase ? this.state.steps[idx + 1] : this.state.steps[idx - 1]
    if (nextStep) {
      this.setState({ activeStep: nextStep })
    }
  }

  getStepIdx = () => {
    return this.state.steps.map(step => step.key).indexOf(this.state.activeStep.key)
  }
  getStepClass = (step, idx) => {
    const { activeStep } = this.state
    if (step.key === activeStep.key) {
      return "active-step"
    }
    const activeIdx = this.state.steps.map(step => step.key).indexOf(activeStep.key)
    return idx > activeIdx ? "future-step" : "past-step"
  }

  onButtonClick = nameOfButtonClicked => {
    const earlySteps = STEPS.slice(0, 3)
    const houseSteps = STEPS.slice(3, 6)
    const senateSteps = STEPS.slice(6, 9)

    let stepProcess = []

    if (nameOfButtonClicked === "SENATE") {
      stepProcess = [...earlySteps, ...senateSteps, ...houseSteps, STEPS[9]]
      this.setState({ steps: stepProcess }, this.changeStep.bind(this, true))
    } else if (nameOfButtonClicked === "HOUSE") {
      stepProcess = [...earlySteps, ...houseSteps, ...senateSteps, STEPS[9]]
      this.setState({ steps: stepProcess }, this.changeStep.bind(this, true))
    }
  }

  onKeyPressed = e => {
    // this.setState() {
    //   return {
    //     title: this.state.steps[].title++, //how do we ++ with the this.state.steps array?
    //     subTitle: this.state.steps[].subTitle++
    //   }
    // }
  }
}

export default App
