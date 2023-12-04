// after we learn a basic programming in js like write a code and implement a pupular paradigms, the next step is publish our code.
// but before we publish our code, we need to test our code first.
// here we are in the introduction of testing in js.
// a program need to be tested before we publish it.
// this process is to control the quality of our code.
// to make sure our program is working as expected and less buggy.
// testing can be done manually or automatically.
// manual: let some people to run our program, this is to check usability, accessibility, and user experience of our program.
// automatic: this kind of test is can be done by a software engineer or QA engineer. to check the functionality of our program.
// there's 4 type of testing:
// Static test:
// make sure there's no type / naming convention and no error types.

// Unit test:
// to make sure every unit of our program is working as expected. unit can be a smalles part of our program like a function or a class. this process can done automatically.

// Integration test:
// to make sure some function that depends on another functioni is working, and can automatically done by script.

// End to end test:
// to test the whole program, from the beginning to the end. as the user operate a program. to make sure the program is working as expected. and usually this test is done manually by a user/tester and automatically.

// there's some point to define first:
// apa yang igin di uji: misal, melakukan fungsi menghitung rata-rata nilai siswa, atau pengujian registrasi akun, dan sebagainya.
// ekspektasi apa yang diharapkan: misal, dalam menghitung nilai rata-rata: menghasilkan output yang sesuai berdasarkan input, dan input harus berupa angka.

// JEST
// JEST is a testing framework for js.
// first install jest using npm. 'npm install --save-dev jest'
// syntax:
// test('deskripsi dari testcase kamu', () => {
//     expect(perintah).matcher(nilai yang diekspektasikan)
// })
// contoh:
test('dua tambah dua adalah empat', () => {
    expect(2+2).toBe(4);
})
// expect merupakan segmen yang berisi perintah yang menghasilkan nilai kembalian. it can be a function and code directly.
// toBe is a mathcer. is a value that we expect from the expect function.
// matcher  can ben toBe(x) toEqual(x) toBeNull() toBeTruthy() toBeFalsy()
// you can find more matcher in the documentation. https://jestjs.io/docs/using-matchers.
// in jest can use describe() to group some test cases. like this:
describe('pengujian olah aritmatika', () => {
    test('1. dua tambah dua adalah empat', () => {
        expect(2+2).toBe(4);
    });

    test(('2. dua kali dua adalah empat'), () => {
        expect(2*2).toBe(4);
    });
})
// lets try to test the real code in gradeCalculations.js