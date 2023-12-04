// console.log('di sini kita akan membuat server');
// first we need to import the core module 'http'
const http = require('http');
/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 * 
 * @param request: objek yang berisikan informasi terkait permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
 */

// const requestListener = (request, response) => {
//     response.setHeader('Content-Type', 'text/html');

//     response.statusCode = 200;
//     response.end('<h1>Hello, ini adalah web server!</h1>');
// };

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});
// we can access this server via 'curl -X GET http://localhost:5000' or 'curl http://localhost:5000'

// in example above the web server we create does not recognize the request path.
// wich means even if we access the server with different method or path, the response will always be the same.
// like POST PUT DELETE, its just the same.
// this is oke, because we dont write the logics to handle the request yet.
// in a request listener there are two parameters, request and response.
// and we can get the request method from request.method.

const requestListener = (request, response) => {
    const method = request.method;
    // or with the more clean way with the object destructuring
    // const { method } = request;

    // and here the logics to handle the request
    if(method === 'GET') {
        response.end('<h1>Hello, ini adalah halaman utama!</h1>');
    }

    if(method === 'POST') {
        response.end('<h1>Hai, ini adalah halaman about!</h1>');
    }
    // we can add another method like PUT and DELETE
}