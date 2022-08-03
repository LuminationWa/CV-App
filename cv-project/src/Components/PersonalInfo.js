import React, { useState } from "react";

const PersonalInfo = (props) => {
    return (
      <div>
        <h1>Personal information</h1>
        <form>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={(e) =>
              props.handleChange(e)
            }
            name="firstName"
          />
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={(e) =>
              this.props.handleChange(e, "personalInfo", "lastName")
            }
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            onChange={(e) =>
              this.props.handleChange(e, "personalInfo", "email")
            }
          />
          <label htmlFor="phone-number">Phone Number</label>
          <input
            type="text"
            id="phone-number"
            onChange={(e) =>
              this.props.handleChange(e, "personalInfo", "phone")
            }
          />
        </form>
      </div>
    );
}

export default PersonalInfo;
