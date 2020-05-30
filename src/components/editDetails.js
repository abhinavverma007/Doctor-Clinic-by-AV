import React, { Component, useState } from "react";
import "./addDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Link } from "react-router-dom";
export class editDetails extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.validName = this.validName.bind(this);
    this.validPhone = this.validPhone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    };
  }


  componentDidMount() {
    axios.get('http://localhost:4000/booking/edit/'+this.props.match.params.id)
        .then(response => {
            this.setState({ 
              full_name: response.data.full_name,
              phone: response.data.phone,
              time: response.data.time,
              dateagain: response.data.dateagain
            
            });
        })
        .catch(function (error) {
            console.log(error);
        })
  }

  onChangePersonName(event) {
    this.setState({
      full_name: event.target.value,
    });
  }
  onChangePhone(event) {
    this.setState({
      phone: event.target.value,
    });
  }
  onChangeDate(date) {
    const val1=date.getDate();
    const val2=(date.getMonth())+1;
    const val3=date.getFullYear();
    const val4=val1+'/'+val2+'/'+val3;
    this.setState({
      date: date,
      /*Crucial Step*/
      
      dateagain: val4,
    });
  }

  onChangeTime(event) {
    this.setState({
      time: event.target.value,
    });
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
  handleSubmit(event){
      event.preventDefault();
    const obj = {
        full_name: this.state.full_name,
        phone: this.state.phone,
        dateagain: this.state.dateagain,
        time: this.state.time,
      };
      axios.post('http://localhost:4000/booking/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));

        this.props.history.push('/showDetails');
        window.location.reload();

  }
  render() {
    return (
      <div>
        
        <form onSubmit={this.handleSubmit} className="makeitcenter">
        <h3> Update Your Details</h3>
          <div className="form-group">
            <label>Patient Full Name: </label>
            <input
              type="text"
              className="form-control"
              /*<!-- I love stack overflow-->*/
              /*changing value to defaultValue solved it*/
              defaultValue={this.state.full_name}
              onChange={this.onChangePersonName}
              placeholder={this.state.full_name}
              required="required"
              
            />

            <label>{this.state.fullnamerr}</label>

            <br />
          </div>

         { /* <div className="form-group">
            <label>Phone Number: </label>
            <input
              type="text"
              className="form-control"
              defaultValue={this.state.phone}
              onChange={this.onChangePhone}
              placeholder={this.state.phone}
              required="required"
            />

            <label>{this.state.pherr}</label>
            <br />
          </div>*/}

          <div className="form-group">
            <label>Date: </label>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              required="required"
            />
          </div>

          <div className="form-group">
            <label>Time: </label>
            <select value={this.state.time} onChange={this.onChangeTime}
            required="required">
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
                value="Update my details"
                className="btn btn-primary"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default editDetails;
