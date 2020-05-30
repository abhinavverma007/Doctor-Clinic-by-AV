import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import addDetails from "./components/addDetails";
import NavBar from "./components/NavBar";

import showDetails from "./components/showDetails";
import editDetails from "./components/editDetails";
import frontPage from "./components/frontPage";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <br />
        <Switch>
          <Route path="/frontPage" component={frontPage} />
          <Route path="/addDetails" component={addDetails} />
          <Route path="/showDetails" component={showDetails} />
          <Route path="/edit/:id" component={editDetails} />
        </Switch>

        <footer class="page-footer font-small cyan darken-3">
          <div class="container-fluid">
            <div class="row">

            </div>
          </div>

          <div class="footer-copyright text-center py-3">
            © 2020 Copyright:
             Abhinav Verma
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
