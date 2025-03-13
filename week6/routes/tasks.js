// routes/tasks.js
const express = require("express");
const router = express.Router();

// Import database functions
const { addToDB, getAllTasks, getTaskById } = require("../db");

// POST route to create a new task
router.post("/", async (req, res) => {
    try {
        console.log("req.body", req.body);

        // Build a new task object
        const newTask = {
            title: req.body.title,
            completed: req.body.completed === "on",
            createdAt: new Date(),
        };

        // Add the new task to the database
        await addToDB(newTask);

        // Redirect to tasks list
        res.redirect("/tasks");
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// GET all tasks (replaces external API call with DB query)
router.get("/", async (req, res) => {
    try {
        const tasks = await getAllTasks();
        res.render("tasks", { tasks });
    } catch (err) {
        console.error(err);
        res.status(500).send("An error occurred while retrieving tasks");
    }
});

// GET form to create a new task
router.get("/newtask", (req, res) => {
    res.render("taskForm");
});

// GET a single task by ID
router.get("/:taskId", async (req, res) => {
    try {
        const taskId = req.params.taskId;
        const task = await getTaskById(taskId);

        if (!task) {
            return res.status(404).send("Task not found");
        }

        res.render("task", { task });
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while fetching task details.");
    }
});

module.exports = router;