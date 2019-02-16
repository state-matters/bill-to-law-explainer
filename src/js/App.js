import React, { Component, Fragment } from 'react';
import '../styles/App.css';
import { STEPS } from "../config"

/*
State:
  activeStep

Need to handle:
  onKeyDown:
    (parse the keycode)
      rightArrowClick (should go to next step)
      leftArrowClick (should go to prev step)
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Fragment>
            <h2>{STEPS[0].title}</h2>
            <p>{STEPS[0].subTitle}</p>
          </Fragment>
        </header>
      </div>
    );
  }
}

export default App;
