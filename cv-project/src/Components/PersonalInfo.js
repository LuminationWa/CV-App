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
          onChange={(e) => props.handleChange(e, "personalInfo")}
          name="firstName"
        />
        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          onChange={(e) => props.handleChange(e, "personalInfo")}
          name="lastName"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={(e) => props.handleChange(e, "personalInfo")}
          name="email"
        />
        <label htmlFor="phone-number">Phone Number</label>
        <input
          type="text"
          id="phone-number"
          onChange={(e) => props.handleChange(e, "personalInfo")}
          name="phone"
        />
      </form>
    </div>
  );
};

export default PersonalInfo;
