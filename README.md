# Remove Duplicates from JSON

This project contains a script and a web server that remove duplicate values from a JSON object. Given a JSON file `mock_application.json`, the script processes the file, removing duplicate values while preserving the original keys. The result is written to a new JSON file named `clean_application.json`.

Additionally, the web server provides an endpoint that returns the cleaned JSON object when accessed.

## Getting Started


### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your system.

### Installing Dependencies

Clone the repository and navigate to the project folder:

git clone [(https://github.com/JessieDani/removeDuplicates.git)]](https://github.com/JessieDani/removeDuplicates.git)

cd remove-duplicates-json


### Running the Script

To run the `removeDuplicates.js` script, execute the following command:

`node removeDuplicates.js`

This code snippet provides a solution to remove duplicate values from a JSON object.

## Steps

* Read and parse the mock_application.json file into a JavaScript object
* 
* Iterate/loop through the key-value pairs in the input JSON object
* 
* Remove duplicate values based on the valuesSeen Set
* 
* Get the cleaned JSON object and write it to a file


The script will read the `mock_application.json` file, remove duplicate values, and write the cleaned JSON object to a new file named `clean_application.json`.

### Running the Web Server

To start the web server, run the following command:

## Jest testing

To run the test suite using Jest, execute the following command:.

`npx jest`


This will run the test suite and display the results in the console.


## Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [Express.js](https://expressjs.com/) - Web framework for Node.js
- [Jest](https://jestjs.io/) - JavaScript testing framework





