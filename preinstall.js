const package = require("./package.json");
const fs = require("fs");
require("dotenv").config();

const { GITHUB_USER, GITHUB_TOKEN } = process.env;
//"react-trello": "https://bernardbaker:ff5e35176173e66849728e7e834dc031dbf18bb3@github.com/bernardbaker/electivegroup-react-trello.git#dev/02-enhance-project",
package.dependencies["react-trello"] = package.dependencies["react-trello"]
  .replace("${GITHUB_USER}", GITHUB_USER)
  .replace("${GITHUB_TOKEN}", GITHUB_TOKEN);

fs.writeFileSync("package.json", JSON.stringify(package, null, 4));
