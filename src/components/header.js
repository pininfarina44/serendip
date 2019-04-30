import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <div className="main-container">
        <div>Logo</div>
        <nav>
            <a href="/index.html">Products</a>
            <a href="/index.html">About Us</a>
            <a href="/index.html">Contact</a>
        </nav>
      </div>
    );
  }
}

export default Header;
