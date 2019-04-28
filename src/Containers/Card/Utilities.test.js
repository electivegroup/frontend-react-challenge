import { formatDate } from "./Utilities";

describe("Custom Card data Utilities", () => {
  // Arrange
  let validDate = "";
  let singleDayValueInValidDate = "";
  let invalidDateString = "";
  let plausableDateValue = "";
  beforeEach(() => {
    validDate = "Fri Apr 19 2019 15:50:40 GMT+0100";
    singleDayValueInValidDate = "Fri Apr 5 2019 15:50:40 GMT+0100";
    invalidDateString = "slkdhf";
    plausableDateValue = "2019/1/31";
  });

  it("should return a formatted date string", () => {
    const result = formatDate(validDate);
    const expectedResult = "19/04/2019";
    expect(result).toBe(expectedResult);
  });

  it("should return a formatted date string when the days numeric value is less than 10", () => {
    const result = formatDate(singleDayValueInValidDate);
    const expectedResult = "05/04/2019";
    expect(result).toBe(expectedResult);
  });

  it("should return an message when an invalid date string is passed", () => {
    const result = formatDate(invalidDateString);
    expect(result).toBeNull();
  });

  it("should return a valid date when a plasuable date string is passed", () => {
    const result = formatDate(plausableDateValue);
    const expectedResult = "31/01/2019";
    expect(result).toBe(expectedResult);
  });
});
