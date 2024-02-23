const fs = require('fs').promises;

//function for reading file
async function readFromFile(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    throw new Error(`Error reading from file: ${error.message}`);
  }
}

//function to write file
async function writeToFile(filePath, data) {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    await fs.writeFile(filePath, jsonData);
  } catch (error) {
    throw new Error(`Error writing to file: ${error.message}`);
  }
}

//function to delete file
async function deleteFile(filePath) {
  try {
    await fs.unlink(filePath);
  } catch (error) {
    throw new Error(`Error deleting file: ${error.message}`);
  }
}


module.exports = { readFromFile, writeToFile, deleteFile }
