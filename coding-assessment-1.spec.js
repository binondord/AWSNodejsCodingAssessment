const CodingAssessment1 = require('./coding-assessment-1');

describe('Coding assessment 1', ()=>{
    it('should return integers only those less than 5 ', () => {
        const result = CodingAssessment1(4);

        const expectedValues = [
            1,
            2,
            3,
            4,
        ];

        expect(result).toBe(expectedValues.join('\n'));
    });
});