function CodingAssessment1(n) {
    return new Array(n).fill().map((d, i) => {
        const j = i + 1;
        const isDivisibleByFive = j % 5 == 0; 
        const isDivisibleBySeven = j % 7 == 0;
        let text = '';
        if (isDivisibleByFive) text += "Knose";
        if (isDivisibleBySeven) {
            if (text.length != 0) text += " ";
            text += "Pet Care Made Easy";
        }

        return (isDivisibleByFive || isDivisibleBySeven) ? text : j;
    }).join('\n');
}

module.exports = CodingAssessment1;