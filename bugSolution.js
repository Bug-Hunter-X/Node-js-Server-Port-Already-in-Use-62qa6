const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

//Use the 'error' event to handle the error gracefully
server.on('error', err => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port 8080 is already in use. Please choose a different port.`);
        process.exit(1);
    }
});

server.listen(8080); 
console.log('Server running on port 8080');