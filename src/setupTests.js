// setup snapshoting, etc for tests
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as _ from "lodash";

// configure adapter
configure({ adapter: new Adapter() });

// handle 3rd party css errors from old parser - needs upgrading
// handle 3rd party prop type error - needs upgrading
const originalConsoleError = console.error;
console.error = function(msg) {
  if (_.startsWith(msg, "Error: Could not parse CSS stylesheet")) return;
  if (_.startsWith(msg, "Warning: Failed prop type:")) return;
  originalConsoleError(msg);
};
