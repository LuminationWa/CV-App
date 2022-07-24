import React, { Component } from "react";

class EducationInfo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Education</h1>
        <form onSubmit={(e) => this.props.onSubmit(e)}>
          <label htmlFor="school-name">School name</label>
          <input
            type="text"
            id="school-name"
            onChange={(e) => this.props.handleChange(e, "schoolName")}
          />
          <label htmlFor="education-title">Title</label>
          <input
            type="text"
            id="education-title"
            onChange={(e) => this.props.handleChange(e, "title")}
          />
          <label htmlFor="start-date">From</label>
          <input
            type="date"
            id="start-date"
            onChange={(e) => this.props.handleChange(e, "startDate")}
          />
          <label htmlFor="First-name">to</label>
          <input
            type="date"
            id="end-date"
            onChange={(e) => this.props.handleChange(e, "endDate")}
          />
          <button type="submit">Add</button>
          <button type="button">Clear</button>
        </form>
      </div>
    );
  }
}

export default EducationInfo;
