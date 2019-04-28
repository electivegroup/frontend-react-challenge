# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Demo link

The app can be viewed here: https://recii.herokuapp.com.

## Instructions

To get the project up and running locally you will need to do the following:

1. Clone my repo: https://github.com/bernardbaker/electivegroup-react-trello.git

2. Update the `react-trello` package source with your new repo URL. Mine is the URL in step one. Remember to keep the `${GITHUB_USER}` and `${GITHUB_TOKEN}` in the string. **They are swapped out at compile time**.

3. Replace the dummy values in preinstall.js with your user name and token (https://github.com/settings/tokens)

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
