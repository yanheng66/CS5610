// db.js
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

const uri = "mongodb+srv://yanhengjiang123:ObMwS3jhZ4gzx04R@cluster0.7ciig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

module.exports = {
    // Connect to MongoDB
    connect: async function () {
        await client.connect();
        console.log("Connected to MongoDB");
    },

    // Insert a new document into the "tasks" collection
    addToDB: async function (doc) {
        try {
            await client.db("cs5610").collection("tasks").insertOne(doc);
        } catch (err) {
            console.error("Failed to write to database");
            throw err;
        }
    },

    // Read all documents using Collection.find()
    getAllTasks: async function () {
        try {
            const cursor = client.db("cs5610").collection("tasks").find();
            return cursor.toArray(); // Convert the cursor to an array
        } catch (err) {
            console.error("Failed to read tasks from database");
            throw err;
        }
    },

    // Read a single document using Collection.findOne()
    getTaskById: async function (taskId) {
        try {
            const _id = new ObjectId(taskId);
            return client.db("cs5610").collection("tasks").findOne({ _id });
        } catch (err) {
            console.error("Failed to read task from database");
            throw err;
        }
    },
};