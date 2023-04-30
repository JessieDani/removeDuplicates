const fs = require('fs').promises;

describe('removeDuplicates function', () => {

  test('removes duplicate values and generates a clean JSON file', async () => {
    
    // 1. Prepare the test environment: copy the original JSON file and run the `removeDuplicates` function
    await fs.copyFile('./mock_application.json', './mock_application_test.json');
    await require('./removeDuplicates').main();
  
    // 2. Read and parse the original and cleaned JSON files into JavaScript objects for comparison
    const originalJsonString = await fs.readFile('./mock_application_test.json', 'utf-8');
    const cleanedJsonString = await fs.readFile('./clean_application.json', 'utf-8');
    const originalJson = JSON.parse(originalJsonString);
    const cleanedJson = JSON.parse(cleanedJsonString);
  
    // 3. Perform assertions to check if the `removeDuplicates` function works as expected
    expect(Object.keys(cleanedJson).length).toBeLessThan(Object.keys(originalJson).length);
    const cleanedValues = new Set(Object.values(cleanedJson));
    expect(cleanedValues.size).toEqual(Object.values(cleanedJson).length);
    const originalUniqueValues = new Set(Object.values(originalJson));
    expect(cleanedValues.size).toEqual(originalUniqueValues.size);

    // Clean up the test environment by removing the temporary test file
    await fs.unlink('./mock_application_test.json');
  });
});
