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
      generalInfo: {
        firstName: { text: "", id: uniqid() },
        lastName: { text: "", id: uniqid() },
        email: { text: "", id: uniqid() },
        phone: { text: "", id: uniqid() },
      },
    };
  }

  handleChange = (element, targetState) => {
    this.setState({
      [targetState]: {
        text: element.target.value
      }
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form>
          <GeneralInfo handleChange={this.handleChange.bind(this)} />
          <EducationInfo handleChange={this.handleChange.bind(this)}/>
          <ExperienceInfo handleChange={this.handleChange.bind(this)}/>
          <Overview/>
        </form>
      </div>
    );
  }
}

export default App;
