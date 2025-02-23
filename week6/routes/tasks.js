const express = require("express");
const router = express.Router();
const axios = require("axios");

// router.get("/", function (req, res) {
//     axios.get("https://jsonplaceholder.typicode.com/todos")
//         .then(function (response) {
//             const tasks = response.data;
//             res.render("tasks", { tasks: tasks });
//         })
//         .catch(function (error) {
//             console.log(error);
//             res.send("An error occurred");
//         });
// });

router.get("/", async function (req, res) {
    await axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(function (response) {
            const tasks = response.data;
            res.render("tasks", { tasks: tasks });
        })
        .catch(function (error) {
            console.log(error);
            res.send("An error occurred");
        });

});


router.get("/:taskId", function (req, res) {
    const taskId = req.params.taskId;
    axios.get(`https://jsonplaceholder.typicode.com/todos/${taskId}`)
        .then(function (response) {
            const task = response.data;
            res.render("task", { id: task.id, title: task.title, completed: task.completed });
        })
        .catch(function (error) {
            console.log(error);
            res.send("An error occurred while fetching task details.");
        });
});

module.exports = router;