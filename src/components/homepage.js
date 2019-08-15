import React from "react";
import {Link} from "react-router-dom";

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
            </article>
            <Link to="/products">Browse Products</Link>

      </div>
    );
  }
}

export default Homepage;
