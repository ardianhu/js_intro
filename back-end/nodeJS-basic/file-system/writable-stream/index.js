// just like readable stream but this is writable stream
// this is to write or create a file
const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt');
writableStream.write('ini merupakan teks baris pertama!\n');
writableStream.write('ini merupakan teks baris kedua!\n');
// writableStream.end();
// end() can be used the last write
writableStream.end('akhir dari writable stream!');
// the output will be an ouput.txt with a content like above.