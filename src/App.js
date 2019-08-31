import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import CollegeRegistration from "./CollegeRegistration";
import CollegeDetails from "./CollegeDetails";
import AdminDashboard from "./AdminDashboard";

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/college/:collegeName" component={CollegeDetails} />
          <Route path="/college" component={CollegeRegistration} />
        </Switch>
      </div>
    );
    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;
