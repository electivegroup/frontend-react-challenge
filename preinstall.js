// Install script which runs before installing packages.
const package = require("./package.json");
const fs = require("fs");
const {
  GITHUB_USER = "bernardbaker",
  GITHUB_TOKEN = "e971805d7fd85a7765402554963c4bb05e8456d1"
} = process.env;

package.dependencies["react-trello"] = package.dependencies["react-trello"]
  .replace("${GITHUB_USER}", GITHUB_USER)
  .replace("${GITHUB_TOKEN}", GITHUB_TOKEN);

fs.writeFileSync("package.json", JSON.stringify(package, null, 4));
