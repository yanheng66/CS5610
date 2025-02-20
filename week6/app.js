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


// const express = require('express')
// const app = express()


// app.get('/', function (req, res) {
//     res.send('Hello World!')
// });

// app.get('/tasks', function (req, res) {
//     res.send('<h1>List of all the tasks</h1>');
// });

// app.get('/tasks', function (req, res) {
//     res.send('<h1>List of all the tasks</h1>');
// });


// app.get('/tasks/:taskId', function (req, res) {
//     const taskId = req.params.taskId;
//     res.send(`<h1>List of all the tasks ${taskId}</h1>`);
// });


// app.use(express.static('public'));

// const port = 3000;

// app.listen(port, function () {
//     console.log(`Example app listening on port ${port}!`)
// });



const express = require("express");
const app = express();
app.use(express.static('public'));



const tasksRouter = require("./routes/tasks");

app.use("/tasks", tasksRouter);

const port = 3000;

app.listen(port, function () {
    console.log(`Server running at http://localhost:${port}`);
});

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.set("view engine", "pug");
app.set("views", "./views");