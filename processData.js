const fs = require('fs');

const readInputFile = () => {
    // Read the input.json file
    const inputData = fs.readFileSync('input.json', 'utf-8');
    const operations = JSON.parse(inputData);

    // TODO! would add some checks that it is working here
    
    return operations
}

// Function to execute the operation based on the method
const executeOperation = (method, values) => {
    switch (method) {
        case 'add':
            return values.reduce((a, b) => a + b, 0);
        case 'subtract':
            return values.reduce((a, b) => a - b);
        case 'multiply':
            return values.reduce((a, b) => a * b, 1);
        case 'divide':
            return values.reduce((a, b) => a / b);
        default:
            throw new Error(`Unknown method: ${method}`);
    }
};

const operations = readInputFile();

// Array to store the results of the operations
const results = operations.map(operation => {
    const { method, values } = operation;
    try {
        const result = executeOperation(method, values);
        return { method, result };
    } catch (e) {
        // TODO! what are we returning on error?
    }
});

// Write the results to output.json
fs.writeFileSync('output.json', JSON.stringify(results, null, 2), 'utf-8');

console.log('Results written to output.json');
