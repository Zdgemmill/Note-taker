const express = require('express');
const router = require('express').Router();
const { readFromFile, writeToFile, deleteFile } = require("../helpers/util");
const { v4: uuidv4 } = require("uuid");


// GET Route for retrieving all the notes
router.get("/", async (req, res) => {
  try {
    //data is the contents from db json
    const data = await readFromFile("./db/db.json");
    //console logging data to check response 
    console.log("Data from file:", data);

    //returns data
    res.json(data);
    //error handeling
  } catch (error) {
    console.error("Error reading from file:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//route for posting and adding new note to db.json
router.post("/", async (req, res) => {
  //creating new note from req.body
  try {
    const { title, text } = req.body;
    const newNote = { title, text, id: uuidv4(), };

    // Append the new note to the file
    await writeToFile("./db/db.json", newNote);

    res.status(201).json({ message: "Note added successfully" });
  } catch (error) {
    console.error("Error adding note:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});




module.exports = router;
