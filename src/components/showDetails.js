import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";
import "bootstrap/dist/css/bootstrap.min.css";
import "./showDetails.css";
export class showDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Doctor: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/booking/")
      .then((response) => {
        this.setState({ Doctor: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  tabRow() {
    var alldata = this.state.Doctor;
    {
      /*I love stack overflow*/
    }
    alldata.sort((a, b) => {
      const val = Date.parse(a.date) - Date.parse(b.date);

      if (val !== 0) {
        return Date.parse(a.date) - Date.parse(b.date);
      } else {
        if (a.hour !== b.hour) {
          return a.hour - b.hour;
        } else {
          return a.minutes - b.minutes;
        }
      }
    });
    console.log(alldata);
    return alldata.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h3 align="center"> Patients List </h3>
          <table className="table table-striped " style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th> Name </th>
                <th> Phone </th>
                <th> Date</th>
                <th> Time</th>
                <th colSpan="2"> Action</th>
              </tr>
            </thead>
            <tbody>{this.tabRow()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default showDetails;
