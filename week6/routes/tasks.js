const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.send("<h1>List of all the tasks</h1>");
});

router.get("/:taskId", function (req, res) {
    const taskId = req.params.taskId;
    res.render("task", { id: taskId });
});

module.exports = router;