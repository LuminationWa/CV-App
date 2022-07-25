import React, { Component } from "react";

class ExperienceInfo extends Component {
  constructor() {
    super();
  }

  render() {
    const workExperience = this.props.workExperience;
    return (
      <div>
        <h1>Work experience</h1>
        <form>
          <label htmlFor="company-name">Company</label>
          <input
            type="text"
            id="company-name"
            value={workExperience.companyName.text}
            onChange={(e) =>
              this.props.handleChange(e, "workExperience", "companyName")
            }
          />
          <label htmlFor="company-position">Position</label>
          <input
            type="text"
            id="company-position"
            value={workExperience.position.text}
            onChange={(e) =>
              this.props.handleChange(e, "workExperience", "position")
            }
          />
          <label htmlFor="job-start-date">From</label>
          <input
            type="date"
            id="job-start-date"
            value={workExperience.startDate.text}
            onChange={(e) =>
              this.props.handleChange(e, "workExperience", "startDate")
            }
          />
          <label htmlFor="job-end-date">To</label>
          <input
            type="date"
            id="job-end-date"
            value={workExperience.endDate.text}
            onChange={(e) =>
              this.props.handleChange(e, "workExperience", "endDate")
            }
          />
          <button
            type="button"
            onClick={() => this.props.onSubmitInfo("workExperience")}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default ExperienceInfo;
