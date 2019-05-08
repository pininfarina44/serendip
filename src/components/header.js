import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <div className="header-container">
        <div className="logo"></div>
        <nav className="nav">
            <a href="index.html">Home</a>
            <a href="/index.html">Products</a>
            <a href="/index.html">About Us</a>
            <a className="last" href="/index.html">Contact</a>
        </nav>
      </div>
    );
  }
}

export default Header;
