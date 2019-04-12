import React, { Component } from "react";
import Board from "react-trello";
import { getData } from "./data/Store";

class App extends Component {
  render() {
    return <Board data={getData()} draggable editable />;
  }
}

export default App;
