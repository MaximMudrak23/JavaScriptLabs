const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
    const queryObject = url.parse(request.url, true).query;

    if (queryObject.name) {
        response.writeHead(200);
        response.end(`Hello ${queryObject.name}`);
    } else {
        response.writeHead(400);
        response.end('You should provide name parameter');
    }
});

const host = 'localhost';
const port = 8000;

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});