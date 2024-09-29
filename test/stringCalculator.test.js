const stringCal = require("../utils/stringCalculator");

// Describing all test cases regarding string calculation
describe("String calculator", () => {
    test("Should return 0 for emtpty string", () => {
        expect(stringCal("")).toBe(0);
    })
});
