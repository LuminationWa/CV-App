import React, { useState } from "react";

const Overview = (props) => {
  const education = props.education;
  const personalInfo = props.personalInfo;
  const workExperience = props.workExperience;
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
          {education.map((course, index) => {
            return (
              <li key={course.id}>
                <h2>{course.schoolName.text}</h2>
                <h2>{course.title.text}</h2>
                <h2>
                  From {course.startDate.text} to {course.endDate.text}
                </h2>
                <button
                  type="button"
                  onClick={() => props.removeObject("education", index)}
                  class="hidden"
                >
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div id="work-experience">
        <h1>Work experience</h1>
        <ul>
          {workExperience.map((job, index) => {
            return (
              <li key={job.id}>
                <h2>{job.companyName.text}</h2>
                <h2>{job.position.text}</h2>
                <h2>
                  From {job.startDate.text} to {job.endDate.text}
                </h2>
                <button
                  type="button"
                  onClick={() => props.removeObject("workExperience", index)}
                  class="hidden"
                >
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Overview;
