import React, { Component } from "react";

export default class Register extends Component {
  render() {
    return (
      <div className="registerModal">
        <span
          style={{ position: "absolute", right: 20, top: 10 }}
          onClick={() => {
            document.getElementById("register").classList.add("hidden");
          }}
        >
          <i class="fas fa-times" style={{ fontSize: 24 }}></i>
        </span>
        <h1 style={{ textAlign: "center", paddingTop: 32, paddingBottom: 32 }}>
          Register
        </h1>
        <form action="/register" method="post" class="login-form">
          <div class="input-box-1">
            <label for="username" class="username">
              Name
            </label>
            <i class="fas fa-user"></i>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Type your name"
            />
          </div>
          <div class="input-box-2">
            <label for="password" class="password">
              Username
            </label>
            <i class="fas fa-user"></i>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Type your username"
            />
          </div>
          <div class="input-box-1" style={{ marginTop: 30 }}>
            <label for="username" class="username">
              Password
            </label>
            <i class="fas fa-lock"></i>
            <input
              type="password"
              name="username"
              id="username"
              placeholder="Type your password"
            />
          </div>
          <div class="input-box-2">
            <label for="password" class="password">
              Confirm Password
            </label>
            <i class="fas fa-lock"></i>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Type your password again"
            />
          </div>
          <div class="login-button">
            <button type="submit" class="login">
              REGISTER
            </button>
          </div>
        </form>
      </div>
    );
  }
}
