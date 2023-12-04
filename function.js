function hai() {
    console.log("hai gais");
}
hai();
// memanggil hai function yang mempunyai perintah untuk menampilkan pesan 'hai gais'
function pesan(nama, bahasa){
    if (bahasa === "english") {
        console.log("Hallo " + nama);
    } else if (bahasa === "indonesia") {
        console.log("Hai " + nama);
    } else if (bahasa === "french") {
        console.log("Bonjour " + nama);
    } else {
        console.log("sorry, i dont know");
    }
}
pesan("Ardian", "french");
// and here we can use return as return value of the function
function returnPesan(nama, bahasa){
    if (bahasa === "english") {
        return "Hallo " + nama;
    } else if (bahasa === "indonesia") {
        return "Hai " + nama;
    } else if (bahasa === "french") {
        return "Bonjour " + nama;
    } else {
        return "sorry, i dont know";
    }
    // after return was executed the function stopped and return a value.
}
let returnValue = returnPesan("Ardian", "indonesia");
console.log(returnValue);
// there's also esxpression function, like this:
const perkenalan = function(nama, bahasa){
    if (bahasa === "english") {
        return "Hello " + nama;
    } else if (bahasa === "indonesia") {
        return "Hai " + nama;
    } else if (bahasa === "french") {
        return "Bonjour " + nama;
    } else {
        return "sorry, i dont know";
    }
}

console.log(perkenalan("Ardian", "english"));
// next is we can also use object as parameter
const laptop = {
    manufacturer: "Lenovo",
    type: "Thinkpad",
    series: "l380 Yoga",
    // processor: "intel i5"
}
function laptopSpecs({manufacturer, type, series}) {
    console.log(`laptop saya adalah ${manufacturer} ${type} ${series}`);
}
laptopSpecs(laptop);
// we can also set the default parameters as example below:
function laptopSpecsDefault({manufacturer = "unknown", type = "unknown", series = "unknown", processor = "unknown"} = {}) {
    console.log(`laptop saya adalah ${manufacturer} ${type} ${series} with ${processor} processor inside`);
}
laptopSpecsDefault(laptop);
// rest parameter
// this one is like spread operator, in array its spread the array, and in function its gather the parameter into array.
function sum(...numbers) {
    let total = 0;
    // so the parameters is gathered into array called numbers
    for (const number of numbers) {
        total += number;
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5));
// teknik ini akan sangat bermanfaat ketika kita membuat sebuah function dengan parameter yang tidak pasti

// the next one is arrow function
// example of arrow function:
const sayHello = (nama) => {
    console.log(`hello ${nama}`);
}
// the code above is like this in regular function:
// function sayHello(nama) {
//     console.log(`hello ${nama}`);
// }
// or in expression function:
// const sayHello = function(nama) {
//     console.log(`hello ${nama}`);
// }
sayHello("Ardian");
// another unique thing about this function is: if the parameters is only one, we can remove the (). and if the body of the function is only one line, we can remove the {} and return syntax.
const sayMyName = nama => console.log(`hello ${nama}`);
sayMyName("Ardian");

// variable scope, its all about the avaliability of the variable.
const a = 1;
function parent() {
    const b = 2;
    function child() {
        const c = 3;
    }    
}
parent();
// console.log(a);
// console.log(b);
// console.log(c);
// b and c is not defined because its not available outside the function.
// but sometimes if we not use the const, let, or var, the variable will be available outside the function, it's called global variable.

// closure
// closure is a function that remember the variable outside the function even though the function already executed.
// suatu fungsi yang dapat mengakses variabel di dalam lexical scope-nya, disebut closure.
// meskipun fungsi tersebut telah dieksekusi
function cores() {
    const core = ["i3", "i5", "i7", "i9"];
    function getCore() {
        console.log(core[1]);
        // core array are accessible here, because its in the lexical scope.
        // child function can access the variable in parent function.
    }
    getCore();
}
cores();
// the purpose of closure is just like the private in anaother program langguage.
// the next example is:
let counter = 0;
const add = () => {
    return ++counter;
}
console.log(add());
console.log(add());
counter = 11;
// the counter value is changed here.
console.log(add());
// closure membuat fungsi dan variabel seolah-olah private.
// like this one:
const tambahkan = () => {
    let penghitung = 0;
    return () => {
        return ++penghitung;
    };
}
const tambah = tambahkan();
console.log(tambah());
console.log(tambah());
penghitung = 11;
console.log(tambah());