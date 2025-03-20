// app.js
require("dotenv").config(); // Loads environment variables
const fs = require("fs"); // For file reading/writing
const express = require("express"); // Express framework
const logger = require("./logger.js"); // Example logger module
const db = require("./db"); // Database module

const app = express();

// Set the view engine to Pug
app.set("view engine", "pug");
app.set("views", "./views");

// Make 'public' a static directory
app.use(express.static("public"));

// Parse incoming JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Demonstration of logger
logger.log();

// Demonstration of file write and read
fs.writeFile("data.txt", "this is a message", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");

    fs.readFile("data.txt", "utf8", (err, data) => {
        if (err) throw err;
        console.log(data);
    });
});

// Import the tasks router
const tasksRouter = require("./routes/tasks");
app.use("/tasks", tasksRouter);

// Root route
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Start the server and connect to DB
const port = 3000;
app.listen(port, async () => {
    console.log(`Server running at http://localhost:${port}`);
    await db.connect();
    console.log("Connected to the database...");
});