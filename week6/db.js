const { MongoClient } = require('mongodb');
require("dotenv").config();
const uri = "mongodb+srv://yanhengjiang123:ObMwS3jhZ4gzx04R@cluster0.7ciig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(url);

module.exports = {
    connect: async function () {
        await client.connect();
    },
    addToDB: async function (doc) {
        try {
            const result = await client.db("cs5610").collection("tasks").insertOne(doc);
        } catch (err) {
            console.error("Failed to write to database");
        }
    },
};