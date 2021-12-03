/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../Styles/Details.css";
import "../Styles/Filter.css";
import { Link } from 'react-router-dom';

class Details extends Component {
  render() {
    return (
      <div className="mb-5">
        <div className="filter-header">
          <div className="filter-logo-div mx-5">
            <span className="filter-logo"><Link to='/' style={{color: "red", textDecoration:"none"}}>e!</Link></span>
          </div>
        </div>
        <div className="px-5">
          <img src={require("../Assets/breakfast.jpg").default} height="352px" />
          <button class="gallery-button py-2"><Link to='/filter' style={{color: "white", textDecoration:"none"}}>Click to see food menu</Link></button>
        </div>

        <div className="px-5 pt-5">
          <div class="h1 mt-3">
            The Big Chill Cakery
            <button className="btn btn-danger btn"><a href="https://rzp.io/l/3VJmjzgN" style={{textDecoration:"none", color:"white"}} target="_blank" rel="noopener noreferrer" >Place Online Order</a></button>
          </div>
          <div class="tabs">
            <Tabs>
              <TabList className="TabList">
                <Tab>Overview</Tab>
                <Tab>Contact</Tab>
              </TabList>
              <hr className="tabline" />
              <TabPanel className="Details">
                <h2 class="about">About the place</h2>
                <h4 class="head">Cuisine</h4>
                <h6 class="value">Fast Food</h6>
                <h4 class="head">Average Cost</h4>
                <h6 class="value">&#8377; 700</h6>
              </TabPanel>
              <TabPanel>
                <h4 class="head">Phone Number</h4>
                <h6 class="value">+91-9876543217</h6>
                <h4 class="head">The Big Chill Cakery</h4>
                <h6 class="value">Shalimar Bagh, Delhi</h6>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
