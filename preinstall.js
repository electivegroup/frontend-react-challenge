const package = require("./package.json");
const fs = require("fs");
const {
  GITHUB_USER = "bernardbaker",
  GITHUB_TOKEN = "ff5e35176173e66849728e7e834dc031dbf18bb3"
} = process.env;

package.dependencies["react-trello"] = package.dependencies["react-trello"]
  .replace("${GITHUB_USER}", GITHUB_USER)
  .replace("${GITHUB_TOKEN}", GITHUB_TOKEN);

fs.writeFileSync("package.json", JSON.stringify(package, null, 4));
