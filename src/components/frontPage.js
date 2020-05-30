import React, { Component } from "react";
import Carousel1 from "./Carousel1";
import "bootstrap/dist/css/bootstrap.min.css";
import "./frontPage.css";
import { Link } from "react-router-dom";
import Carousel2 from "./Carousel2";
export class frontPage extends Component {
  render() {
    return (
      <div>
        <Carousel1 />
        <h1> Welcome</h1>
        <div className="container-fluid" id="f6">
          <div className="col-xs-4 col-md-3" id="f1">
            <h1> 1800-1800-1800</h1>
            <br />
            <h4> EMERGENCY SERVICE </h4>
            <p>
              {" "}
              Call on the toll free number to connect to doctor's emergency ward
            </p>
          </div>
          <div className="col-xs-4 col-md-3" id="f2">
            <h4>
              <Link to={"/addDetails"} className="btn btn-primary" id="f4">
                Book Appointment
              </Link>
            </h4>
          </div>
          <div className="col-xs-4 col-md-3" id="f3">
            <div id="f5">
              <h2> Opening Hours</h2>
              <h5> Monday-Sunday</h5>
              <p> 10:00 AM- 9 PM </p>
            </div>
          </div>
        </div>
        <br />
        
          <div class="col-md-6" id="about">
            <h2>About Me</h2>
            <div class="card bg-dark text-white">
              <div class="card-header">
                <img src="images/suyogdoctor.jpg" />
                <h3>Dr. Suyog</h3>
              </div>
              <br />
              <div class="card-body">
                General Physician
                <br />
                MBBS,MD (AIIMS)
                <br />
                25 Years Experience <br />
                <p>&#8377; 500 Consultation Fee</p>
                <br />
              </div>
              <div class="card-footer">
                <Link to={"/addDetails"} className="btn btn-primary">
                  {" "}
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-6" id="contact">
            <h1> See What my Patient's Say</h1>
            <div class="card bg-dark text-white">
              <div class="card-body">
                <div class="container">
                    <Carousel2/>
                </div>
              </div>
            </div>
          </div>
        <br/>
        

        
      </div>
    );
  }
}

export default frontPage;
