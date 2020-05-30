import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./carouSel.css";  
/*import "U:/MERN Personal/doctorappointment/doctorappointment/src/components/carouSel.css";*/
class Carousel1 extends Component {
  render() {
    return (
      <div>
        <Carousel className="carousel3">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/image1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1><a href="#about"> <span id="ab">About Doctor </span></a></h1>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/image2.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/image3.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3></h3>
              <p>
                
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Carousel1;
