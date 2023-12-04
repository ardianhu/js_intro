// any file in a computer is managed and accessed with filesystem. while executing js in a browser it's important to limit the access to filesystem. this technique is called sandboxing. that protect our program from evil program and unethical perform.
// and how about js in backend, sure there's limitation too. but it's not that limited like in browser. in fact filesystem is one of the essential thing because in back-end terms we are gonna need to access or read a file in the computer.
// in js there's a core module called fs that provide functionality to access filesystem. and it can be asynchronus(default) or synchronus.
// ex:

const fs = require('fs');

const fileReadCallback = (error, data) => {
    if (error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
}
fs.readFile('todo.txt', 'UTF-8', fileReadCallback);

