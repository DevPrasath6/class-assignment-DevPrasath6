// Core Modules - http, fs, path, os

const http = require('http');

// HTTP Module
const server = http.createServer((request, response) => {
    console.log('Server is Created');
    response.write("HTTP server is created");
    response.end();
    }
);

server.listen("3000");
