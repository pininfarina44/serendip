import React from "react";
import CCarousel from "./carousel/ccarousel.js";

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <CCarousel />
      </div>
    );
  }
}

export default Homepage;
