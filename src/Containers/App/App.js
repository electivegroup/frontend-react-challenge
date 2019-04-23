import React, { Component, lazy, Suspense } from "react";
import { getData } from "../../data/Store";
import packageJson from "../../package.config.json";

import CustomCard from "../Card/CustomCard";

const Board = lazy(() => import("react-trello"));

class App extends Component {
  render() {
    return (
      <>
        <kbd>Version: {packageJson.version}</kbd>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Board data={getData()} draggable editable customCardLayout>
            <CustomCard
              titleDoubleClick={e => {
                console.log("double click", e);
              }}
              descriptionDoubleClicked={e => {
                console.log("double click", e);
              }}
              deleteTag={(cardId, tagId) => {}}
            />
          </Board>
        </Suspense>
      </>
    );
  }
}

export default App;
