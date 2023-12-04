// with the use of functional programming, the function we build are reusable.
// because it's pure functiom, it can't be affected or affect anything outside the function.
// here we will use js reusable function. khususnya beberapa higher order function yang dimiliki array seperti map, filter, dan foreach.

// 1. Array Map

// fungsi array.map() merupakan fungsi bawan dari array yang sangat berguna dan banyak sekali digunakan.
// fungsi ini datap dipanggil dari sebuah data bertipe array dan menerima satu buah callback function

// ['Harry', 'Ron', 'Jeff', 'Thomas'].map(() => { });
// callback function tersebut akan dipanggil sebanyak jumlah panjang array dan akaan memliki akses pada index array sesuai dengan iterasinya.

// ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { });
// fungsi map akan mengembalikan array baru. tilai tiap item pada array yang dikembalikan dihasilkan dari kembalian callback functionnya.
// karena callback function dapat mengakses item array, biasanya dev menggunakannya untuk menghasilkan nilai baru.

const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => {
    return `${name}_simatupank`
})
console.log(newArray);

// another example
const laptops = ['Thinkpad', 'Macbook', 'Dell'];
const newLaptop = laptops.map((laptop) => {
    return `${laptop} ready`
})
console.log(newLaptop);

// 2. Array Filter

// built in function from js. just like its name, its to filter the array.
// it works like map one, but it must be return boolean as to tell the item is match or not

// here's a simple example:
const truthyArray = [1, '', 'Halo', 0, null, 'Harry', 12].filter((item) => Boolean(item));
console.log(truthyArray);
// this example is to filter or remove the false value on the array

// another example:
const mahasiswa = [
    {
        nama: 'Jaka',
        nilai: 90,
    },
    {
        nama: 'Joko',
        nilai: 56
    },
    {
        nama: 'Cici',
        nilai: 80
    },
];
const pendapatBeasiswa = mahasiswa.filter((student) => student.nilai > 75);
// so here we create new array that filled with mahasiswa but it filtered that the nilai vallue is more than 75
console.log(pendapatBeasiswa);

// 3. Array Reduce

// it's built ini function too.
// digunakan untuk mengeksekusi fungsi reducer pada setiap elemen array dan hanya mengembalikan outpt satu nilai saja.
// and here's the syntax arr.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue]). [...] opsional paramter
// example: here we're gonna use mahasiswa array on line 40
const totalScore = mahasiswa.reduce((acc, student) => acc + student.nilai, 0);
console.log(totalScore);

// 4. Array Some

// another built in function.
// this function was used quite frequently. this function return boolean
// this is the syntax: arr.some(callback(element, [index], [array]), [thisArg]). [...] opsional
// the output is wheter true or false. nilai yang dihasilkan didasarkan pada pernyataan apakah ada setidaknya satu dari deretan nilai dalam array tersebut lolos berdasarkan kriteria yang kita tuliskan dalam callback function.
// example: is there any even number in an array
const randomNumber = [1, 2, 3, 4, 5];
const isThereAnyEven = randomNumber.some(element => element % 2 === 0);
console.log(isThereAnyEven);

// 5. Array Find
// kinda same with array.some(), array.find() is used to be find an item in array
// this works like this. array.find() will return one value frome elemen that be found based on some specific criteria. and return undifine if theres no item that match with the criteria.
// syntax: arr.find(callback(element, [index], [array]), [thisArg]); [...] opsional
// example: we'll search an item with name 'jaka' in mahasiswa
const findJaka = mahasiswa.find(student => student.nama === 'Jaka');
console.log(findJaka);

// 6. Array Sort
// just like it's name, its to sort an array
// in default, it'll sort the array as a string in ascending way.
// syntax: arr.sort([compareFunction]) [...]optional
// example: 
const bulan = ['March', 'Jan', 'Feb', 'Dec'];
bulan.sort();
console.log(bulan);

const arraryNumber = [1, 20, 1000, 103, 143];
arraryNumber.sort();
console.log(arraryNumber);
// it will sort like a ascending string, its default.
// and this is example to sort with custom criteria.

const array04 = [1, 30, 4, 1000];

const compareNumber = (a, b) => {
    return a - b;
// Pada compare function, fungsi akan membandingkan 2 nilai yang akan menghasilkan 3 result yaitu negatif (-), 0, dan positif (+).

// Jika, negative maka `a` akan diletakkan sebelum `b`
// Jika, positive maka `b` akan diletakkan sebelum `a`
// Jika, 0 maka tidak ada perubahan posisi.
}
const sorting = array04.sort(compareNumber);
console.log(sorting);

// 7. Array every
// built in array function, to check if every item in array is match with the criteria, and it return a boolean.
// syntax: arr.every(callback(element, [index], [array])) 
// example: to check if the student score is lulus
const minimumScore = 55;
const isPassed = mahasiswa.every(student => student.nilai >= minimumScore);
console.log(isPassed);

// 8. Array forEach
// berbeda dari fungsi array lain, fungsi ini tidak mengembalikan nilai apapun. hanya berfungsi untuk memanggil fungsi callbacknya sajak, tidak lebih.
// with this function we eventually change the loop syntax based on the amount of array in declarative way.
// and here's an example imperative vs declarative:
// imperative
// const drinks = ['coffee', 'tea', 'chocolate'];
// for (let i = 0; i < drinks.length; i++) {
//     console.log(`ini ${drinks[i]}`);
// }
// // declarative
// const foods = ['pizza', 'burger', 'hotdog'];
// foods.forEach((food) => {
//     console.log(`ini ${food}`)
// });
// // but thi way cannot use break or continue operator. seperti contoh di bawah iniconst names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
// for(let i = 0; i < names.length; i++) {
//     if(names[i] === 'Jeff') continue; // Bisa!
    
//     console.log(`Hello, ${names[i]}!`);
//   }
   
//   names.forEach((name) => {
//     if(name === 'Jeff') continue; // Tidak Bisa!
//     console.log(`Hello, ${name}`);
//   });
  