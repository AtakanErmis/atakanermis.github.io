import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.sass";
import Header from "./components/Header";
import Main from "./components/Main";

class App extends Component {
  componentDidMount() {
    document.querySelector("#preload").remove();
  }
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
