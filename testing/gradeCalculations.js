const averageExams = (valuesExam) => {
    const numberValidation = valuesExam.every(exam => typeof exam === 'number');
    if (!numberValidation) throw Error('please input number');
 
    const sumValues = valuesExam.reduce((accumulator,currentValue) => accumulator + currentValue, 0);
    return sumValues / valuesExam.length;
};
 
const isStudentPassExam = (valuesExam, name) => {
    const minValues = 75;
    const average = averageExams(valuesExam);
    
    if (average > minValues) {
        console.log(`${name} pass the exams`);
        return true;
    } else {
        console.log(`${name} fail the exams`);
        return false;
    }
};
 
module.exports = { averageExams, isStudentPassExam };

// there's 2 function in this code:
// averageExams: menghitung rata-rata nilai siswa dari sebuah inputan berupa daftar angka dalam bentuk array.
// isStudentPassExam: melakukan kalkulasi apakah seorang siswa lulus ujian atau tidak berdasarkan nilai rata-rata yang didapatkan(tergantung fungsi averageExams).

// Simulasi pengujian:
// here we can write the kerangka testcase:
// apa yang akan diuji: fungsi menghitung rata-rata, fungsi untuk mengecek apakah seorang siswa lulus ujian.
// ekspektasi yang diharapkan: menghasilkan nilai yang sesuai dari inputan, inputan harus angka, menghasilkan hasil kelulusan iya/tidak pada siswa dengan kriteria tertentu.

// setelah itu kita akan membuat folder baru bernama _tests_. dan 1 file test untuk 1 lingkup perintah dengan format namaScopeFunctions.test.js (in this case is gradeCalculations.test.js).