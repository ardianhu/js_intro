const EvenEmitter = require('events'); // TODO 1
 
const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
  }
   
  // TODO 2
  const myEmitter = new EvenEmitter();
   
  // TODO 3
  myEmitter.on('birthday', birthdayEventListener);
   
  // TODO 4
  myEmitter.emit('birthday', 'Dimas');
  
// TODO 1 : Buat atau impor variabel EventEmitter dari core module events.
// TODO 2 : Buat variabel myEmitter yang merupakan instance dari EventEmitter.
// TODO 3 : Tentukan birthdayEventListener sebagai aksi ketika event ‘birthday’ dibangkitkan pada myEmitter.
// TODO 4 : Bangkitkanlah event ‘birthday’ pada myEmitter dengan method emit() dan beri nilai argumen listener dengan nama Anda.

// command to use: node index.js