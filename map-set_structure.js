console.log('1. map');
// map is just like object, but the key can be anything, not just string.
// this is the syntax const contohMap = new Map();
// example on multi-dimensional array:
const contohMap = new Map([
    ['1', 'a string key'],
    [1, 'a number key'],
    [true, true],
]);
console.log(contohMap);
// on map, we can get the specific value with the key by using get(), and we can set or add value using set().
const laptop = new Map([
    ["Lenovo", "Thinkpad"],
    ["Apple", "Macbook"],
    ["Dell", "XPS"]
]);
console.log(laptop);
console.log(laptop.size);
// size pretty much like to array.length, to count the key-value.
console.log(laptop.has("Apple"));
// to check if the map has the key, return boolean.
console.log(laptop.get("Apple"));
// get the apple key
laptop.set("Microsoft", "Surface");
// add or set to laptop map with value "Surface" and key "Microsoft".
console.log(laptop);
console.log(laptop.size);
console.log(laptop.get("Microsoft"));
// also we can use this kind of code to add or set and get the value to map:
const carMap = new Map();
carMap["BMW"] = "M3";
console.log(carMap["BMW"]);
// but it doesn't work as a map, and cannot use map query like .has .delete. etc.
console.log(carMap);
console.log(carMap.get("BMW"));
console.log(carMap.has("BMW"));
// its amburadul
console.log("2. set");
// set is just like an array, have a bunch of value(set of value), but it doesn't have key nor index. and the value is unique, no duplicate value.
const os = new Set(["Windows", "MacOS", "Linux", "Windows"]);
console.log(os);
// and we can add value to set using add(), and it must be one argument, not array. if so, the array will be one value. and any duplicate value will be ignored.
os.add("Hackintosh");
os.add(["Android", "iOS"]);
console.log(os);
// and we can delet the value of set using delete(value).
os.delete("Linux");
console.log(os);
console.log("3. weak-{map, set}");
// pretty much like map and set, but the value is weak, and the key is object.
// like this one:
// mamp
const visitsCountMap = new Map(); // Menyimpan daftar user

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);  // Menambahkan user "Jonas"

jonas = null;  // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
  console.log(visitsCountMap);
}, 10000)

/* output
Map(1) { { name: 'Jonas' } => 1 }
*/
// weakmap

const hitung = new WeakMap(); // Menyimpan daftar user

function hitunguser(user) {
  let count = hitung.get(user) || 0;
  hitung.set(user, count + 1);
}

let john = { name: "john" };
hitunguser(john);  // Menambahkan user "Jonas"

john = null;  // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
  console.log(hitung);
}, 10000);

/* output
should be like this, but lets just skip it
  WeakMap {  }
*/