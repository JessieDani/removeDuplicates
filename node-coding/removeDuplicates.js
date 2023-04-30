const fs = require('fs').promises;

async function main() {
  try {
    // 1. Read and parse the 'mock_application.json' file into a JavaScript object
    const jsonString = await fs.readFile('./mock_application.json', 'utf-8');
    const mock_application = JSON.parse(jsonString);

    function removeDuplicates(json) {
      let result = { ...json };
      let valuesSeen = new Set();

      // 2. Iterate/loop through the key-value pairs in the input JSON object
      for (let key in result) {
        let value = result[key];

        // 3. Remove duplicate values based on the 'valuesSeen' Set
        if (valuesSeen.has(value)) {
          delete result[key];
        } else {
          valuesSeen.add(value);
        }
      }

      return result;
    }

    // 4. Get the cleaned JSON object and write it to a file
    const cleanedJson = removeDuplicates(mock_application);
    await fs.writeFile('clean_application.json', JSON.stringify(cleanedJson, null, 2));

    console.log('Successfully wrote cleaned JSON object to file.');
  } catch (error) {
    console.error('Error reading or writing JSON file:', error);
  }
}

module.exports = { main };
