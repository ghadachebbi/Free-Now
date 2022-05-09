import React, { Component } from "react";
import { Logo, Text, Colors } from "@freenow/wave";
import * as Icons from "@freenow/wave";

import { Link } from "react-router-dom";
export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav data-testid="navbar" className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link data-testid="logo-link" to="/" className="nav-logo">
              <Logo variant="default" />
            </Link>
            <button
              data-testid="button"
              onClick={this.handleToggle}
              type="button"
              className="nav-btn"
            >
              <Icons.MenuIcon size="large" color={Colors.FREEDOM_RED_900} />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link data-testid="home-link" to="/">
                <Text m={3} fontSize={2}>
                  Home
                </Text>
              </Link>
            </li>
            <li>
              <Link data-testid="freeNow-link" to="/freeNowVehicles">
                <Text m={3} fontSize={2}>
                  Free Now
                </Text>
              </Link>
            </li>
            <li>
              <Link data-testid="shareNow-link" to="/shareNowVehicles">
                <Text m={3} fontSize={2}>
                  Share Now
                </Text>
              </Link>
            </li>
            <li>
              <Link data-testid="map-link" to="/map">
                <Text m={3} fontSize={2}>
                  Map
                </Text>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
