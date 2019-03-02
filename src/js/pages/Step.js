import React, { Component, Fragment } from "react"
import { ChevronUp } from "react-feather"
import { AdditionalStepInformation } from "../components"

class Step extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      showAdditionalInformation: false
    }
  }

  render() {
    const { handleOnKeyDown, step } = this.props
    const { showAdditionalInformation } = this.state
    return (
        <div onKeyDown={handleOnKeyDown} tabIndex="0">
          <header className={`App-${step.type}`}>
            <Fragment>
              <h2>{step.title}</h2>
              <p>{step.subTitle}</p>
            </Fragment>
            <div className="learn-more">
              {step.additionalInformation ? (
                <div className="margin-1-t" onClick={this.showAdditionalInformation}>
                  <p>
                    <small>Learn More <ChevronUp /></small>
                  </p>
                  <AdditionalStepInformation
                    show={showAdditionalInformation}
                    step={step}
                  />
                </div>
              ) : null}
            </div>
          </header>
        </div>
    )
  }

  showAdditionalInformation = () => {
    this.setState({ showAdditionalInformation: true })
  }
}

export default Step
