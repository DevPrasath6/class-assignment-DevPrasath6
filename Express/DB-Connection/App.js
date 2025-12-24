const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const router = require('./Routes/route');
const { connectDB } = require('./config/db');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1", router);


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running on port " + PORT);
    });
});
