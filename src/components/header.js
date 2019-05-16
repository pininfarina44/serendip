import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };
  render() {
    return (
      <div className="header">
        <div className="logo" />
        <div onClick={this.toggleMenu} className="menu-button" />
        {this.state.isToggleOn &&
          <nav className="nav">
            <a href="/index.html">About Us</a>
            <a href="/index.html">Products</a>
            <a className="last" href="/index.html">
              Contact Us
            </a>
          </nav>
        }
      </div>
    );
  }
}

export default Header;
