import React from "react";
import "./signuppage.css";

function Signupform() {
  return (
    <div>
      <div className="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account!</p>
      </div>

      <div class="signup-form">
        <form action="" method="">
          <hr />
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              name="username"
              placeholder="Username"
              required="required"
            />
          </div>

          <div class="form-group">
            <input
              type="email"
              class="form-control"
              name="email"
              placeholder="Email Address"
              required="required"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              name="password"
              placeholder="Password"
              required="required"
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              class="form-control"
              name="confirm_password"
              placeholder="Confirm Password"
              required="required"
            />
          </div>
          <div class="form-group">
            <label class="form-check-label">
              <input type="checkbox" required="required" /> I accept the{" "}
              <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
            </label>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">
              Sign Up
            </button>
          </div>
        </form>
        <div class="text-center">
          Already have an account? <a href="#">Login here</a>
        </div>
      </div>
    </div>
  );
}
export default Signupform;
