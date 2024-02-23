const express = require('express');
const router = require('express').Router();
const { readFromFile, writeToFile, deleteFile } = require("../helpers/util");


// GET Route for retrieving all the notes
router.get("/", async (req, res) => {
  try {
    const data = await readFromFile("./db/db.json");
    console.log("Data from file:", data); // Log the data to inspect its format
    res.json(data); // Send the data directly without parsing
  } catch (error) {
    console.error("Error reading from file:", error); // Log the error for debugging
    res.status(500).json({ error: "Internal Server Error" }); // Send an error response
  }
});

module.exports = router;
