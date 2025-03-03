const db = require("./db.js");
console.log(db);
require("dotenv").config();
console.log(process.env);

// Use writefile(File Write) to write a text to a file
const fs = require('fs');
fs.writeFile('data.txt', "this is a message", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');

    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
});

const logger = require('./logger.js'); // Importing logger from the same directory
logger.log(); // Demonstration: prints a message from logger.js to console

// Import express(Express) and initialize an app instance
const express = require('express');
const app = express();

// Set view engine(View Engine) to pug(Pug) and views directory(Views Directory)
app.set("view engine", "pug");
app.set("views", "./views");

// Make the 'public' directory a static(Static) resource
app.use(express.static('public'));

// Import the router(Router) from ./routes/tasks
const tasksRouter = require("./routes/tasks");
app.use("/tasks", tasksRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root route(Route)
app.get('/', function (req, res) {
    res.send('Hello World!');
});

// Listen on port(Port)
const port = 3000;
app.listen(port, async function () {
    console.log(`Server running at http://localhost:${port}`);
    await db.connect();
    console.log("Connected to the database...");
});