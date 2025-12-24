const express = require('express');
const { getDB } = require('../config/db');
const { ObjectId } = require('mongodb');

const router = express.Router();

const empCollection = () => getDB().collection('empData');

router.get('/', async(req, res) => {
    // res.send('Welcome to router!');
    try {
        const employees = await empCollection().find({}).toArray();
        res.status(201).send({
            isError: false,
            message: "Employees fetched successfully",
            data: employees
        });
    } catch (error) {
        res.status(500).send({
            isError: true,
            message: "Failed to fetch employees",
            data: null
        });
    }
});

router.post("/add-employee", async(req, res) => {
    try{
        const result = await empCollection().insertOne(req.body);
        res.status(201).send({
            isError: false,
            message: "Employee added successfully",
            data: req.body,
        });
    } catch (error) {
        res.status(500).send({
            isError: true,
            message: "Failed to add employee",
            data: null,
        });
    }
});

router.put("/update-employee/:id", async(req, res) => {
    try{
        const id = req.params.id;
        const result = await empCollection().updateOne({_id : new ObjectId(id)}, { $set: req.body });
        res.status(201).send({
            isError: false,
            message: "Employee updated successfully",
            data: req.body,
        });
    } catch (error) {
        res.status(500).send({
            isError: true,
            message: "Failed to update employee",
            data: null,
        });
    }
});

router.delete("/delete-employee/:id", async(req, res) => {
    try{
        const id = req.params.id;
        const result = await empCollection().deleteOne({_id : new ObjectId(id)});
        res.status(201).send({
            isError: false,
            message: "Employee deleted successfully",
            data: null,
        });
    } catch (error) {
        res.status(500).send({
            isError: true,
            message: "Failed to delete employee",
            data: null,
        });
    }
});

module.exports = router;
