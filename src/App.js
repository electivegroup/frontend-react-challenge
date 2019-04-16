import React, { Component } from "react";
import Board from "react-trello";
import { getData } from "./data/Store";
import packageJson from "./package.config.json";

class App extends Component {
  render() {
    return (
      <>
        <kbd>Version: {packageJson.version}</kbd>
        <Board data={getData()} draggable editable />;
      </>
    );
  }
}

export default App;
