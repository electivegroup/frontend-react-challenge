[Redux](https://redux.js.org/) is a library that helps managing the application state.

This directory contains redux [actions, reducers and stores](https://redux.js.org/basics).

Listed below is an example of how to organize those concepts by theme:

```bash
App/
    Actions.js # Contains the redux actions for board management
    InitialState.js # Contains the initial values for the state related to the board
    Reducers.js # Contains the redux reducers for board management
Board/
    Actions.js # Contains the redux actions for board management
    InitialState.js # Contains the initial values for the state related to the board
    Reducers.js # Contains the redux reducers for board management
Card/
    Actions.js # Contains the redux actions for board management
    InitialState.js # Contains the initial values for the state related to the board
    Reducers.js # Contains the redux reducers for board management
...
```
