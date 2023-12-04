const coffee = require('./coffee.js');
const { firstName, lastName } = require('./lib/user.js');
// this is how we import the module from coffee.js
// so we have an access to anything we export from coffee.js

// node.js also provide built in module to support efficiency to do a general things.
// this also called core modules. and we can also imported it with the same way as local module. yeap with require().
// like this:
const http = require('http');
// thats it

console.log(coffee);

// and we can import and export using object literal and object destructuring to share more thant one value.
// lets try in the user.js in lib directory

console.log(firstName + ' ' + lastName);

// there are 3 kind of modules, we already know the 2 of 'em:
// - local module: module that we create in our project.
// - core module: built in module in lib directory where the node.js is installed, usually in our symtem directory.
// - third party module: module that we install from npm. if its installed locally, it will be in node_modules directory. if its installed globally, it will be in node.js directory.

// more on this in the npm index.js in node-package-manager directory.