// response header is a header that contains information about the response from the server to the client.
// its to tell that the content is html, json, etc.
// its usually like this:
// const requestListener = (request, response) => {
//     response.setHeader('Content-Type', 'text/html');
//     // or
//     response.setHeader('X-Powered-By', 'NodeJS');
//     response.statusCode = 200;
//     // response.statusMessage = 'S
//     response.end('<h1>Hello, World!</h1>');
// };
// ex: if the content is in html format, and we use json format, the browser will not understand it. it will be rendered as a plain text.