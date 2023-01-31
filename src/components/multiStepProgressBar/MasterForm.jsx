import React, { Component } from "react";
import './masterForm.css';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import MultiStepProgressBar from "./MultiStepProgressBar";

class MasterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            campaignName: "",
            platform: "",
            product: "",
            budget: 0,
            startDate: "",
            endDate: "",
            location: "",
            radius: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this._next = this._next.bind(this);
        this._prev = this._prev.bind(this);
    };
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        let {
            campaignName,
            platform,
            product,
            budget,
            startDate,
            endDate,
            location,
            radius } = this.state;
            if (campaignName === "Get Leads As Calls" || campaignName === "Increase Live Store Traffic" || campaignName === "Increase The Catalogue Sales") {
                platform = "Google"
            } else if (campaignName === "Get Leads As Facebook Messages" || campaignName === "Increase Page Followers" || campaignName === "Get Customer Leads") {
                platform = "FB"
            } else if (campaignName === "Get More Youtube Views" || campaignName === "Increase Your App Installs") {
                platform = "Youtube"
            } else {
                platform = "Instagram"
            }
        this.storeIntoDb(campaignName,
            platform,
            product,
            budget,
            startDate,
            endDate,
            location,
            radius);
    };
    storeIntoDb = async ({ campaignName,
        platform,
        product,
        budget,
        startDate,
        endDate,
        location,
        radius }) => {
        
        await fetch("https://campaignlist-6872c-default-rtdb.firebaseio.com/.json", {
            method: "POST",
            body: campaignName,
            platform,
            product,
            budget,
            startDate,
            endDate,
            location,
            radius
        }).then((res) => {
            console.log(res);
        });
    };
  _next() {
      let currentStep = this.state.currentStep;
      currentStep = currentStep >= 3 ? 4 : currentStep + 1;
      this.setState({
          currentStep: currentStep
      });
    };
  _prev() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  }
  get previousButton() {
      let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button onClick={this._prev}>
          Back
        </button>
      );
    }
    return null;
  }
  get nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 4) {
      return (
        <button className="master-form--continue-button" onClick={this._next}>
          Continue
        </button>
      );
    }
    return null;
  }
  get submitButton() {
    let currentStep = this.state.currentStep;
    if (currentStep > 3) {
      return <button>Start Campaign</button>;
    }
    return null;
  }
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <MultiStepProgressBar currentStep={this.state.currentStep} />
                    <div className="progress-bar-form--body">
                        <Step1
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            campaignName={this.state.campaignName}
                        />
                        <Step2
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            product={this.state.product}
                        />
                        <Step3
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            budget={this.state.budget}
                            location={this.state.location}
                            radius={this.state.radius}
                        />
                        <Step4
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                        />
                    </div>
                    <div className="progress-bar-form--buttons">
                        {this.previousButton}
                        {this.nextButton}
                        {this.submitButton}
                    </div>
                </form>
            </>
        );
    };
};
export default MasterForm;