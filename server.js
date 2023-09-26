//require() is importing express from node modules
const express = require('express');
// express is a Fn that creates server when called
const server = express();

const PORT = 8888;


server.get('/', (request, response)=>{
    response.send("Hello World, This is my first API in NODE");
});



server.get('/sum',handleSumRequest);

function handleSumRequest(request, response) {
    const number =Number(request.query.number);
    response.send(`${sum(number)}`);
}


function sum(number) {
    if (number == 0) return 0;

    return number + sum(number-1);
}



server.listen(PORT);