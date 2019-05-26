import React from "react";
import Breakpoint, { BreakpointProvider } from "react-socks";
import { setDefaultBreakpoints } from 'react-socks';

setDefaultBreakpoints([
  { xs: 0 },
  { small: 376 },
  { m: 426 },
  { l: 769 },
  { xl: 1025 }
]);

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
            <a href="/index.html">About Us</a>
            <a href="/index.html">Products</a>
            <a className="last" href="/index.html">Contact Us</a>
          </nav>
          <Breakpoint small up>
        </Breakpoint>

        <Breakpoint medium only />

        <Breakpoint medium down />

        <Breakpoint medium up />

        <Breakpoint large up />
      </div>
    );
  }
}

export default Header;
