// as more complex a program, the code will be more complex too.
// if code is written in one file, it will be hard to read and maintain.
// so ideally, a file only have one responsibility. if more than that then we need something calle modularization.

// Modularization in programming is a technique to divide a program into several files but still related to each other so can make a program more complete and complex.
// this splitting will make js code easier to read, organize, and maintain.
// in node.js every js file is a module, and we can share the value of vaiable, object, class, and anything cross-modoule.
// to achieve that we need to export the value that we want to share and import it in other module.
// we can use module.exports like this below:

const coffee = {
    name: 'Tubruk',
    price: 15000,
}

module.exports = coffee;
// and lets import this in app.js