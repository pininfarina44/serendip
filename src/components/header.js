import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <div className="header">
        <div className="logo"></div>
        <div className="menu-button"></div>
        <nav className="nav">
          <a href="/index.html">About Us</a>
          <a href="/index.html">Products</a>
          <a className="last" href="/index.html">Contact Us</a>
        </nav>
      </div>
    );
  }
}

export default Header;
