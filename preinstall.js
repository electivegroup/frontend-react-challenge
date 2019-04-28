// Install script which runs before installing packages.
const package = require("./package.json");
const fs = require("fs");
// Look in the package.json to match up the values and where they should be...
const {
  GITHUB_USER = "your Git Hub handler - user name",
  GITHUB_TOKEN = "your Git Hub PAT API token - fsj23424dhflkfghkjsho978fuskjhfkj68i7"
} = process.env;

package.dependencies["react-trello"] = package.dependencies["react-trello"]
  .replace("${GITHUB_USER}", GITHUB_USER)
  .replace("${GITHUB_TOKEN}", GITHUB_TOKEN);

fs.writeFileSync("package.json", JSON.stringify(package, null, 4));
