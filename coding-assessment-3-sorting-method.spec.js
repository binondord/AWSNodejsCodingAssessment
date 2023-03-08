const CodingAssessment3SortingMethod = require('./coding-assessment-3-sorting-method');

describe('Coding assessment 3', ()=>{
    it('should return a sorted array of integers from lowest to highest', () => {
        const originalValues = [1, 5, 20, 17, 4, 8, 2, 15];

        const result = CodingAssessment3SortingMethod(originalValues);

        const expectedValues = [1, 2, 4, 5, 8, 15, 17, 20];

        expect(result).toStrictEqual(expectedValues);
    });
});