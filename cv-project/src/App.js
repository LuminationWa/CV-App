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
  const [educationExperienceArray, setEducationExperienceArray] = useState([]);

  const handleChange = (e, targetState) => {
    const { name, value } = e.target;
    switch (targetState) {
      case "personalInfo":
        setPersonalInfo((prevState) => ({
          ...prevState,
          [name]: { text: value },
        }));
        break;
      case "educationInfo":
        setEducationInfo((prevState) => ({
          ...prevState,
          [name]: { text: value },
        }));
        break;
      case "workExperience":
        setWorkExperience((prevState) => ({
          ...prevState,
          [name]: { text: value },
        }));
        break;
    }
  };

  const onSubmitInfo = (targetState) => {
    // Adds stored object into array so it can be mapped later / sets values back to default so a new object can be added
    switch (targetState) {
      case "educationInfo":
        setEducationExperienceArray(
          educationExperienceArray.concat(educationInfo)
        );
        setEducationInfo({
          id: uniqid(),
          schoolName: { text: "" },
          title: { text: "" },
          startDate: { text: "" },
          endDate: { text: "" },
        });
        break;
      case "workExperience":
        setWorkExperienceArray(workExperienceArray.concat(workExperience));
        setWorkExperience({
          id: uniqid(),
          companyName: { text: "" },
          position: { text: "" },
          startDate: { text: "" },
          endDate: { text: "" },
        });
        break;
    }
  };
  const removeObject = (targetState, index) => {
    // Creates a new array populated with all the same objects excluding the passed index one and assigns it as the state array
    switch (targetState) {
      case "workExperience":
        setWorkExperienceArray(
          workExperienceArray.filter((_, i) => i !== index)
        );
        break;
      case "education":
        setEducationExperienceArray(
          educationExperienceArray.filter((_, i) => i !== index)
        );
        break;
    }
  };
  return (
    <div id="main-content">
      <div id="form">
        <PersonalInfo handleChange={handleChange} />
        <EducationInfo
          handleChange={handleChange}
          onSubmitInfo={onSubmitInfo}
          educationInfo={educationInfo}
        />
        <ExperienceInfo
          handleChange={handleChange}
          onSubmitInfo={onSubmitInfo}
          workExperience={workExperience}
        />
      </div>
      <div id="overview">
        <Overview
          personalInfo={personalInfo}
          education={educationExperienceArray}
          workExperience={workExperienceArray}
          removeObject={removeObject}
        />
      </div>
    </div>
  );
};

export default App;
