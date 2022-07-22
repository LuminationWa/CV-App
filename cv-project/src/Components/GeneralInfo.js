import React, { Component } from "react";

class GeneralInfo extends Component {
  constructor() {
    super();
  }

  render() {
    // const { firstName, lastName, email, phone } = this.state;

    return (
      <div>
        <h1>Personal information</h1>
        <form>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={(e) => this.props.handleChange(e, "FirstName")}
          />
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={(e) => this.props.handleChange(e, "LastName")}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            onChange={(e) => this.props.handleChange(e, "email")}
          />
          <label htmlFor="phone-number">Phone Number</label>
          <input
            type="text"
            id="phone-number"
            onChange={(e) => this.props.handleChange(e, "Phone")}
          />
          <button type="submit">Add</button>
          <button type="">Delete</button>
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
