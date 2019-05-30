import React from "react";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";

class CCarousel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true,
      indicators: false
    };
  }

  render() {
    return (
      <div className="carousel-container container-fluid">
        <Row>
          <Col span={12} style={{ paddingTop: "10px" }}>
            <RBCarousel
              version={4}
              indicators={false}
              className="carousel-fade"
            >
              <div>
                <img
                  className="carousel-img"
                  src={require("./carousel-images/moringa.jpg")}
                  alt="moringa"
                />
                <div className="carousel-caption text-dark font-weight-bold">
                  Moringa
                </div>
              </div>
              <div>
                <img
                  className="carousel-img"
                  src={require("./carousel-images/garcinia.jpg")}
                  alt="garcinia"
                />
                <div className="carousel-caption text-dark font-weight-bold">
                  Garcinia
                </div>
              </div>
              <div>
                <img
                  className="carousel-img"
                  src={require("./carousel-images/gotu_kola.jpg")}
                  alt="gotu kola"
                />
                <div className="carousel-caption text-dark font-weight-bold">
                  Gotu Kola
                </div>
              </div>
              <div>
                <img
                  className="carousel-img"
                  src={require("./carousel-images/cinnamon.jpg")}
                  alt="cinnamon"
                />
                <div className="carousel-caption text-dark font-weight-bold">
                  Cinnamon
                </div>
              </div>
              <div>
                <img
                  className="carousel-img"
                  src={require("./carousel-images/senna.jpg")}
                  alt="senna"
                />
                <div className="carousel-caption text-dark font-weight-bold">
                  Senna
                </div>
              </div>
            </RBCarousel>
          </Col>
        </Row>
      </div>
    );
  }
}

/**
 *  Boostrap Component
 */
const Row = props => <div className="row">{props.children}</div>;
const Col = props => (
  <div className={`col-${props.span}`} style={props.style}>
    {props.children}
  </div>
);

export default CCarousel;
