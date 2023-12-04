const favorites = ["Nasi Goreng", "Mie Ayam", "Sate"];
console.log(favorites);
// untuk menggunakan spread atau penyebaran array bisa dengan kode di bawah ini:
console.log(...favorites);
// kode di atas sama dengan console.log(favorites[0], favorites[1], favorites[2]);
// dan juga bisa berfungsi untuk menggabungkan 2 array atau lebih menjadi satu array baru
// jika tidak menggunaakan spread maka akan meenjadi array dalam array seperti di bawah ini:
const favorites2 = ["Es Teh", "Es Jeruk", "Joshua"];
const allFav = [favorites, favorites2];
console.log(allFav);
// here the right thing to do using spread
const allFav2 = [...favorites, ...favorites2];
console.log(allFav2);
// and this also works on object
const part1 = {
    nama: "Ardian",
    age: 24
};
const part2 = {
    pekerjaan: "Programmer",
    isMarried: false
};
const allPart = {...part1, ...part2};
console.log(allPart);