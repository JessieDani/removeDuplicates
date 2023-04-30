const fs = require('fs').promises;

const express = require('express');
const app = express();
const PORT = 5500;

async function getMockApplication() {
  try {
    const jsonString = await fs.readFile('./mock_application.json', 'utf-8');
    const mock_application = JSON.parse(jsonString);

    function removeDuplicates(json) {
      let result = { ...json };
      let valuesSeen = new Set();

      for (let key in result) {
        let value = result[key];

        if (valuesSeen.has(value)) {
          delete result[key];
        } else {
          valuesSeen.add(value);
        }
      }

      return result;
    }

    return JSON.stringify(removeDuplicates(mock_application), null, 2);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return 'Error reading JSON file: ' + error;
  }
}

app.get('/', async (req, res) => {
  const output = await getMockApplication();
  res.setHeader('Content-Type', 'application/json');
  res.send(output);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Same code as removeDuplicates.js without writing it into a file and with a few extra lines to make it work as a web server with Express.js :) 