// in a previous lesson, we learned how to read a file using the fs module, and it works to read the file from the start to the end of file.
// which mean, if the file was large enough, it will take a long time to read it and take a huge memory consumption.
// the solution is using stream technique.
// this technique is a fundamental in node.js. it's a technique to read a file, network communicataion, etc.
// in this lesson we will learn how to read a file using stream.
// still using fs.
// ex:
const fs = require('fs');

const readableStream = fs.createReadStream('./article.txt', {
    highWaterMark: 10
});

readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch (error) {
        // catch the error when the chunk cannot be read.
    }
});

readableStream.on('end', () => {
    console.log('Done');
})

// createReadStream() menerima dua argumen, yang pertama lokasi file, dan yang kedua adalah objek konfigurasi.
// in the configuration object, we can set the the buffer size with highWaterMark property.
// the default value is 16kb. but because the file we want to open is small, we set it to 10 bytes.
// which means the file will be read in every 10 character (1 character = 1 byte).

// createReadStream() return EventEmitter, where we can set listener function in every readable event is triggered.
// this readable even will be triggered wehn the buffer have a suitable value with a value that being set in highWaterMark.
// which mean the buffer is ready to be read. and then the end event will be triggered after stream process is done.

// lets create an article.txt