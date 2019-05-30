import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    //binding
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  //toggle menu state for smaller devices
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
            <a href="/index.html">Home</a>
            <a href="/index.html">About Us</a>
            <a href="/index.html">Products</a>
            <a href="/index.html">Contact Us</a>
          </nav>
      </div>
    );
  }
}

export default Header;
