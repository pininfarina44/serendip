import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <section className="about-upper">
          <figure className="about-img">
            <img
              src={require("../images/product-images/garcinia.jpg")}
              alt="Garcinia"
            />
          </figure>
          <div className="about-upper-headline">
            <h3>About Us</h3>
          </div>
          <article>
            <p>
              Serendip Herbals is a leading exporter of certified, premium
              quality, natural herbals to customers worldwide. Our mission is to
              provide our customers therapeutic products that enhance their
              health and quality of life.
            </p>
          </article>
          <div className="about-upper-products">
            <p>The main products are:</p>
            <ul className="products">
              <li>Moringa</li>
              <li>Garcinia</li>
              <li>Senna</li>
              <li>Cinnamon</li>
              <li>Gotu Kola</li>
            </ul>
            <p>We pride ourselves in providing our customers</p>
          </div>
        </section>
        <section className="about-lower">
          <div className="bullet-points">
            <h4>1</h4>
            <span>Natural Products</span>
          </div>
          <div className="bullet-points">
            <h4>2</h4>
            <span>Premium Quality</span>
          </div>
          <div className="bullet-points">
            <h4>3</h4>
            <span>Fast Shipping</span>
          </div>
          <div className="bullet-points">
            <h4>4</h4>
            <span>Online Support</span>
          </div>
          <div className="bullet-points">
            <h4>5</h4>
            <span>Customer Service</span>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
