const stringCal = require("../utils/stringCalculator");

// Describing all test cases regarding string calculation
describe("String calculator", () => {
  test("Should return 0 for emtpty string", () => {
    expect(stringCal("")).toBe(0);
  });
  test("Should return number itself when input is single number", () => {
    expect(stringCal("1")).toBe(1);
  });
  test("Should return the sum of two comma seperated numbers", () => {
    expect(stringCal("1,5")).toBe(6);
  });
  test("Should return the sum of multiple comma seperated numbers", () => {
    expect(stringCal("5,7,8,12")).toBe(32);
  });
  test("Should handle new line with comma seperator to sum numbers", () => {
    expect(stringCal("1\n2,3")).toBe(6);
  });
  test("should handle different delimiters", () => {
    expect(stringCal("//;\n1;2")).toBe(3);
  });
  test("should throw an exception for negative numbers", () => {
    expect(() => stringCal("1,-2,3,-5")).toThrow(
      "negative numbers not allowed : -2, -5"
    );
  });
});
