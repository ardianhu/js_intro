// functional programming is a kind of computional process with a pure math function.
// it's 'what to solve' instead of 'how to solve'.
// this is the example of how to solve as thte old ways.
// in this example i have an array, and i want to strore the value to the new array.
// and we might we idea to do this like this:
const names = ["Harry", "Ron", "Jeff", "Thomas"];

const newNamesWithExcMark = [];
for (let i = 0; i < names.length; i++) {
    newNamesWithExcMark.push(`${names[i]}!`);
}
console.log(newNamesWithExcMark);
// it's work fine, but it's not functional programming. btw its called imperative programming.
// and here is the functional programming way: 
const cars = ["BMW", "Volvo", "Mini"];
const newCarsWithExcMark = cars.map((car) => `${car}!`);
console.log(newCarsWithExcMark);
// it's more simple and clean, and it's called declarative programming.

// terdapat konsep-konsep functional programming
// 1. Pure Function (tidak bergantung terhadap nilai yang berada di luar function atau parameternya)

// let's take a look at this code below:
let PI = 3.14;
const hitungLuasLingkarang = (jarijari) => {
    return PI * (jarijari * jarijari);
}
console.log(hitungLuasLingkarang(4));
// this is not a pure function, because it's depend on PI variable.
// we can accidentally change the value of PI. and it will be a big problem and makes the result inaccurate.
// so we can make it pure function like this:
const countCircle = (jari) => {
    return 3.14 * (jari * jari);
}
console.log(countCircle(4));
// so the rules is we can't use variable outside the function and parameter, and we can't change the variable outside the function.
// another example is:
const createPersonWithAge = (age, person) => {
    person.age = age;
    // here we add age property to person object.
    // and make the person object was changed.
    return person;
}
const person = {
    name: 'Ardian'
}
const newPerson = createPersonWithAge(18, person);
console.log({person, newPerson});
// and here the right way to do it:
const createCarWithModel = (model, car) => {
    return {...car, model};
    // here we not change the car object, but we create a new object with the same value of car object, and add the model property.
}
const car = {
    carName: "BMW"
}
const newCar = createCarWithModel("M3 GTR", car);
console.log({car, newCar});
// untuk memastikan pure function bisa dilihat dari hal di bawah ini:
// a. tidak bergantung pada nilai yang berada di luar function atau parameternya. hanya bergantung pada argumen yang diberikan.
// b. mengembalikan nilai yang sama untuk argumen yang sama.
// c. tidak menimbulkan efek samping (side effect) seperti misalnya mengubah nilai variabel global.

// 2. Immutability
// its means object or variable that can't be changed after created. seperti contoh di kode paling atas.
// alih-alih mengubah niali dari array itu sendiri, malah membuat atau menghasilkan array baru.
// lantas, bagaimana bila kita benar-benar perlu mengubah niali dari sebuah objek seperti contoh di bawah ini:
const user = {
    firstName: "Harry",
    lastName: "Protter"
}
console.log(user);
const renameLastName = (newLastName, user) => {
    user.lastName = newLastName;
}
renameLastName("Potter", user);
console.log(user);
// here we succeed to change the lastName property of user object. but it's not functional programming concept. avoid to do this.
// and what we need to do? we can do it like this:
const pengguna = {
    awalan: "Mr.",
    akhiran: "Brean"
}
const createPenggunaWithNewAkhiran = (newAkhiran, pengguna) => {
    return {...pengguna, akhiran: newAkhiran};
}
const penggunaBaru = createPenggunaWithNewAkhiran("Bean", pengguna);
console.log({pengguna, penggunaBaru});
// with this we're not modifying the pengguna, but we create a new object with the same value of pengguna, and add the newAkhiran property.
// why this is the best way? right now, who knows

// 3. Recursive
// like it's name, its recursive. it's a function that call itself.
// like this one:
const countdown = start => {
    do {
        console.log(start);
        start -=1;
    }
    while (start > 0);
};
countdown(10);
// and this is the recursive way:
const countDown = start => {
    console.log(start);
    if(start > 0) countDown(start-1);
    // so here we call the function again, and again, and again, until the start variable is 0.
    // recursive, instead of looping.
};
countDown(10);

// 4. High-Order Function

// js has an abbility so called First Class Functions.
// it's means we can store function in variable, and we can pass function as an argument to another function. and also we can return a function from another function. or even both of them
// this is a simple example:
const hello = () => {
    console.log("Hello");
}
const say = (someFunction) => {
    someFunction();
    // here we call the function that we pass as an argument. and in this case is hello()
}
const sayHello = () => {
    return () => {
        console.log("Hello!");
    }
}
hello();
say(hello);
sayHello()();

// with this first class function, we can create a high-order function.
// but what is exatcly high-order function?
// hight order function merupakan fungsi yang dapat menreima fungsi lainnya pada argumen; mengembalikan sebuah fungsi; atau bahkan keduanya
// teknik ini biasanya digunakan untuk:
// a. mengabstraksi atau mengisolasi sebuah aksi, event, atau menangani alur asynchronous menggunakan callback, promise, dan lainnya.
// b. membuat utilities yang dapat digunakan di berbagai tipe data.
// c. membuat teknik currying atau function composition
// Array.map() merupakan salah satu contoh higher order function yang ada di javascript. karena dalam penggunaanya, ia menerima satu buah argumen yang merupakan sebuah function.
// dengan mengetahui adanya higher order functionm anda bisa membuat fungsi map() versi anda sendiri:
const laptops = ["Asus", "Acer", "Lenovo", "HP"];
const arrayMap = (arr, action) => {
    const loopThrough = (arr, action, newArray = [], index = 0) => {
        const item = arr[index];
        if(!item) return newArray;
        return loopThrough(arr, action, [...newArray, action(arr[index])], index + 1);
    }
    return loopThrough(arr, action);
}
const newLaptops = arrayMap(laptops, (laptop) => `${laptop}!`);
console.log({laptops, newLaptops});
// that's that.