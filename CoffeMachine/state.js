const coffeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}
const isCoffeeMachineReady = true;
// module.exports = coffeStock;
// module.exports = isCoffeeMachineReady; wrong
// module.exports = { coffeStock, isCoffeeMachineReady }; //true, this is the commonJS way.
// but there's es6 modules
export { coffeStock, isCoffeeMachineReady};
// coffeStock here is considered as a part of module.exports;
// console.log(module);