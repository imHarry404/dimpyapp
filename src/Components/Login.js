import React, { Component } from "react";



export default class Login extends Component {
  render() {
    return (
      <div className="loginModal">
        <span style={{ position: "absolute", right: 20, top: 10 }}
          onClick={() => {
            document.getElementById("login").classList.add("hidden");
          }}>
          <i class="fas fa-times" style={{ fontSize: 24 }}></i>
        </span>
        <h1>Login</h1>
        <form action="/login" method="post" class="login-form">
          <div class="input-box-1">
            <label for="username" class="username">
              Username
            </label>
            <i class="fas fa-user"></i>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Type your username" />
          </div>
          <div class="input-box-2">
            <label for="password" class="password">
              Password
            </label>
            <i class="fas fa-lock"></i>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Type your password"
            />
          </div>
          <div class="login-button">
            <button type="submit" class="login">
              LOGIN
            </button>
          </div>
        </form>
        <div class="login-methods">
          <p>Or Sign Up Using</p>
          <div class="social-media-auth">
            <img
              src="https://img.icons8.com/color/48/000000/facebook-circled--v5.png"
              alt="fb"
            />
            <img
              src="https://img.icons8.com/color/48/000000/twitter-circled--v1.png"
              alt="twt"
            />
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="g"
            />
          </div>
        </div>
      </div>
    );
  }
}
