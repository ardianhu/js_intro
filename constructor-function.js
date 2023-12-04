function Laptop(model, processor, ram, storage, vga, harga) {
    this.model = model;
    this.processor = processor;
    this.ram = ram;
    this.storage = storage;
    this.vga = vga;
    this.harga = harga;
}
Laptop.prototype.info = function () {
    console.log(`laptop ini adalah ${this.model} dengan ram ${this.ram} dan storage ${this.storage}`);
}
Laptop.prototype.performance = function () {
    console.log(`laptop ini memiliki performa yang baik, didukung oleh ${this.processor} dan ${this.vga}`);
}
Laptop.prototype.worth = function () {
    console.log(`laptop ini sangat worth it dengan harga ${this.harga}`);
}

const laptop1 = new Laptop("Thinkpad L380 Yoga", "i5", "8GB", "256GB", "uhd 620", "Rp. 5.000.000");
laptop1.info();
laptop1.performance();
laptop1.worth();
// constructor function must ve a regular function. and the first letter must be capital
// agar fungsi mengembalikan sebuah objeck kita harus menggunakan keyword new

// howewfer we can also use class to create object in modern javascript ES6
class Os {
    constructor(name, platform, dev) {
        this.name = name;
        this.platform = platform;
        this.dev = dev;
        // and we can make some propery here secara mandiri:
        this.versionNumber = `${this.name}-${Math.floor(Math.random() * 1000) + 1}`
    }
    info() {
        console.log(`os ini adalah ${this.name} yang tersedia di ${this.platform}`);
    }
    developer() {
        console.log(`os ini dikembangkan oleh ${this.dev}`);
    }
}
// const os1 = new Os("Windows", "PC", "Microsoft");
// os1.info();
// os1.developer();
oses = []
const os1 = new Os("Windows", "PC", "Microsoft");
// but somehow we can define the version number here even we define it in constructor
os1.versionNumber = "Windows 10";
// and to prevent this we can use getter and setter on line 60
oses.push(os1);
const os2 = new Os("MacOS", "Macbook", "Apple");
oses.push(os2);
const os3 = new Os("Linux", "PC", "Linux Foundation");
oses.push(os3);
for (const os of oses) {
    os.info();
}
console.log(oses);
// console.log(typeof Os); its still function

// getter and setter
class Console {
    constructor(name, manufacture) {
        this.name = name;
        this.manufacture = manufacture;
        this._versionNumber = `${this.manufacture}-${Math.floor(Math.random() * 1000) + 1}`
    }
    get versionNumber() {
        return this._versionNumber;
    }
    set versionNumber(versionNumber) {
        console.log(`trying to set version number to ${versionNumber}`);
    }
}
const console1 = new Console("Playstation", "Sony");
console.log(console1.versionNumber);
console1.versionNumber = "Playstation 5-001";
// somewho its work
console.log(console1.versionNumber);
const console2 = new Console("Xbox", "Microsoft");
