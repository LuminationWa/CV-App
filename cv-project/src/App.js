import React, { useState } from "react";
import PersonalInfo from "./Components/PersonalInfo";
import EducationInfo from "./Components/EducationInfo";
import ExperienceInfo from "./Components/ExperienceInfo";
import Overview from "./Components/Overview";
import uniqid from "uniqid";
import "./styles/styles.css";

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({
    id: uniqid(),
    firstName: { text: "" },
    lastName: { text: "" },
    email: { text: "" },
    phone: { text: "" },
  });
  const [educationInfo, setEducationInfo] = useState({
    id: uniqid(),
    schoolName: { text: "" },
    title: { text: "" },
    startDate: { text: "" },
    endDate: { text: "" },
  });
  const [workExperience, setWorkExperience] = useState({
    id: uniqid(),
    companyName: { text: "" },
    position: { text: "" },
    startDate: { text: "" },
    endDate: { text: "" },
  });
  const [workExperienceArray, setWorkExperienceArray] = useState([]);
  const [educationArray, seteducationExperienceArray] = useState([]);

  // const removeObject = (targetState, index) => {
  //   // Creates a new array populated with all the same objects excluding the passed index one and assigns it as the state array
  //   switch (targetState) {
  //     case "workExperience":
  //       this.setState({
  //         workExperienceArray: this.state.workExperienceArray.filter(
  //           (_, i) => i !== index
  //         ),
  //       });
  //       break;
  //     case "education":
  //       this.setState({
  //         educationArray: this.state.educationArray.filter(
  //           (_, i) => i !== index
  //         ),
  //       });
  //       break;
  //   }
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo(...prevState => ({
      ...prevState,
      [name] : {text: value}
    }),
    );
    console.log(personalInfo);
    // switch (targetState) {
    //   case "personalInfo":
    //     this.setState((prevState) => {
    //       let personalInfo = Object.assign({}, prevState.personalInfo); // creates a copy of the state variable
    //       personalInfo[targetInfo].text = element.target.value; // updates the target property
    //       return { personalInfo }; // returns the new object
    //     });
    //     break;
    //   case "educationInfo":
    //     this.setState((prevState) => {
    //       let educationInfo = Object.assign({}, prevState.educationInfo);
    //       educationInfo[targetInfo].text = element.target.value;
    //       return { educationInfo };
    //     });
    //     break;
    //   case "workExperience":
    //     this.setState((prevState) => {
    //       let workExperience = Object.assign({}, prevState.workExperience);
    //       workExperience[targetInfo].text = element.target.value;
    //       return { workExperience };
    //     });
    //     break;
    // }
  };

  // onSubmitInfo = (targetState) => {
  //   // Adds stored object into array so it can be mapped later / sets values back to default so a new object can be added
  //   switch (targetState) {
  //     case "educationInfo":
  //       this.setState({
  //         educationArray: this.state.educationArray.concat(
  //           this.state.educationInfo
  //         ),
  //         educationInfo: {
  //           id: uniqid(),
  //           schoolName: { text: "" },
  //           title: { text: "" },
  //           startDate: { text: "" },
  //           endDate: { text: "" },
  //         },
  //       });
  //       break;
  //     case "workExperience":
  //       this.setState({
  //         workExperienceArray: this.state.workExperienceArray.concat(
  //           this.state.workExperience
  //         ),
  //         workExperience: {
  //           id: uniqid(),
  //           companyName: { text: "" },
  //           position: { text: "" },
  //           startDate: { text: "" },
  //           endDate: { text: "" },
  //         },
  //       });
  //       break;
  //   }
  // };
  console.log(personalInfo)
  return (
    <div id="main-content">
      <div id="form">
        <PersonalInfo handleChange={handleChange.bind(this)} />
        {/* <EducationInfo
          handleChange={this.handleChange.bind(this)}
          onSubmitInfo={this.onSubmitInfo.bind(this)}
          educationInfo={this.state.educationInfo}
        />
        <ExperienceInfo
          handleChange={this.handleChange.bind(this)}
          onSubmitInfo={this.onSubmitInfo.bind(this)}
          workExperience={this.state.workExperience}
        />
      </div>
      <div id="overview">
        <Overview
          personalInfo={this.state.personalInfo}
          education={this.state.educationArray}
          workExperience={this.state.workExperienceArray}
          removeObject={this.removeObject.bind(this)}
        /> */}
      </div>
    </div>
  );
}

export default App;
