// promise is designed to be executed consecutively/chained or 'berurutan'.
// so if we have two promises, we can execute them consecutively atau beruntun.
// let take a real life example:
// if we're gonna watch a movie in cinema. we need  a multiple process to do so we can watch a movie.
// first we need a function so called withDrawMoney. this function will withdraw money to buy a ticket/ menarik uang.
// and this function will return a promise. wether fullfilled if the user has any money or rejected if the user doesn't have money.
// the next process is buyCinemaTicekt(). this function will receive the amount of money from withDrawMoney() function.
// if the amount of money is't enough to buy a ticket it will rejected, and if it's enough it will fulfilled and return something like 'ticket-0028'.
// and the last process is goInsideCinema(). this function will receive the ticket from buyCinemaTicket() function.
// if there's a ticket it will be resolved "enjoy the movie", but if there's not, it will be rejected "you can't go inside".
// and this is the code:
function withDrawMoney(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (amount > 100) {
                reject(new Error('Maaf, saldo anda tidak cukup'));
            }
            resolve(amount);
        }, 1000);
    })
}
function buyCinemaTicket(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money < 10) {
                reject(new Error('Uang tidak cukup'));
            }
            resolve('ticket-1');
        }, 1000);
    })
}
function goInsideCinema(ticket) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!ticket) {
                reject(new Error('Tiket tidak ada'));
            }
            resolve('Selamat menonton');
        }, 1000);
    })
}

function watchMovie() {
    withDrawMoney(10)
    .then((money) => {
        return buyCinemaTicket(money);
    })
    .then((ticket) => {
        return goInsideCinema(ticket);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error.message);
    });
}

watchMovie();
// export to async_await.js
export {withDrawMoney, buyCinemaTicket, goInsideCinema};