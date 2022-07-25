import React, { Component } from "react";
import PersonalInfo from "./Components/PersonalInfo";
import EducationInfo from "./Components/EducationInfo";
import ExperienceInfo from "./Components/ExperienceInfo";
import Overview from "./Components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      personalInfo: {
        id: uniqid(),
        firstName: { text: "" },
        lastName: { text: "" },
        email: { text: "" },
        phone: { text: "" },
      },
      educationInfo: {
        id: uniqid(),
        schoolName: { text: "" },
        title: { text: "" },
        startDate: { text: "" },
        endDate: { text: "" },
      },
      workExperience: {
        id: uniqid(),
        companyName: { text: "" },
        position: { text: "" },
        startDate: { text: "" },
        endDate: { text: "" },
      },
      workExperienceArray: [],
      educationArray: [],
    };
  }

  handleChange = (element, targetState, targetInfo) => {
    switch (targetState) {
      case "personalInfo":
        this.setState((prevState) => {
          let personalInfo = Object.assign({}, prevState.personalInfo); // creates a copy of the state variable
          personalInfo[targetInfo].text = element.target.value; // updates the target property
          return { personalInfo }; // returns the new object
        });
        break;
      case "educationInfo":
        this.setState((prevState) => {
          let educationInfo = Object.assign({}, prevState.educationInfo);
          educationInfo[targetInfo].text = element.target.value;
          return { educationInfo };
        });
        break;
      case "workExperience":
        this.setState((prevState) => {
          let workExperience = Object.assign({}, prevState.workExperience);
          workExperience[targetInfo].text = element.target.value;
          return { workExperience };
        });
        break;
    }
  };

  onSubmitInfo = (targetState) => {
    // Adds stored object into array so it can be mapped later / sets values back to default so a new object can be added
    switch (targetState) {
      case "educationInfo":
        this.setState({
          educationArray: this.state.educationArray.concat(
            this.state.educationInfo
          ),
          educationInfo: {
            id: uniqid(),
            schoolName: { text: "" },
            title: { text: "" },
            startDate: { text: "" },
            endDate: { text: "" },
          },
        });
        break;
      case "workExperience":
        this.setState({
          workExperienceArray: this.state.workExperienceArray.concat(
            this.state.workExperience
          ),
          workExperience: {
            id: uniqid(),
            companyName: { text: "" },
            position: { text: "" },
            startDate: { text: "" },
            endDate: { text: "" },
          },
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <PersonalInfo handleChange={this.handleChange.bind(this)} />
        <EducationInfo
          handleChange={this.handleChange.bind(this)}
          onSubmitInfo={this.onSubmitInfo.bind(this)}
          educationInfo={this.state.educationInfo}
        />
        <ExperienceInfo
          handleChange={this.handleChange.bind(this)}
          onSubmitInfo={this.onSubmitInfo.bind(this)}
          workExperience={this.state.workExperience}
        />
        <Overview
          personalInfo={this.state.personalInfo}
          education={this.state.educationArray}
          workExperience={this.state.workExperienceArray}
        />
      </div>
    );
  }
}

export default App;
