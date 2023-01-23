import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const EmployeeLogin = () => {
  return (
      <div class="content">
        <div class="text">Login Form</div>

        <div class="field">
          <span class="fas fa-user"></span>
          <input id="empid" type="text" required />
          <label>Employee Email ID</label>
        </div>
        <div class="field">
          <span class="fas fa-eye"></span>
          <input
            id="otp"
            type="number"
            name="otp"
            pattern="[0-9]"
            title="OTP"
          />
          <label>Enter Your OTP</label>
        </div>

        <button>Sign in</button>
        <p>
          Are u an admin?
          <span />
          <Link to={"/admin-login"}>Click Here</Link>
        </p>
        <span />
      </div>
  );
};

export default EmployeeLogin;