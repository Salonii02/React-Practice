import React, { Component } from "react";
import Flip from "./Flip.js";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Lets Flip a coin</h1>
        <Flip />
      </div>
    );
  }
}
