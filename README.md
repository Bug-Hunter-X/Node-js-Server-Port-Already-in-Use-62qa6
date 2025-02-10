# Node.js Server Port Already in Use

This repository demonstrates a common error in Node.js when attempting to start a server on a port that's already in use.  The `bug.js` file contains code that will throw an error if port 8080 is unavailable. The `bugSolution.js` file provides a solution to handle this error gracefully.

## Bug
The `bug.js` file uses the `http.createServer` method to create a simple HTTP server.  It then attempts to listen on port 8080. If another application is already using this port, the server will fail to start and an error will be thrown.

## Solution
The `bugSolution.js` file demonstrates how to handle the error using the `'error'` event listener. This approach allows the server to gracefully handle the port-in-use error without crashing.

## How to Reproduce
1. Clone the repository.
2. Run `node bug.js`.  If port 8080 is free, the server will start. If not, an error will occur.
3. Run `node bugSolution.js`. This version will handle the error gracefully and print a message to the console.