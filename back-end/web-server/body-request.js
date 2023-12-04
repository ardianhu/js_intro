// when we use POST and PUT method, usually these methods have a data that stored in body request. usually its uses JSON.
// http.clientRequest is a readable stream.
// and to get the data from body will be more difficult than the header.
// data in body can be accessed with stream technique. EvenEmitter.
// ex:
// const requestListener = (request, response) => {
//     let body = [];
 
//     request.on('data', (chunk) => {
//         body.push(chunk);
//     });
 
//     request.on('end', () => {
//         body = Buffer.concat(body).toString();
//     });
// };

// body variable is an empty array.

// when there's a data event, we will fill the body array with the data chunk.

// the last thing, when the stream end, and 'end' is triggered, here we are gonna change the body variable to a string.

// a little bit complicated.

// ex:

const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    const {method} = request;
    if(method === 'GET') {
        response.end('<h1>Hello!</h1>');
    }
    // here we are gonna get the body data
    if(method === 'POST') {
        let body = [];

        request.on('data', (chunk) => {
            body.push(chunk);
        });

        request.on('end', () => {
            body = Buffer.concat(body).toString();
            // now body have an object data

            // and here we are gonna parese the object
            const {name} = JSON.parse(body);
            response.end(`<h1>Hai, ${name}!</h1>`);
        });
    }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});