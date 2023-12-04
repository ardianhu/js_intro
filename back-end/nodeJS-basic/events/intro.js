// node js is known fo its event-driven programming,
// traditionally, programming is a sequential process, where the program will execute the code line by line.
// and what if we want to execute a code when a certain event is triggered? so this event driven is an answer.
// node js provide EvenEmitter class, a member of events core module.
const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

// a function to be executed when coffe-order event is triggered
// const makeCoffee = ({name}) => {
//     console.log(`Kopi ${name} telah dibuat:`);
// }

// const makeBill = ({price}) => {
//     console.log(`Bill sebesar ${price} telah dibuat`);
// }
const makeCoffee = (name) => {
    console.log(`Kopi ${name} telah dibuat:`);
}

const makeBill = (price) => {
    console.log(`Bill sebesar ${price} telah dibuat`);
}
// assign the makeCoffee function to event listener coffe-order event
// this is to create an event called coffee-order
// myEventEmitter.on('coffee-order', makeCoffee);
// myEventEmitter.on('coffee-order', makeBill);

// or we can make something like this:

const onCoffeeOrderedListener = ({name, price}) => {
    makeCoffee(name);
    makeBill(price);
}
myEventEmitter.on('coffee-order', onCoffeeOrderedListener);

// trigger the coffe-order event
myEventEmitter.emit('coffee-order', {name: 'Tubruk', price: 15000});
// the first param is the event, and the remain param is the data that we want to pass to the event listener.