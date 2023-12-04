console.log('1. destructuring object');
// simpelnya destructuring merupakan proses ekstraksi nilai dari object atau array ke dalam satuan yang lebih kecil atau variable.
// biasanya kita menggunakan kode seperti di bawah ini:
const profile = {
    nama: "Ardian",
    umur: 24,
    pekerjaan: "Programmer",
}
// proses ekstraksi
const name = profile.nama;
const age = profile.umur;
const job = profile.pekerjaan;
console.log(name, age, job);
// and here is the destructuring way. same result, but more simple
const {nama, umur} = profile;
console.log(nama, umur);
// contoh di atas merupakan destructuring bersamaan dengan deklarasi varable.
// di kasus tertentu kita perlu melakukannya pada variable yang sudah dideklarasikan.
// and we can't just type {nama, umur} = profile; because it will be treated as block code, not an object.
const books = {
    judul: "lord",
    harga: 24000,
    penerbit: "bintang pustaka",
}
// here we have variable that already declared
let judul = "harry";
let harga = 20000;
let penerbit = "gramedia";
// and here is the destructuring way
({judul, harga, penerbit} = books);
// we need the ('destructuring_syntax')
console.log(judul, harga, penerbit);
// bagaimana jika kita melakukan destructuring pada objek yang bukan properti dari objek
const game = {
    title: "arena breakot",
    genre: "thriller",
    availeableIn: "android",
}
// const {title, genre, availeableIn, dev} = game;
// at the code above the dev value is undefined, because it's not a property of the object.
// and we can set default value for the variable like this way:
const {title, genre, availeableIn, dev = "unknown developers"} = game;
console.log(title, genre, availeableIn, dev);
// cara di atas kita menggunakan nama variable yang sama persis dengan nama properti dari objek.
// kita bisa menggunakan nama variable yang berbeda dengan nama properti dari objek.
// seperti contoh di bawah ini:
const {title: judulGame, genre: genreGame, availeableIn: platformGame, dev: devGame = "unknown developers"} = game;
console.log(judulGame, genreGame, platformGame, devGame);
// i think this is the best way to do the destructuring object :D
console.log('2. destructuring array');
// pretty much the same way as destucturing on object, instead use {} array use []
const laptops = ["ThinkPad", "Macbook", "XPS"];
console.log(laptops);
// and here the destructuring process
const [laptop1, laptop2, laptop3] = laptops;
console.log(laptop1, laptop2, laptop3)
// and we can just get the specific index of array with empty the rest of unnecessary index.
const [ , , laptopketiga] = laptops;
console.log(laptopketiga);
// as destructuring on object, we can use destructuring on array on variable that already declared, the differencess we dont have to add ('destructuring_syntax'), like this code below:
let laptoppertama = "Lenovo ThinkPad";
let laptopkedua = "Apple Macbook";
[laptoppertama, laptopkedua] = laptops;
console.log(laptoppertama, laptopkedua);
//  and we can use this destructuring array to swap the value
// this is the old ways:
var a = 1;
var b = 2;
var temp;

console.log(`nilai a: ${a}, nilai b: ${b}`);
temp = a;
a = b;
b = temp;
console.log(`nilai a: ${a}, nilai b: ${b}`);
// and here we can use destructuring array to swap the value:
let bestLaptop = "Macbook";
let worstLaptop = "Thinkpad";
console.log(`best laptop: ${bestLaptop}, worst laptop: ${worstLaptop}`);
[bestLaptop, worstLaptop] = [worstLaptop, bestLaptop];
console.log(`best laptop: ${bestLaptop}, worst laptop: ${worstLaptop}`);
// and we can assign the default value like this:
const cars = ['BMW'];
const [car1, car2 = 'Mercedes'] = cars;
console.log(car1, car2);