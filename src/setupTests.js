/*
Lodash is a JavaScript library that helps programmers write
more concise and easier to maintain JavaScript.
*/
import * as _ from "lodash";

/*
The jest-dom library provides a set of custom jest matchers that
you can use to extend jest. These will make your tests more
declarative, clear to read and to maintain.
*/
import "jest-dom/extend-expect";

// handle 3rd party css errors from old parser - needs upgrading
// handle 3rd party prop type error - needs upgrading
const originalConsoleError = console.error;
console.error = console.warn = function(msg) {
  if (_.startsWith(msg, "Error: Could not parse CSS stylesheet")) return;
  if (_.startsWith(msg, "Warning: Failed prop type")) return;
  originalConsoleError(msg);
};
