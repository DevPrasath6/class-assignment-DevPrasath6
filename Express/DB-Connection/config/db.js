const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI);

let db;
const connectDB = async () => {
    try {
        const connection = await client.connect();
        db = connection.db(process.env.DB_NAME);
        console.log("Connected to database");
    } catch (error) {
        console.log("DB Connection Failed");
    }
};

const getDB = () => db;
module.exports = { connectDB, getDB };
