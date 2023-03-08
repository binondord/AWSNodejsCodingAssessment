const CodingAssessment2 = require('./coding-assessment-2');

describe('Coding assessment 2', ()=>{
    it('should return star tree with length of n = 5 ', () => {
        const result = CodingAssessment2(5);

        const expectedValues = [
            "----*",
            "---**",
            "--***",
            "-****",
            "*****"
        ];

        expect(result).toBe(expectedValues.join('\n'));
    });

    it('should return star tree with length of n = 7 ', () => {
        const result = CodingAssessment2(7);

        const expectedValues = [
            "------*",
            "-----**",
            "----***",
            "---****",
            "--*****",
            "-******",
            "*******"
        ];

        expect(result).toBe(expectedValues.join('\n'));
    });
});