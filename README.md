# frontend-test

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

* There should be 3 columns: “To Do”, “In Progress” and “Done”
* Each column should display:
  * total current number of tasks in the column
  * number of incompleted tasks in the column
  * number of completed tasks
* These nubers should update automatically as I move cards between columns
* Each card should have
  * Status - "Completed" or "Incompleted"
  * Name
  * Description
  * Due Date - Selectable from a date picker
  * Labels
* I should be able to move the cards between columns in both directions.
* I can create, update and delete cards.
* I can use my desktop or mobile.

Definition of Done:

* Application developed
* Code commented
* Tests written (Unit, Saga, Rendering)
* Code Merged and Deployed to a staging area for review by non-developers
