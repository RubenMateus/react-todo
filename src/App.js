import React, { Component } from "react";
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Content />
        </div>
      </div>
    );
  }
}

export { App };
