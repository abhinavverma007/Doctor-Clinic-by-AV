import React, { Component } from "react";
import {Carousel} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export class Carousel2 extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" alt="First slide"
            src="images/white.jpg" />
            
            <Carousel.Caption>
            <div class="card bg-dark">
                <div class="card-header" id="cardhagain">
                    <p> Mr. Birla Femiwala</p>
                </div>
                  <div class="card-body" id="cardagain">
                      <p>My experience at the Indirapuram Clinic was very good. 
                          I particularly liked the good management and their fast services. 
                          From getting appointment, cleanliness, time of billing, getting results to the waiting time,
                           everything was very efficient. 
                           I will surely make this clinic my regular source of care.
                           </p>
                  </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" alt="Second slide"
            src="images/white.jpg" />

            <Carousel.Caption>
            <div class="card bg-dark">
                <div class="card-header" id="cardhagain">
                    <p> Ms. Nandita Ugravadi</p>
                </div>
                  <div class="card-body" id="cardagain">
                      <p>
                      I visited the Chanda Nagar clinic for my treatment. 
                      The staff was very supportive and provided with all the necessary information. 
                      I liked the technical expertise provided by the nurses, 
                      phlebotomist and radiology technicians. 
                      The services were fast and reports were ready on time.  </p>
                  </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" alt="Third slide"
            src="images/white.jpg" />

            <Carousel.Caption>
            <div class="card bg-dark">
                <div class="card-header" id="cardhagain">
                    <p> Mrs. Sanjana Oberoi</p>
                </div>
                  <div class="card-body" id="cardagain">
                      <p>
                      In my experience, here at the Velachery clinic, 
                      I found the treatment given to patients to be excellent. 
                      All reports were ready at the committed time, 
                      and everything was so efficient and adequately taken care of,
                       that I am considering making the Velachery clinic my regular source of care.
                           </p>
                  </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Carousel2;
