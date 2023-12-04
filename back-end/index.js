// js code here
const message = (name) =>{
    console.log(`Hello ${name}`);
}
message('beginner');
// to execute this file, run this command below:
// node index.js
// and in the console will show the result: Hello beginner

// js is a programming langguage, he doesn't know that we are using browser or node.js.
// in browser js can control browser functionality like visis a page, reload, close a tab, and show alert dialog.
// these can be done because browser provide a global object called window.

// and node.js do that too. node.js provide a global object that give more functionality in js.
// ex: with this global object we can read and write a file, read how much cpu the computer use, and many more.
// to show all of global object we can do this in REPL and type: Object.getOwnPropertyNames(global); 
// and it will show us all of 'em;

// Process Object

// one of global object in node.js is process object. in computer science, process is a program that executed with one or more thread.
// you can see that in task manager in windows or activity monitor in mac or system monitor in ubuntu.

// in node.js process object is a global object that provide information about current node.js process.
// one of the most used is process.env. with this property we can store a value or get information about environment that being used in a process.
// ex: process.env has property namely process.env.PWD that provide information where the process is executed. or process.env.USER that have information about username in the computer. you can see more in the documentation.

// you can also manually ctore a value in process.env. and this is useful to determine the code flow like if-else in program based on environment we provide.
// ex: when we want the value of host variable is different when development and in production
// we can create a property in process.env "NODE_ENV", so we can determine a value of host based on condition of NODE_ENV.
// NODE_ENV=production node app.js in terminal
// we can look at the challenge.js for better use of this.

// the other thing is process.memoryUsage()

const memoryInformation = process.memoryUsage();
console.log(memoryInformation);

// the last but not least is prcess.argv, this property can be used  as a command/parameter when we execute a file with node.js.
// example:
const firsName = process.argv[2];
const lastName = process.argv[3];
console.log(`Hello ${firsName} ${lastName}`);
// and lets run 'node index..js "We are" "the world"' in terminal
// and it will return Hello We are the worls