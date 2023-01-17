import React from "react";
import "./style.css"
const admin= () =>
{
    <div>
  <div class="text">Admin Login</div>
       
            <div class="field">
                <span class="fas fa-user"></span>
                <input type="text" required/>
                <label>User name</label>
            </div>
            <div class="field">
                <span class="fas fa-lock"></span>
                <input type="password"/>
                <label>Password</label>
            </div>
            <div class="forgot-pass"><a href="#">Forgot Password?</a></div>
            <button>Sign in</button>
            <p>Are u a Employee?<span/><a href="iemployeelogin.js">Click Here</a></p><span/>
    </div>
  
 
}
export default admin;