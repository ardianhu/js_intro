// in ES6 callbac isn't the only one to handle asynchronous process.
// there's a new feature called Promise. JANJI.
// just like its name, Promise is a feature to make a promise.
// the result of a promise cannot be known right away, but it will be known in the future. as a real promise
// we need to wait, and it will be either fulfilled(menepati janji) or rejected(ingkar janji).
// the process is pending - fulfilled - rejected.
// this is the example:
function getUsers(isOffline) {
    // return a promise object
    return new Promise((resolve, reject) => {
        // simulate network delay
        setTimeout(() => {
            const users = ['Jack', 'Jill', 'John'];

            if(isOffline) {
                reject(new Error('Anda sedang offline!'));
                return;
            }

            resolve(users);
        }, 2000);
    })
}
getUsers(true).then(users => console.log(users)).catch(err => console.log(err.message));