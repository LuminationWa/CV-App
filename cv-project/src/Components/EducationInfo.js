import React, { useState } from "react";

const EducationInfo = (props) => {
  return (
    <div>
      <h1>Education</h1>
      <form>
        <label htmlFor="school-name">School</label>
        <input
          type="text"
          id="school-name"
          value={props.educationInfo.schoolName.text}
          onChange={(e) => props.handleChange(e, "educationInfo")}
          name="schoolName"
        />
        <label htmlFor="education-title">Title</label>
        <input
          type="text"
          id="education-title"
          value={props.educationInfo.title.text}
          onChange={(e) => props.handleChange(e, "educationInfo")}
          name="title"
        />
        <label htmlFor="start-date">From</label>
        <input
          type="date"
          id="start-date"
          value={props.educationInfo.startDate.text}
          onChange={(e) => props.handleChange(e, "educationInfo")}
          name="startDate"
        />
        <label htmlFor="First-name">to</label>
        <input
          type="date"
          id="end-date"
          value={props.educationInfo.endDate.text}
          onChange={(e) => props.handleChange(e, "educationInfo")}
          name="endDate"
        />
        <button
          type="button"
          onClick={() => props.onSubmitInfo("educationInfo")}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default EducationInfo;
