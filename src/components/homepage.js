import React from "react";

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
          <h1>Natural Herbs</h1>
          <article>
            <p>
              Explore our quality natural selection of herbals
              exported from Sri Lanka
            </p>
            <a href="#products">Browse Products</a>
          </article>
      </div>
    );
  }
}

export default Homepage;
