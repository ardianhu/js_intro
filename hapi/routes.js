// here we are gonna try to add routing to handle request.
const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = "guest"} = request.params;
            const { lang } = request.query;

            if(lang === 'id') {
                return `Hai, ${name}!`;
            }

            return `Hello, ${name}!`;
        },
        // here we can implement path parameter
        // here we can implement query parameter
        // somehow this doesn't work, i don't know why. solved
        // we need to escape the ? character in the url. curl -X GET http://localhost:5000/hello/ardian\?lang=id
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    }
];

module.exports = routes;

// method: '*' means any method available in http.
// path: '/{any*}' means any path that not defined in routes. or to set a dynamic path.

// what about path parameter?
// we can use this syntax:
// server.route({
//     method: 'GET',
//     path: '/users/{username?}',
//     handler: (request, h) => {
//         const { username = 'stranger' } = request.params;
//         return `Hello, ${username}!`;
//     }
// });

// what about query parameter?
// we can use this syntax:
// server.route({
//     method: 'GET',
//     path: '/',
//     handler: (request, h) => {
//         const { name, location } = request.query;
//         return `Hello, ${name} from ${location}!`;
//     }
// })
// for this query: localhost:5000/?name=John&location=Depok

// what about post request? (Body/Payload Request)
// in a native node.js its a little bit complicated, good news there's Hapi. 
// so we don't have to deal with stream.
// ex:
// server.route({
//     method: 'POST',
//     path: '/login',
//     handler: (request, h) => {
//         const { username, password } = request.payload; // here's the magic happens.
//         return `Welcome ${username}!`;
//     },
// });
// // so the client can send a request with a body like this: { "username": "harrypotter", "password": "encrypted_password" }

// response toolkit
// handler on hapi has two parameters, request and h.
// request parameter is the request object from the client. like path and query parameter, payload, headers, and etc.
// h(hapi initialization) is a response toolkit that has a lot of methods to response a request. this just like response object in native node.js.
// like this case: to create a custom response code.
// handler: (request, h) => {
//     return h.response('created').code(201);
// }
// handler always return a value, if we are using h to handle a request, so return the value with h.response() method.
// h is not only for response code, but also for response header, content type, content lehgth, and etc.

// // Detailed notation
// const handler = (request, h) => {
//     const response = h.response('success');
//     response.type('text/plain');
//     response.header('X-Custom', 'some-value');
//     return response;
// }
// // Chained notation
// const handler = (request, h) => {
//     return h.response('success')
//         .type('text/plain')
//         .header('X-Custom', 'some-value');
// }