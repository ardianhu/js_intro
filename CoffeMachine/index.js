// const {coffeStock, isCoffeeMachineReady} = require('./state.js'); this is the commonJS way
// import coffeStock from './state.js' wirth require() ans state.js as parameter.
// coffeStock have a value from module.exports in state.js.
// and here is the es6 modules, and here the variable can be anything.
import {coffeStock as stock, isCoffeeMachineReady, coffeStock} from "./state.js";
// as to change the variable name
console.log(stock);

const makeCoffe = (type, miligrams) => {
    if (stock[type] >= miligrams) {
        console.log(`Berhasil membuat kopi ${type}`);
    } else {
        console.log(`Biji kopi ${type} tidak cukup!`);
    }
}
console.log(isCoffeeMachineReady);
makeCoffe("arabica", 80);