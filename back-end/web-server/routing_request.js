// when we handle the request it's not just the methods, we can also get the request path or url. like web.com and web.com/about, it should response a different response.
// we can use something like this:
// const requestListener = (request, response) => {
//     const { url } = request;
 
//     if(url === '/') {
//         // curl http://localhost:5000/
//     }
 
//     if(url === '/about') {
//         // curl http://localhost:5000/about
//     }
 
//     // curl http://localhost:5000/<any>
// };

// or even combine with the method like this:

// const requestListener = (request, response) => {
//     const { url, method } = request;
 
//     if(url === '/') {
 
//         if(method === 'GET') {
//             // curl -X GET http://localhost:5000/
//         }
 
//         // curl -X <any> http://localhost:5000/
//     }
 
//     if(url === '/about') {
 
//         if(method === 'GET') {
//             // curl -X GET http://localhost:5000/about
//         }
 
//         if(method === 'POST') {
//             // curl -X POST http://localhost:5000/about
//         }
 
//         // curl -X <any> http://localhost:5000/about
//     }
 
//     // curl -X <any> http://localhost:5000/<any>
// };

// so let's get into the challenge

// we are gonna make a web server that can handle request with the following conditions:

// URL: ‘/’
// Method: GET
// Mengembalikan “Ini adalah homepage”.
// Method: <any> (selain GET)
// Mengembalikan “Halaman tidak dapat diakses dengan <any> request”.
// URL: ‘/about’
// Method: GET
// Mengembalikan “Halo! Ini adalah halaman about”.
// Method: POST (dengan melampirkan data name pada body)
// Mengembalikan “Halo, <name>! Ini adalah halaman about”.
// Method: <any> (selain GET dan POST)
// Mengembalikan “Halaman tidak dapat diakses dengan <any> request”.
// URL: <any> (selain / dan /about)
// Method: <any>
// Mengembalikan “Halaman tidak ditemukan!”.

const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
    const url = request.url;

    const {method} = request;

    if(url === '/') {
        if(method === 'GET') {
            response.end('<h1>Ini adalah homepage</h1>');
        }
        else {
            response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
        }
    }
    else if(url === '/about') {
        if(method === 'GET') {
            response.end('<h1>Halo! Ini adalah halaman about</h1>');
        }
        else if(method === 'POST') {
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.on('end', () => {
                body = Buffer.concat(body).toString();

                const {name} = JSON.parse(body);
                response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
            });
        }
        else {
            response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
        }
    }
    else {
        response.end('<h1>Halaman tidak ditemukan!</h1>');
    }

}

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});

// HERE WE GO

// we can try with this command:

// curl -X GET http://localhost:5000/about
// output: <h1>Halo! Ini adalah halaman about</h1>
// curl -X POST -H "Content-Type: application/json" http://localhost:5000/about -d "{\"name\": \"Dicoding\"}"
// output: <h1>Halo, Dicoding! Ini adalah halaman about</h1>
// curl -X PUT http://localhost:5000/about
// output: <h1>Halaman tidak dapat diakses menggunakan PUT request</h1>
// curl -X DELETE http://localhost:5000/about
// output: <h1>Halaman tidak dapat diakses menggunakan DELETE request</h1>

