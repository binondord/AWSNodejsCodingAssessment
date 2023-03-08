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
        expect(result.split('\n')).not.toEqual(expect.arrayContaining(['Knose']));
        expect(result.split('\n')).not.toEqual(expect.arrayContaining(['Pet Care Made Easy']));
        expect(result.split('\n')).not.toEqual(expect.arrayContaining(['Knose Pet Care Made Easy']));
    });

    it('should match multiple of 5 values', () => {
        const result = CodingAssessment1(5);

        expect(result.split('\n')).toEqual(expect.arrayContaining(['Knose']));
        expect(result.split('\n')).not.toEqual(expect.arrayContaining(['Pet Care Made Easy']));
        expect(result.split('\n')).not.toEqual(expect.arrayContaining(['Knose Pet Care Made Easy']));
    });

    it('should match multiple of 7 values', () => {
        const result = CodingAssessment1(7);

        expect(result.split('\n')).toEqual(expect.arrayContaining(['Knose']));
        expect(result.split('\n')).toEqual(expect.arrayContaining(['Pet Care Made Easy']));
        expect(result.split('\n')).not.toEqual(expect.arrayContaining(['Knose Pet Care Made Easy']));
    });

    it('should match multiple of 5 and 7 values', () => {
        const result = CodingAssessment1(35);

        expect(result.split('\n')).toEqual(expect.arrayContaining(['Knose']));
        expect(result.split('\n')).toEqual(expect.arrayContaining(['Pet Care Made Easy']));
        expect(result.split('\n')).toEqual(expect.arrayContaining(['Knose Pet Care Made Easy']));
    });

    it('should return exact match', () => {
        const result = CodingAssessment1(35);

        const expectedValues = [
            1,
            2,
            3,
            4,
            'Knose',
            6,
            'Pet Care Made Easy',
            8,
            9,
            'Knose',
            11,
            12,
            13,
            'Pet Care Made Easy',
            'Knose',
            16,
            17,
            18,
            19,
            'Knose',
            'Pet Care Made Easy',
            22,
            23,
            24,
            'Knose',
            26,
            27,
            'Pet Care Made Easy',
            29,
            'Knose',
            31,
            32,
            33,
            34,
            'Knose Pet Care Made Easy',
        ];

        expect(result.split('\n')).toStrictEqual(expectedValues.map(v => v.toString()));
    });
});