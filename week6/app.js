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


