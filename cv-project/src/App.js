import React, { Component } from "react";
import GeneralInfo from "./Components/GeneralInfo";
import EducationInfo from "./Components/EducationInfo";
import ExperienceInfo from "./Components/ExperienceInfo";
import Overview from "./Components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: { text: "" },
      lastName: { text: "" },
      email: { text: "" },
      phone: { text: "" },
      educationInfo: {
        id: uniqid(),
        schoolName: { text: "" },
        title: { text: "" },
        startDate: { text: "" },
        endDate: { text: "" },
      },
      educationArray: [],
    };
  }

  handleChange = (element, targetState) => {
    this.setState({
      [targetState]: {
        text: element.target.value,
      },
    });
    console.log(this.state);
  };

  handleChangeEducation = (element, targetState) => {
    this.setState((prevState) => {
      let educationInfo = Object.assign({}, prevState.educationInfo); // creating copy of state variable jasper
      educationInfo[targetState] = element.target.value; // update the name property, assign a new value
      return { educationInfo }; // return new object jasper object
    });
  };

  onSubmit = (element) => {
    element.preventDefault();
    this.setState({
      educationArray: this.state.tasks.concat(this.state.task),
      educationInfo: {
        id: uniqid(),
        schoolName: { text: "" },
        title: { text: "" },
        startDate: { text: "" },
        endDate: { text: "" },
      },
    });
  };

  render() {
    return (
      <div>
        <form>
          <GeneralInfo handleChange={this.handleChange.bind(this)} />
          <EducationInfo
            handleChange={this.handleChangeEducation.bind(this)}
            onSubmit={this.onSubmit.bind(this)}
          />
          <ExperienceInfo handleChange={this.handleChange.bind(this)} />
          <Overview
            firstName={this.state.firstName.text}
            lastName={this.state.lastName.text}
            email={this.state.email.text}
            phone={this.state.phone.text}
          />
        </form>
      </div>
    );
  }
}

export default App;
