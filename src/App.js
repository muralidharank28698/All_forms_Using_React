import React, { Component } from "react";
import logo from "./logo.svg";
// import "./App.css";
import "font-awesome/css/font-awesome.min.css";
// import LoginForm from "./components/LoginForm";
import Signupform from "./components/Signupform";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <LoginForm /> */}
        <Signupform />
      </div>
    );
  }
}

export default App;
