import React, { Component } from "react";

class EducationInfo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Education</h1>
        <form>
          <label htmlFor="school-name">School name</label>
          <input
            type="text"
            id="school-name"
            value={this.props.educationInfo.schoolName.text}
            onChange={(e) =>
              this.props.handleChange(e, "educationInfo", "schoolName")
            }
          />
          <label htmlFor="education-title">Title</label>
          <input
            type="text"
            id="education-title"
            value={this.props.educationInfo.title.text}
            onChange={(e) =>
              this.props.handleChange(e, "educationInfo", "title")
            }
          />
          <label htmlFor="start-date">From</label>
          <input
            type="date"
            id="start-date"
            value={this.props.educationInfo.startDate.text}
            onChange={(e) =>
              this.props.handleChange(e, "educationInfo", "startDate")
            }
          />
          <label htmlFor="First-name">to</label>
          <input
            type="date"
            id="end-date"
            value={this.props.educationInfo.endDate.text}
            onChange={(e) =>
              this.props.handleChange(e, "educationInfo", "endDate")
            }
          />
          <button
            type="button"
            onClick={() => this.props.onSubmitInfo("educationInfo")}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default EducationInfo;
