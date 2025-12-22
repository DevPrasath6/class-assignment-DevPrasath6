const express = require("express")

const app = express();
const port = 3000;

const items = [
    { id: 1, name: "Pen", price: 100 },
    { id: 2, name: "Pencil", price: 50 },
]

// Route to get item by id

app.get("/api/item/:id", (req, res) => {
    const id = req.params.id;
    // console.log(id, "id");
    const item = items.find((item) => (item.id == id));
    res.send(item);
});

// Middleware to parse JSON bodies

// 1.Application-level Middleware
app.use((req, res, next) => {
    console.log("This is a middleware function");
    // res.send("Hello");
    req.currentTime = new Date();
    next();
});

app.get("/", (req, res) => {
    res.send("Welcome to the Express App!");
});

app.get("/api/data", (req, res) => {
    console.log(req.currentTime);
    res.send({item:1,name:"Sample Item"});
});

app.listen(port, () => {
    console.log("Server is listening on", port);
});
