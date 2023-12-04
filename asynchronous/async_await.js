// so in the previous modul we use promise and callback.
// but there's a better way to handle asynchronous process.
// handling asynchronous process just like synchronous process.
// its called async/await. we don't have to use .then() and .catch() anymore.
// here wa are gonna use the cinema function in chained_promise.js
import { withDrawMoney, buyCinemaTicket, goInsideCinema } from './chained_promise.js';
async function watchMovie() {
    try {
        const money = await withDrawMoney(10);
        const ticket = await buyCinemaTicket(money);
        const result = await goInsideCinema(ticket);

        // console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}
watchMovie();
// because async is return a promise we can use .then() and .catch() to handle the result.
watchMovie().then(() => console.log('done'));

// pros of using async and await:
// 1. easier to read: its just like synchronous process.
// 2. no callback. though we can use callback in async function.
// 3. easier to debug. because we can use try, catch, and throw.