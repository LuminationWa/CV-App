import React, { Component } from "react";
import uniqid from "uniqid";

class GeneralInfo extends Component {
  constructor() {
    super();
    this.state = {
      firstName: { text: "", id: uniqid() },
      lastName: { text: "" },
      email: { text: "" },
      phone: { text: "" },
    };
  }

  handleChange = (element, targetState) => {
    this.setState({
      [targetState]: {
        text: element.target.value,
      },
    });
  };

  render() {
    const { firstName, lastName, email, phone } = this.state;

    return (
      <div>
        <h1>Personal information</h1>
        <form>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={(e) => this.handleChange(e, "firstName")}
          />
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={(e) => this.handleChange(e, "lastName")}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            onChange={(e) => this.handleChange(e, "email")}
          />
          <label htmlFor="phone-number">Phone Number</label>
          <input
            type="text"
            id="phone-number"
            onChange={(e) => this.handleChange(e, "phone")}
          />
          <button type="submit">Add</button>
          <button type="">Delete</button>
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
