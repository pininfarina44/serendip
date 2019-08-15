import React from "react";
import {Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  };
  render() {
    return (
      <div className="header">
        <div className="logo" />
        <div onClick={this.toggleMenu} className="menu-button" />
          <nav className={this.state.isToggleOn ? "nav off" : "nav on"}>
            <Link exact to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact Us</Link>
          </nav>
      </div>
    );
  }
}

export default Header;
