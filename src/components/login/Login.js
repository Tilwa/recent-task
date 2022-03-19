import React from "react";
import "./Login.css";
import Registration from "../registration/Registration";

const Login = () => {
  return (
    <div className="main">
      <div className="card">
        <div className="left"></div>
        <div className="right">
          <div className="login">
            <h1>
              Login
              <hr className="line" />
            </h1>
          </div>
          <div className="inputs">
            <div className="input">
              <input
                className="input-styl"
                type="email"
                placeholder="Email Address"
              />
              <input
                className="input-styl"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="login-btn">
              <button className="btn">Login</button>
              <p className="para">Forget Password?</p>
            </div>
          </div>
          <div className="last-div">
            <div className="apple-gmail">
              <button className="last-btn1">
                <i id="apple" class="devicon-apple-original"></i>Sign in with
                Apple
              </button>

              <button className="last-btn2">
                <i id="google" class="devicon-google-plain colored"></i>Sign in
                with Gmail
              </button>
            </div>
            <p className="last-para">
              Don't have an account? <a href="#">Create Account</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
