// data structure
// 1. object
console.log('1. Object')
const tunangan = {
    nama: "Adelia",
    umur: 18,
    pekerjaan: "Guru",
    isJadian: true,
}
if (tunangan.isJadian) {
    secondmessage = "Alhamdulillah";
} else {
    secondmessage = "I will be fight for her";
}
let message = `Dia bernama ${tunangan['nama']} dan berumur ${tunangan.umur} tahun. dan sekarang dia menjadi ${tunangan.pekerjaan}`;
// in the example above, kita bisa mengambil nama dengan dot operator, tapi dalam kasus lain bisa dengan bracket atau tanda kurung siku. contoh: tunangan['nama']. dan ini bisa digunakan ketika key dari object berupa string yang mempunyai spasi.
console.log(message + '. ' + secondmessage);
// and somehow we can change the value of the object
tunangan.nama = "amelia";
tunangan.umur = 20;
tunangan['pekerjaan'] = "Selebriti";
tunangan.isJadian = false;
if (tunangan.isJadian) {
    secondmessage = "Alhamdulillah";
} else {
    secondmessage = "I will be fight for her";
}
let anothermessage = `Dia bernama ${tunangan['nama']} dan berumur ${tunangan.umur} tahun. dan sekarang dia menjadi ${tunangan.pekerjaan}`;
console.log(anothermessage + '. ' + secondmessage);
// const tunangan kenapa bisa diubah nilainya? emang bisa, yang ga bisa kalo kita inisialisai ulang 'tunangan'.
// also we can delete the property of the object, seperti 'delete tunangan.umur' atau 'delete tunangan['pekerjaan']'.

// 2. array
console.log('2. Array')
const crush = ['amelia', 'andani', 'bidadari surga'];
console.log(crush);
console.log(crush[0]);
console.log('jumlah crush saya adalah ' + crush.length);
// menambahkan data ke array
crush.push('marino');
console.log(crush);
console.log('jumlah crush saya adalah ' + crush.length);
// menghapus data terakhir di array
crush.pop();
console.log(crush);
console.log('jumlah crush saya adalah ' + crush.length);
// menghapus data pertama di array
crush.shift();
console.log(crush);
console.log('jumlah crush saya adalah ' + crush.length);
// menambahkan data pertama di array
crush.unshift('adelia');
console.log(crush);
console.log('jumlah crush saya adalah ' + crush.length);
// menghapus data di array
delete crush[0];
console.log(crush);
console.log('jumlah crush saya adalah ' + crush.length);
// tapi bukan menghapus secara keseluruhan, hanya menghapus nilai, dan membiarkan kosong nilai inde.
// untuk menghapus data di array, bisa menggunakan splice, contoh: crush.splice(0, 1) artinya menghapus data di index 0 sebanyak 1 data.
// dan bisa sekaligus untuk menambahkan data, contoh: crush.splice(0, 1, 'adelia') artinya menghapus data di index 0 sebanyak 1 data, dan menambahkan data 'adelia' di index 0.
crush.splice(0, 2, 'adelia');
crush.pop();
console.log(crush);
console.log('jumlah crush saya adalah ' + crush.length);