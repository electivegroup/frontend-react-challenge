# Frontend Challenge

## Instructions

Below you’ll find a User story to be completed. Please fork the repository. Once you have completed your build, create a pull request and we will review your code.

Assumptions:
There is no need to implement any backed dependencies (databases, storage, etc).
Feel free to use existing libraries when possible
Include any instructions (if required) in the INSTRUCTIONS.md
This is a technical and behavioural test.

## Create a basic single page app that mimics the behaviour of the Kanban boards.

**As a** User
**I want** to be able to create and move cards on a Kanban style board
**So that** I can manage my task list

Acceptance Criteria:

- There should be 3 columns: “To Do”, “In Progress” and “Done”
- Each column should display:
  - total current number of tasks in the column
  - number of incompleted tasks in the column
  - number of completed tasks
- These numbers should update automatically as I move cards between columns
- Each card should have
  - Status - "Completed" or "Incompleted"
  - Name
  - Description
  - Due Date - Selectable from a date picker
  - Labels
- I should be able to move the cards between columns in both directions.
- I can create, update and delete cards.
- I can use my desktop or mobile.

Definition of Done:

- Application developed
- Code commented
- Tests written (Unit, Saga, Rendering)
- Code Merged and Deployed to a staging area for review by non-developers

Languages and Frameworks

Below is a list of our currently used languages and frameworks. You are free to use these or others of your choice. Where you have used specific languages and frameworks different from those listed, please indicate why you made these choices and what limitations there may be. A short summary will suffice

- HTML CSS
- ReactJS
- Javascript
- Redux
- Typescript
- NodeJS

Notes:

- Feel free to express your ability to fulfil the task with your own approach and interpretation.
- The use of 3rd party plugins is permitted and expected as part of more efficient delivery
- Use of open source is a preference
- You must clearly demonstrate your ability to extend, modify, or integrate any 3rd party plugins with your own code
- Where deviations from the original brief have occurred (intentional or otherwise), please provide comments as to your decisions
- Feel free to suggest modifications, extensions or future plans that support your implementation
- There is no required time that we expect you to work on this but please bear in mind that we will be using this to support your application to Elective
- Don't be afraid to ask for more guidance if you are unsure on the task at hand

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Node >= 10.15.1

Git >= 2.17.2

Yarn >= 1.15.2

Semver versioning https://semver.org/.

## Installing

Clone the repository to your local machine. Change to the projects working directory and run `yarn`.

### Running the solution

On the command line (terminal) at the projects top level folder run `yarn start`.

### Running the tests

`yarn test` to run tests.

### Build the project

`yarn build` to run tests.

### Serve the project

`yarn global add serve` to install the server.
`serve -s build` to launch the solution.

## Author

- **Bernard Baker** - _Development_ - [Me on here](https://github.com/bernardbaker)

## Acknowledgments

- Nice people at RECii who took the time to put this together. Thanks! Look forward to working with you.
