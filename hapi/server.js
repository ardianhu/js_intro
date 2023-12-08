// console.log('here we are gonna learn about web server using hapi');
// here we are gonna install hapi first with 'npm install @hapi/hapi';
// and then call it:
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

// then we are gonna create a server, but its slightly different with the previous one. this gonna use hapi template.

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init();

// we build an HTTP server in Hapi.server(), this method one parameter, and its an abject that we're gonna use as a server option. like port and host.

// server.start() is asynchronous function, so we need to use await. this function will return a promise that resolves into a server object. and to start a server that we've created.

// and we can see the information about the server by using server.info.uri.

// and let se what happen if we access this server with this code:
// curl -X GET http://localhost:5000

// it will show like this
// {"statusCode":404,"error":"Not Found","message":"Not Found"}

// but its fine for now, because hapi as a default return a 404 response if there's no request handler that handle the request.
// and this the best than just ignore it.

// or we can add this code to init function:

// server.route({
//     method: 'GET',
//     path: '/',
//     handler: (request, h) => {
//         return 'Hello Wrorld!';
//     },
// });

// or with this if there's more than one route:
// with an array, and say goodbye to if else statement.

// server.route([
//     {
//         method: 'GET',
//         path: '/',
//         handler: (request, h) => {
//             return 'Homepage';
//         },
//     },
//     {
//         method: 'GET',
//         path: '/about',
//         handler: (request, h) => {
//             return 'About page';
//         },
//     }
// ]);


// but we better write this router in another file, so one js file for one responsibility.
// and we will add route in routes.js
// and imported in this file.

// we will add route in routes.js with this condition

// URL: ‘/’
// Method: GET
// Mengembalikan pesan “Homepage”.
// Method: <any> (selain method GET)
// Mengembalikan pesan “Halaman tidak dapat diakses dengan method tersebut”.
// URL: ‘/about’
// Method: GET
// Mengembalikan pesan “About page”.
// Method: <any> (selain method GET)
// Mengembalikan pesan “Halaman tidak dapat diakses dengan method tersebut”.
// URL: <any> (selain “/’ dan “/about”)
// Method: <any>
// Mengembalikan pesan “Halaman tidak ditemukan”.