const CodingAssessment1 = require('./coding-assessment-1');

console.log("\nCoding Assessment 1\n");

console.log(CodingAssessment1(35));

const CodingAssessment2 = require('./coding-assessment-2');

console.log("\nCoding Assessment 2\n");

console.log("n = 5\n");
console.log(CodingAssessment2(5));

console.log("n = 7\n");
console.log(CodingAssessment2(7));

const CodingAssessment3SortingMethod = require('./coding-assessment-3-sorting-method');

console.log("\nCoding Assessment 3: Sorting Method\n");

const originalValues = [1, 5, 20, 17, 4, 8, 2, 15];
const result = CodingAssessment3SortingMethod(originalValues);

console.log("\nOriginal Values: \n");
console.log(originalValues);

console.log("\nSorted Result: \n");
console.log(result);