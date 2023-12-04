// apperently js has built in classes. like Date, Object, Array, Math, and String.
const date = new Date();

const timeInJakarta = date.toLocaleDateString('id-ID', {
    timeZone: 'Asia/Jakarta',
});
console.log(timeInJakarta);
// another example in Array class.
const arrayClass = new Array('a', 'b', 'c');
console.log(arrayClass);
// if we look at the console, there's no different to a regular array or literal array [] at this point.
// lets look at this more complex case so we will catch the different point.
class UniqueArray extends Array {
    constructor(...args) {
        const uniqueValue = args.filter((item, index) => args.indexOf(item) === index);
        super(...uniqueValue)
    }
    push(item) {
        if (!this.includes(item)) {
            super.push(item);
        }
    }
}
const someArray = new UniqueArray(1, 1, 2, 3, 4, 4, 5);
console.log(someArray);