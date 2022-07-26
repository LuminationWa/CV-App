import React, { Component } from "react";

class Overview extends Component {
  constructor() {
    super();
  }

  render() {
    const education = this.props.education;
    const personalInfo = this.props.personalInfo;
    const workExperience = this.props.workExperience;
    return (
      <div>
        <div id="personal-info">
          <h1>Personal information</h1>
          <h2>
            {personalInfo.firstName.text + " " + personalInfo.lastName.text}
          </h2>
          <h2>{personalInfo.email.text}</h2>
          <h2>{personalInfo.phone.text}</h2>
        </div>
        <div id="education">
          <h1>Education</h1>
          <ul>
            {education.map((course) => {
              return (
                <li key={course.id}>
                  <h2>{course.schoolName.text}</h2>
                  <h2>{course.title.text}</h2>
                  <h2>
                    From {course.startDate.text} to {course.endDate.text}
                  </h2>
                </li>
              );
            })}
          </ul>
        </div>
        <div id="work-experience">
          <h1>Work experience</h1>
          <ul>
            {workExperience.map((job) => {
              return (
                <li key={job.id}>
                  <h2>{job.companyName.text}</h2>
                  <h2>{job.position.text}</h2>
                  <h2>
                    From {job.startDate.text} to {job.endDate.text}
                  </h2>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Overview;
