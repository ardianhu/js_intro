// just like what i said, response is part of a stream.
// respond body is used to write the body of the response.
// we can type like this:
// const requestListener = (request, response) => {
//     response.write('<html>');
//     response.write('<body>');
//     response.write('<h1>Hello, World!</h1>');
//     response.write('</body>');
//     response.write('</html>');
//     response.end();
// }
// or
// const requestListener = (request, response) => {
//     response.end('<html><body><h1>Hello, World!</h1></body></html>');
// }
// end() is used to end the response process. or write the last process of the response.

// lets get into the challenge:

const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS');

    const { method, url} = request;

    if(url === '/') {
        if(method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Ini adalah homepage',
            }));
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses dengan ${method} request`,
            }));
        }
    } else if(url === '/about') {
        if(method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Halo! Ini adalah halaman about',
            }));
        } else if(method === 'POST') {
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.statusCode = 200;
                response.end(JSON.stringify({
                    message: `Halo, ${name}! Ini adalah halaman about`,
                }));
            })
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses menggunakan ${method}, request`,
            }));
        }
    } else {
        response.statusCode = 404;
        response.end(JSON.stringify({
            message: 'Halaman tidak ditemukan!',
        }));
    }
}

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});

// here we are completed the lesson about web server.
// do we can build a real web server with this? yes we can. but its not recommended. we can use a web framework like express.js and hapi.
// see u in the next lesson.
// in the dicoding/hapi.