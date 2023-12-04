// js is a programming language that implementing event-driven pattern.
// all kind of process is triggered by event or action. like DOMContentLoaded.
// this means code executed not have to be berurutan. but the code can be executed based on event or even scheduled.
// there's one function in js to schedule calling a function ascyronously. and it's setTimeout.
// this function have 2 arguments. 1. function to be called, 2. time in milisecond.

// setTimeout Function
// example:
console.log('selamat datang!');

setTimeout(() => {
    console.log('Terima kasih sudah mampir, silakan datang kembali!');
}, 3000);

console.log('ada yang bisa dibantu?');
// if we used to be doing synchronous programming, then we will expect the program to run like this:
// selamat datang!, wait 3 seconds, terima kasih sudah mampir, silakan datang kembali!, ada yang bisa dibantu?
// but because setTimeout is asynchronous, then the program will run like this:
// selamat datang!, ada yang bisa dibantu?, wait 3 seconds, terima kasih sudah mampir, silakan datang kembali!
// the console.log after setTimeout will be executed directly, not waiting for setTimeout to finish.
// and the console.log inside setTimeout will be executed after 3 seconds.

// because asynchronous process kinda different with synchronous process, then we need to know how to handle it.
// the first thing about handling asynchronous process is callback.

// Callback
// callback merupakan sebuah fungsi yang disisipkan pada argumen fungsi asynchronous dan akan dipanggil ketika proses dinyatakan selesai.
// fungsi callback akan membawa nilai-nilai yang dihasilkan dari proses asynchronous sehingga kita bisa memanfaatkan nilai tersebut.
// example:
function getUsers(callback) {
    setTimeout(() => {
        const users = ['Jack', 'Jill', 'John'];
        callback(users);
    }, 2000);
}
// anggap getUsers merupakan fungsi asynchronous yang mengambil data pengguna dari internet. setTimeout untuk menyimulaiskan bahwa fungsi berjalan secara asynchronous.
// kita bisa melihat bahwa fungsi tersebut memanggil argumen callback ketika prosessnya selesai dan membawa data users.
// dan untuk memakai fungsi tersebut untuk mendapatkan nilai users:
// getUsers((users) => {
//     console.log(users);
// });

// or with this code: (yang lebih mudah dibaca)
function usersCallback(users) {
    console.log(users);
}
getUsers(usersCallback);

// and this is the complete example:

function getLaptops(isOffline, callback) {
    setTimeout(() => {
        const laptops = ['Thinkpad', 'Macbook', 'Surface'];

        if (isOffline) {
            callback(new Error('Anda sedang offline'), null);
            return;
        }

        callback(null, laptops);
    }, 4000);
}

function laptopsCallback(error, laptops) {
    if (error) {
        console.log('proses gagal: ', error.message);
        return;
    }
    console.log('proses berhasil: ', laptops);
}

getLaptops(false, laptopsCallback);
getLaptops(true, laptopsCallback);
// hope you understand this.

// Callback Hell
// if application get bigger, we will use a lot of asynchronous process.
// and there's a lot of data traffic from various asynchronous process.
// and then a problem will appears as some asynchronous process need to be excecuted after another asynchronous process finished.
// as a beginner we are familiar with operation that waiting for another operation to finish.
// let's have a look at this:
function getUser(id, callback) {
    setTimeout(() => {
      if (!id) {
        callback(new Error("User ID is required"), null);
      }
  
      callback(null, { id, name: 'John Doe', location: "Jakarta" });
    }, 1000);
  }
  
  function getWeather(location, callback) {
    setTimeout(() => {
      if (!location) {
        callback(new Error("Location is required"), null);
      }
  
      callback(null, { weather: "Sunny", temperature: 30 });
    }, 1000);
  }
function getUserWeather(userId) {
    try {
        const user = getUser(userId);
        const weather = getWeather(user.location);
        return {...user, ...weather};
    } catch (error) {
        console.log(error.message);
        return null;
    }
}

const userWeather = getUserWeather(1);
console.log(userWeather);
// take a look at callback.js