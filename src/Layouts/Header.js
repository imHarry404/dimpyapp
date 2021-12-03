import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import '../Styles/Home.css'

class Header extends Component {
  render() {
    return (
      <div className={this.props.class}>
        <div className="row text-end py-4 login-signup-row">
          <div className="col-2 col-sm-2 col-md-7" />
          <div className="col-2 col-sm-2 col-md-2 text-end">
            <a style={{color: "white", textDecoration:"none"}} id="login" href="/login">
              Login
            </a>
          </div>
          <div className="col-8 col-sm-8 col-md-3 text-start">
            <a style={{color: "white", textDecoration:"none"}} id="register" href="/register">
              Create an account
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
