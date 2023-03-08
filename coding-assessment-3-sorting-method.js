function CodingAssessment3SortingMethod(array) {
   return array.reduce((arr, value) => [
        ...arr.filter(n => n <= value),
        value,
        ...arr.filter(n => n > value)],
        []
    );
}

module.exports = CodingAssessment3SortingMethod;