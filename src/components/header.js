import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <div className="logo"></div>
        <div>
          <nav className="nav">
            <a href="index.html">Home</a>
            <a href="/index.html">About Us</a>
            <a href="/index.html">Products</a>
            <a className="last" href="/index.html">Contact Us</a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
