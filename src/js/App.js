import React, { Component } from "react";
import "../styles/App.css";
import { STEPS } from "../config";
import { Arrow, Button } from "./components";
import { Step } from "./pages";

const BUTTON_STEP = 2;

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeStep: STEPS[0],
      steps: STEPS
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  render() {
    return (
      <div className="App">
        {this.getStepIdx() !== BUTTON_STEP && this.getStepIdx() && (
          <Arrow
            direction="left"
            handleOnClick={this.changeStep.bind(this, false)}
          />
        )}
        {this.state.steps.map((step, idx) => (
          <div className={this.getStepClass(step, idx)} key={idx}>
            <Step handleOnKeyDown={this.onKeyPressed} step={step} />
          </div>
        ))}
        {this.getStepIdx() !== BUTTON_STEP &&
          this.getStepIdx() < this.state.steps.length - 1 && (
            <Arrow
              show={this.getStepIdx() < this.state.steps.length - 1}
              direction="right"
              handleOnClick={this.changeStep.bind(this, true)}
            />
          )}

        {this.state.activeStep.key === "ideaBecomesABill" && (
          <div className="buttons-container">
            <Button
              title="Take your bill to the Senate!"
              handleOnClick={this.onButtonClick.bind(this, "SENATE")}
              //handleOnClick={this.onButtonClick.bind(this, true)}
            />
            <Button
              title="Take your bill to the House!"
              handleOnClick={this.onButtonClick.bind(this, "HOUSE")}
            />
          </div>
        )}
      </div>
    );
  }

  changeStep = increase => {
    const idx = this.getStepIdx();
    const nextStep = increase
      ? this.state.steps[idx + 1]
      : this.state.steps[idx - 1];
    if (nextStep) {
      this.setState({ activeStep: nextStep });
    }
  };

  getStepIdx = () => {
    console.log(this.state.steps);
    console.log(this.state.activeStep);
    return this.state.steps
      .map(step => step.key)
      .indexOf(this.state.activeStep.key);
  };
  getStepClass = (step, idx) => {
    const { activeStep } = this.state;
    if (step.key === activeStep.key) {
      return "active-step";
    }
    const activeIdx = this.state.steps
      .map(step => step.key)
      .indexOf(activeStep.key);
    return idx > activeIdx ? "future-step" : "past-step";
  };

  onButtonClick = nameOfButtonClicked => {
    console.log("nameOfButtonClicked", nameOfButtonClicked);
    console.log("Senate button clicked");
    const earlySteps = STEPS.slice(0, 3);
    console.log("earlySteps", earlySteps);
    const houseSteps = STEPS.slice(3, 6);
    console.log("houseSteps", houseSteps);
    const senateSteps = STEPS.slice(6, 9);
    console.log("senateSteps", senateSteps);

    let stepProcess = [];

    if (nameOfButtonClicked === "SENATE") {
      stepProcess = [...earlySteps, ...senateSteps, ...houseSteps, STEPS[9]];
      this.setState({ steps: stepProcess }, this.changeStep.bind(this, true));
    } else if (nameOfButtonClicked === "HOUSE") {
      stepProcess = [...earlySteps, ...houseSteps, ...senateSteps, STEPS[9]];
      this.setState({ steps: stepProcess }, this.changeStep.bind(this, true));
    }
  };

  onKeyPressed = e => {
    // this.setState() {
    //   return {
    //     title: this.state.steps[].title++, //how do we ++ with the this.state.steps array?
    //     subTitle: this.state.steps[].subTitle++
    //   }
    // }
  };
}

export default App;
