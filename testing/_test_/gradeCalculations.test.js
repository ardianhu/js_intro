// so here we are write test from gradeCalculations.js
// this is the unit test for averageExams function:
const { averageExams, isStudentPassExam } = require('../gradeCalculations.js');

// test('it should return exact average', () => {
//     const listValueOfExams = [80, 100, 100, 80];
//     expect(averageExams(listValueOfExams)).toEqual(90);
// })

// test('it should handle non-number', () => {
//     const listValueOfExams = [80, 'a', '100', 80];
//     expect(() => averageExams(listValueOfExams)).toThrow();
// });

// intergration test can be use or writed in the same file with unit test.

describe('grade calculations', () => {
    test('it should return exact average', () => {
        const listValueOfExams = [80, 100, 100, 80];
        expect(averageExams(listValueOfExams)).toEqual(90);
    });
 
    /**
     * Integration testing
     */
    test('it should return exam passed status', () => {
        const listValueOfExams = [80, 100, 100, 80];
        expect(isStudentPassExam(listValueOfExams, 'Budi')).toEqual(true);
    })
 
 
    test('it should return exam failed status', () => {
        const listValueOfExams = [50, 40, 70, 80];
        expect(isStudentPassExam(listValueOfExams, 'Budi')).toEqual(false);
    })
})