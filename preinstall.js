const package = require("./package.json");
const fs = require("fs");
const {
  GITHUB_USER = "bernardbaker",
  GITHUB_TOKEN = "aad7de249922937c14eeca533707931e6921e30c"
} = process.env;

package.dependencies["react-trello"] = package.dependencies["react-trello"]
  .replace("${GITHUB_USER}", GITHUB_USER)
  .replace("${GITHUB_TOKEN}", GITHUB_TOKEN);

fs.writeFileSync("package.json", JSON.stringify(package, null, 4));
