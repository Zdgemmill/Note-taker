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
async function writeToFile(filePath, newData) {
  try {
    // Read existing data from the file
    const existingData = await fs.readFile(filePath, 'utf8');
    const dataArray = JSON.parse(existingData);

    // Push the new data into the array
    dataArray.push(newData);

    // Convert the array back to JSON string with proper formatting
    const updatedData = JSON.stringify(dataArray, null, 2);

    // Write the updated data back to the file
    await fs.writeFile(filePath, updatedData);

    console.log('Data has been successfully written to the file.');
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
