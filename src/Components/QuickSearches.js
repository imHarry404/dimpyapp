/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../Styles/Home.css";
import { Link } from 'react-router-dom';



export class QuickSearches extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container mb-5">
          <div className="quick-searches mt-5 ms-4">Quick Searches</div>
          <div className="qs-subtitle mt-3 ms-4">
            Discover restaurants by type of meal
          </div>
          <div className="row mt-3">
            <div className="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-3 mx-auto text-center">
              <div className="row">
                <div className="col-6 px-0 mx-0">
                  <img src={require('../Assets/breakfast.jpg').default}
                    className="card-img"
                  />
                </div>
                <div className="col-6 px-3 py-3">
                  <div className="card-title"><Link to='/filter' style={{color: "blue", textDecoration:"none" }}>Breakfast</Link></div>
                  <div className="card-description">
                    Start your day with exclusive breakfast options
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-3 mx-auto text-center">
              <div className="row">
                <div className="col-6 px-0 mx-0">
                  <img
                    src={require('../Assets/lunch.jpg').default}
                    className="card-img"
                  />
                </div>
                <div className="col-6 px-3 py-3">
                  <div className="card-title"><Link style={{color: "blue", textDecoration:"none" }} to='/filter'>Lunch</Link></div>
                  <div className="card-description">
                    Start your day with exclusive breakfast options
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-3 mx-auto text-center">
              <div className="row">
                <div className="col-6 px-0 mx-0">
                  <img
                    src={require('../Assets/snacks.png').default}
                    className="card-img"
                  />
                </div>
                <div className="col-6 px-3 py-3">
                  <div className="card-title"><Link to='/filter' style={{color: "blue", textDecoration:"none" }}>Snacks</Link></div>
                  <div className="card-description">
                    Start your day with exclusive breakfast options
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-3 mx-auto text-center">
              <div className="row">
                <div className="col-6 px-0 mx-0">
                  <img
                    src={require('../Assets/dinner.png').default}
                    className="card-img"
                  />
                </div>
                <div className="col-6 px-3 py-3">
                  <div className="card-title"><Link to='/filter' style={{color: "blue", textDecoration:"none" }}>Dinner</Link></div>
                  <div className="card-description">
                    Start your day with exclusive breakfast options
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-3 mx-auto text-center">
              <div className="row">
                <div className="col-6 px-0 mx-0">
                  <img
                    src={require('../Assets/drinks.png').default}
                    className="card-img"
                  />
                </div>
                <div className="col-6 px-3 py-3">
                  <div className="card-title"><Link to='/filter' style={{color: "blue", textDecoration:"none" }}>Drinks</Link></div>
                  <div className="card-description">
                    Start your day with exclusive breakfast options
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-3 mx-auto text-center">
              <div className="row">
                <div className="col-6 px-0 mx-0">
                  <img
                    src={require('../Assets/nightlife.png').default}
                    className="card-img"
                  />
                </div>
                <div className="col-6 px-3 py-3">
                  <div className="card-title"><Link to='/filter' style={{color: "blue", textDecoration:"none" }}>Night Life</Link></div>
                  <div className="card-description">
                    Start your day with exclusive breakfast options
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(QuickSearches);
