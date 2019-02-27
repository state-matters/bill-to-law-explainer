import React, { Component, Fragment } from "react";
import "../styles/App.css";
import { STEPS } from "../config";
import RightArrow from "../components/right_arrow";
import { LeftArrow } from "../components/left_arrow";

/*
State:
  activeStep

Need to handle:
  onKeyDown:
    (parse the keycode)
      rightArrowClick (should go to next step)
      leftArrowClick (should go to prev step)
*/

//Add onKeyDown with a componentWillMount function
//Style the buttons so that they look nice maybe arrows??
//Split to decide does it go to the house or senate?

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: STEPS[0]
    };
    this.goNextStep = this.goNextStep.bind(this);
    this.goPrevStep = this.goPrevStep.bind(this);
  }

  onClickChangeForward() {
    console.log("Right button clicked");
    // this.setState() {
    //   return {
    //     title: STEPS[].title++, //how do we ++ with the STEPS array?
    //     subTitle: STEPS[].subTitle++
    //   }
    // }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Fragment>
            <h2>{this.state.activeStep.title}</h2>
            <p>{this.state.activeStep.subTitle}</p>
          </Fragment>
          <div className="left-arrow">
            <LeftArrow onClick={this.goPrevStep} title="Previous" />
          </div>
          <div className="right-arrow">
            <RightArrow onClick={this.goNextStep} title="Next" />
          </div>
        </header>
      </div>
    );
  }

  goNextStep() {
    const { activeStep } = this.state;
    const idx = STEPS.map(step => step.key).indexOf(activeStep.key);
    if (idx + 1 <= STEPS.length - 1) {
      this.setState({ activeStep: STEPS[idx + 1] });
    }
  }

  goPrevStep() {
    const { activeStep } = this.state;
    const idx = STEPS.map(step => step.key).indexOf(activeStep.key);
    if (idx - 1 >= 0) {
      this.setState({ activeStep: STEPS[idx - 1] });
    }
  }
}

export default App;
