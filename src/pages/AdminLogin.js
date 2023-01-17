import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const AdminLogin = () => {
  return (
    <div>
      <div class="text">Admin Login</div>

      <div class="field">
        <span class="fas fa-user"></span>
        <input type="text" required />
        <label>User name</label>
      </div>
      <div class="field">
        <span class="fas fa-lock"></span>
        <input type="password" />
        <label>Password</label>
      </div>
      <div class="forgot-pass">
        <a href="#">Forgot Password?</a>
      </div>
      <button>Sign in</button>
      <p>
        Are u a Employee?
        <span />
        <Link to={"/"}>Click Here</Link>
      </p>
      <span />
    </div>
  );
};
export default AdminLogin;
