function CodingAssessment2(n) {
    return new Array(n)
        .fill()
        .map((d, i) => Array(n - i - 1)
            .fill('-')
            .join('')
            + Array(i + 1)
            .fill('*')
            .join('')
        ).join('\n');
}

module.exports = CodingAssessment2;