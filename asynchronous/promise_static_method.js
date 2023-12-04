// promise has some static methods that we can use in some kind of cases.
// 1. Promise.all
// to execute multiple promises at the same time. parallel.
// this methods accept an array of promises as a parameter.
// example:
const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise1point2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('promise dihentikan dan tidka mereturn apapun')), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1, promise1point2, promise2, promise3]).then((values) => console.log(values)).catch((error) => console.log(error.message));
// and if one of the promises is rejected, then the Promise.all will be rejected too.

// 2. Promise.race
// like promise.all, but this method will only return the first promise that finished.
// like its name. it's racing my briend.
Promise.race([promise1, promise2, promise3]).then((value) => console.log('promise yang selesai duluan adalah: ' + value));

// 3. Promise.allSettled
// just like Promise.all, but its return all kind of resut from promises in an array form of object.
// something like this:
// {
//     status: 'fulfilled' | 'rejected',
//     value: 'value of the Promise',
//     reason: 'error of the Promise',
// }
// example:
Promise.allSettled([promise1, promise1point2, promise2, promise3]).then((result) => console.log(result));

// 4. Promise.any
// just like Promise.all, but its return the first promise that fulfilled.
// and if all of the promises is rejected, then it will return an error 'All promises were rejected'.
// fulfilled sample
const promiseResolve1 = new Promise((resolve, reject) => setTimeout(() => resolve("1"), 1000));
const promiseResolve2 = new Promise((resolve, reject) => setTimeout(() => resolve("2"), 2000));
const promiseResolve3 = new Promise((resolve, reject) => setTimeout(() => resolve("3"), 3000));

Promise.any([promiseResolve1, promiseResolve2, promiseResolve3])
 .then((value) => console.log(value)) // 1
 .catch((error) => console.log(error.message));

// rejected sample
const promiseReject1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('1')), 1000));
const promiseReject2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('2')), 2000));
const promiseReject3 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("3")), 3000));

Promise.any([promiseReject1, promiseReject2, promiseReject3])
 .then((value) => console.log(value))
 .catch((error) => console.log(error.message)); // All Promises were rejected