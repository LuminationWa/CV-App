import React, { Component } from "react";
import GeneralInfo from "./Components/GeneralInfo";
import EducationInfo from "./Components/EducationInfo";
import ExperienceInfo from "./Components/ExperienceInfo";

class App extends Component {
  render() {
    return (
    <div>
      <form>
        <GeneralInfo/>
        <EducationInfo/>
        <ExperienceInfo/>
      </form>
    </div>);
  }
}

export default App;