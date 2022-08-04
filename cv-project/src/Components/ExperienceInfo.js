import React, { useState } from "react";

const ExperienceInfo = (props) => {
  return (
    <div>
      <h1>Work experience</h1>
      <form>
        <label htmlFor="company-name">Company</label>
        <input
          type="text"
          id="company-name"
          value={props.workExperience.companyName.text}
          onChange={(e) => props.handleChange(e, "workExperience")}
          name="companyName"
        />
        <label htmlFor="company-position">Position</label>
        <input
          type="text"
          id="company-position"
          value={props.workExperience.position.text}
          onChange={(e) => props.handleChange(e, "workExperience")}
          name="position"
        />
        <label htmlFor="job-start-date">From</label>
        <input
          type="date"
          id="job-start-date"
          value={props.workExperience.startDate.text}
          onChange={(e) => props.handleChange(e, "workExperience")}
          name="startDate"
        />
        <label htmlFor="job-end-date">To</label>
        <input
          type="date"
          id="job-end-date"
          value={props.workExperience.endDate.text}
          onChange={(e) => props.handleChange(e, "workExperience")}
          name="endDate"
        />
        <button
          type="button"
          onClick={() => props.onSubmitInfo("workExperience")}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default ExperienceInfo;
