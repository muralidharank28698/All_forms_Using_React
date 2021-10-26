import React, { Component } from "react";
import logo from "./logo.svg";
// import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import LoginForm from "./components/LoginForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginForm></LoginForm>
      </div>
    );
  }
}

export default App;
