import React, { Component } from "react"
import "../styles/App.css"
import { STEPS } from "../config"
import { LeftArrow, RightArrow } from "./components"
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
        <LeftArrow onClick={this.goPrevStep} title="Previous" />
        <Step step={this.state.activeStep} handleOnKeyDown={this.onKeyPressed} />
        <RightArrow onClick={this.goNextStep} title="Next" />
      </div>
    )
  }

  goNextStep = () => {
    const { activeStep } = this.state
    const idx = STEPS.map(step => step.key).indexOf(activeStep.key)
    if (idx + 1 <= STEPS.length - 1) {
      this.setState({ activeStep: STEPS[idx + 1] })
    }
  }

  goPrevStep = () => {
    const { activeStep } = this.state
    const idx = STEPS.map(step => step.key).indexOf(activeStep.key)
    if (idx - 1 >= 0) {
      this.setState({ activeStep: STEPS[idx - 1] })
    }
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
