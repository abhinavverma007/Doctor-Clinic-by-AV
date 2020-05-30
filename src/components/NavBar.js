import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./NavBar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar className={styles.suyog} expand="lg" fixed-top>
          <Navbar.Brand href="/frontPage" className={styles.suyog1}>
            <h1>Dr Suyog's Clinic</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/*I love stack overflow changing mr-auto to ml-auto */}
            <Nav className="ml-auto">
              <Nav.Link href="/addDetails">
                <span className={styles.a1}>Book Appointment </span>
              </Nav.Link>
              <Nav.Link href="/showDetails">
                <span className={styles.a1}>See Current Patients</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
