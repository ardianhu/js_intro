/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

// Teks yang dibaca oleh readable stream memiliki ukuran 15 karakter tiap bagiannya. Tentukan nilai highWaterMark-nya.
// Tulis ulang teks dengan menggunakan teknik writable stream pada berkas output.txt. Untuk tiap bagian teks yang dibaca melalui readable stream, pisahkan dengan baris baru (‘\n’).

const fs = require('fs');

const readableStream = fs.createReadStream('input.txt', {
    highWaterMark: 15
});

const writableStream = fs.createWriteStream('output.txt');

readableStream.on('readable', () => {
    try {
        writableStream.write(`${readableStream.read()}\n`);
        // process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        //
    }
    // the result of this readable will be write in writeableStream.
});

readableStream.on('end', () => {
    console.log('Done');
});

// tips: we can use this method from core module 'path' to set the complete address of the file
// path.resolve(__dirname, 'notes.txt');