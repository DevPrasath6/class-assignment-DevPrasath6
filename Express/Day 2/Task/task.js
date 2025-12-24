const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 7000;

app.use(express.json());

const items = [
    { id: 1, name: "Notebook", price: 100 },
    { id: 2, name: "Eraser", price: 20 },
    { id: 3, name: "Marker", price: 50 },
];

// Create
app.post('/add-items', (req, res) => {
    console.log(req.body);
    const newId = items.length > 0 ? items[items.length - 1].id + 1 : 1;

    items.push({
        id: newId,
        name: req.body.name,
        price: req.body.price
    });

    fs.writeFile('items.json', JSON.stringify(items, null, 2), (err) => {
        if (err) {
            console.error('Error writing to file', err);
            res.status(500).send("Internal Server Error");
        }
        else {
            res.status(201).send(items);
        }
    });
});

// Read
app.get('/items', (req, res) => {
    fs.readFile('items.json', 'utf8', (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.status(200).send(items);
            } else {
                console.error('Error reading file', err);
                res.status(500).send("Internal Server Error");
            }
        }
        else {
            const itemsFromFile = JSON.parse(data);
            res.status(200).send(itemsFromFile);
        }
    });
});

// Update
app.put('/edit-item/', (req, res) => {
    const { id, name, price } = req.body;
    let idFound = false;
    items.forEach((item) => {
        if(item.id == id){
            item.name = name;
            item.price = price;
            idFound = true;
        }
    });

    if(idFound){
        fs.writeFile('items.json', JSON.stringify(items, null, 2), (err) => {
            if (err) {
                console.error('Error writing to file', err);
                res.status(500).send("Internal Server Error");
            }
            else {
                res.status(200).send(items);
            }
        });
    }
    else{
        res.status(404).send("Item Not Found");
    }
});

// Delete
app.delete("/item/:id", (req, res) => {
    const id = req.params.id;
    const itemIndex = items.findIndex((item) => item.id == id);
    if(itemIndex != -1){
        items.splice(itemIndex, 1);

        fs.writeFile('items.json', JSON.stringify(items, null, 2), (err) => {
            if (err) {
                console.error('Error writing to file', err);
                res.status(500).send("Internal Server Error");
            }
            else {
                res.status(200).send("Item Deleted Successfully");
            }
        });
    }
    else{
        res.status(404).send("Item Not Found");
    }
});

app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
});
