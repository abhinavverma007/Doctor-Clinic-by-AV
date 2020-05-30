import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {Button} from 'react-bootstrap';
import './tableRow.css'
import "bootstrap/dist/css/bootstrap.min.css";
class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state={
        phonenumber: null
    };
    this.delete = this.delete.bind(this);
    this.onEdit=this.onEdit.bind(this);
  }
  onEdit(e){
      const phonenumber=prompt("Enter Mobile Number");
    if(phonenumber===this.props.obj.phone){
        axios.get("http://localhost:4000/booking/edit/" + this.props.obj._id)
        .then(console.log("Edited"))
        .catch((err)=> console.log(err));

    }
    else{
        alert("Wrong Mobile Number. Try Again");
        {/*I am loving StackOverFlow*/}
        e.preventDefault();
        
    }

  }
  delete() {
      
      
      
    const phonenumber = prompt("Enter Mobile Number");
    console.log(phonenumber);
       
    if(phonenumber===this.props.obj.phone)
    {
    axios
      .get("http://localhost:4000/booking/delete/" + this.props.obj._id)
      .then(console.log("Deleted"))
      .catch((err) => console.log(err));

    window.location.reload();
    }
    else{
        alert("Wrong Mobile Number");
    }
  }

  render() {
    return (
      <tr className="jumbotron">
         
        <td>{this.props.obj.full_name}</td>
        <td> {this.props.obj.morphedphone}</td>
        <td>{this.props.obj.dateagain}</td>
        <td>{this.props.obj.time}</td>
        <td>
        <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary"
           onClick={e=> this.onEdit(e)}
           >
            Edit
          </Link>
            
        </td>
        <td>
            
          <button onClick={this.delete} className="btn btn-danger">
            Delete
          </button>
        </td>
        
      </tr>
    );
  }
}

export default TableRow;
