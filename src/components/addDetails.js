import React, { Component, useState } from "react";
import "./addDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Link } from "react-router-dom";
class addDetails extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validName = this.validName.bind(this);
    this.validPhone = this.validPhone.bind(this);
    this.state = {
      full_name: "",
      phone: "",
      date: null,
      dateagain: "",
      time: null,
      fullnamerr: "",
      pherr: "",
      disabledstatus: true,
      val4: null,
      morphedphone: null,
      hour: 0,
      minutes: 0,
    };
  }
  validName() {
    if (this.state.full_name.length === 0) {
      this.setState({
        fullnamerr: "Invalid Name",
      });
    } else {
      return true;
    }
  }
  onChangePersonName(event) {
    this.setState({
      full_name: event.target.value,
    });
  }
  validPhone() {
    let l = this.state.phone.length;
    let str = this.state.phone;
    let is = 0;
    for (let i = 0; i < l; i++) {
      if (!(str[i] >= "0" && str[i] <= "9")) {
        is = 1;
      }
    }
    if (this.state.phone.length !== 10 || is === 1) {
      this.setState({
        pherr: "Invalid Phone Number",
      });
    } else {
      return true;
    }
  }
  onChangePhone(event) {
    let mb = event.target.value;
    let size = mb.length;
    let mpp = mb[0];

    for (var i = 1; i <= size - 2; i++) {
      mpp = mpp + "X";
    }
    mpp = mpp + mb[size - 1];
    this.setState({
      phone: event.target.value,
      morphedphone: mpp,
    });
  }
  onChangeDate(date) {
    const val1 = date.getDate();
    const val2 = date.getMonth() + 1;
    const val3 = date.getFullYear();
    const val4 = val1 + "/" + val2 + "/" + val3;
    this.setState({
      date: date,
      /*Crucial Step*/

      dateagain: val4,
    });
  }
  onChangeTime(event) {
    let timea = event.target.value;
    let sz = timea.length;
    let houra = null;
    let inthour = 0;
    let inmin = 0;
    if (timea[sz - 1] === "M" && timea[sz - 2] === "P") {
      houra = timea.substring(0, 2);

      inthour = parseInt(houra);
      if (inthour <= 12) {
        inthour = inthour + 12;
      }
      inmin = parseInt(timea.substring(3, 5));
    } else {
      houra = timea.substring(0, 2);

      inthour = parseInt(houra);

      inmin = parseInt(timea.substring(3, 5));
    }
    this.setState({
      time: event.target.value,
      minutes: inmin,
      hour: inthour,
    });
  }

  handleSubmit(event) {
    console.log("HELLO");
    console.log(this.state.full_name);
    console.log(this.state.phone);
    console.log(this.state.dateagain);
    console.log(this.state.time);

    console.log(this.state.dateagain);
    let a = this.validName();
    let b = this.validPhone();
    console.log(a);
    console.log(b);
    event.preventDefault();

    const obj = {
      full_name: this.state.full_name,
      phone: this.state.phone,
      dateagain: this.state.dateagain,
      time: this.state.time,
      morphedphone: this.state.morphedphone,
      date: this.state.date,
      hour: this.state.hour,
      minutes: this.state.minutes,
    };

    if (a === true && b === true) {
      alert("Booking Done Successfully");
      axios
        .post("http://localhost:4000/booking/add", obj)
        .then((res) => console.log(res.data));

      window.location.reload();
    }
    this.setState({
      pherr: null,
      fullnamerr: null,
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }} id="div3">
        <div className="col-md-6 col-lg-8" id="div1">
          <form onSubmit={this.handleSubmit} className="makeitcenter">
            <h3> Enter your details</h3>
            <div className="form-group">
              <label>Patient Full Name: </label>
              <input
                type="text"
                className="form-control"
                required="required"
                /*<!-- I love stack overflow-->*/
                /*changing value to defaultValue solved it*/
                defaultValue={this.state.full_name}
                onChange={this.onChangePersonName}
                placeholder={this.state.full_name}
              />

              <label>{this.state.fullnamerr}</label>

              <br />
            </div>
            <div className="form-group">
              <label>Phone Number: </label>
              <input
                type="text"
                className="form-control"
                required="required"
                defaultValue={this.state.phone}
                onChange={this.onChangePhone}
                placeholder={this.state.phone}
              />

              <label>{this.state.pherr}</label>
              <br />
            </div>
            <div className="form-group">
              <label>Date: </label>
              <DatePicker
                selected={this.state.date}
                required="required"
                onChange={this.onChangeDate}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
              />
            </div>
            <div className="form-group">
              <label>Time: </label>
              <select
                value={this.state.time}
                onChange={this.onChangeTime}
                required="required"
              >
                <option value="null"></option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="10:30 AM">10:30 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="11:30 AM">11:30 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="12:30 PM">12:30 PM</option>
                <option value="01:00 PM">1:00 PM</option>
                <option value="01:30 PM">1:30 PM</option>
                <option value="02:00 PM">2:00 PM</option>
                <option value="02:30 PM">2:30 PM</option>
                <option value="03:00 PM">3:00 PM</option>
                <option value="03:30 PM">3:30 PM</option>
                <option value="04:00 PM">4:00 PM</option>
                <option value="04:30 PM">4:30 PM</option>
                <option value="05:00 PM">5:00 PM</option>
                <option value="05:30 PM">5:30 PM</option>
                <option value="06:00 PM">6:00 PM</option>
                <option value="06:30 PM">6:30 PM</option>
                <option value="07:00 PM">7:00 PM</option>
                <option value="07:30 PM">7:30 PM</option>
                <option value="08:00 PM">8:00 PM</option>
                <option value="08:30 PM">8:30 PM</option>
                <option value="09:00 PM">9:00 PM</option>
              </select>
            </div>
            <div className="form-group">
              <div className="submitbutton">
                <input
                  type="submit"
                  value="Submit my details"
                  className="btn btn-primary"
                />
                <br />
                <br />
                <Link to="/showDetails">
                  {" "}
                  <Button> View Current Patients</Button>
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-4 col-md-5" id="div2">
          <p>
            {" "}
            In this tele connected, highly mobile world at times personal
            scheduling of appointments can be challenging. And yet that
            shouldn't deprive you of the best medical care. Tele Clinic is an
            initiative by Apollo Clinic to bring world-class health care service
            to the location & time that suits you best. You could be travelling
            or tied up with your schedule - wherever and whenever - simply
            log-in and have access to world-class medical care. With
            state-of-the-art technology & infrastructure we make these tele
            interactions as real as possible for you. Thus, you have for
            yourself the best of both worlds. Tele Clinics help you overcome the
            challenges of distance & time. Additionally, they provide comfort &
            convenience - everything at the click of a button.
          </p>
        </div>
      </div>
    );
  }
}

export default addDetails;
