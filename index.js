// console.log("First JS script");
// import {sum,multiply,divide,subtract} from './math.js';

// console.log("Sum of 5 and 3 is: " + sum(5,3));
// console.log("Product of 5 and 3 is: " + multiply(5,3));
// console.log("Division of 6 by 3 is: " + divide(6,3));
// console.log("Subtraction of 3 from 5 is: " + subtract(5,3));

// const fs = require('fs');

// const data = fs.readFileSync('data.txt', 'utf8');
// const data = fs.readFile('data.json', 'utf8', (err, data) => {
//     if(err){
//         console.error(err);
//     }
//     else{
//         console.log(data);
//     }
// });
// console.log("Task Completed");

// const http = require('http');

// const server = http.createServer((req,res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello, World!\n');
// });

// const PORT = 3030;
// server.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}/`);
// });

const http = require('http');

const server = http.createServer((req, res) => {    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');   
});

const  port = 3000;
server.listen(port, () => {    
    console.log(`Server running at http://localhost:${port}/`); 
});