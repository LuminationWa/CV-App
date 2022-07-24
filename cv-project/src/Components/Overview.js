import React, { Component } from "react";

class Overview extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div id="personal-info">
          <h1>Personal information</h1>
          <h2>{this.props.firstName + " " + this.props.lastName}</h2>
          <h2>{this.props.email}</h2>
          <h2>{this.props.phone}</h2>
        </div>
        <div id="education">

        </div>
        <div id="work-experience">
          
        </div>
      </div>
    );
  }
}

export default Overview;
