// use writefile to write a text to a file
const fs = require('fs')
fs.writeFile('data.txt', "this is a message", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');

    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
})

const logger = require('./logger.js') // this will not work because logger.js is not in the same directory as app.js

logger.log() // this will not work because logger.js is not in the same directory as app.js