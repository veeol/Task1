const fs = require('fs');

const OPERATIONS = {
    ADD = 'add',
    SUBTRACT = 'subtract',
    MULTIPLY = 'multiply',
    DIVIDE = 'divide'
}

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
        case OPERATIONS.ADD:
            return values.reduce((a, b) => a + b, 0);
        case OPERATIONS.SUBTRACT:
            return values.reduce((a, b) => a - b);
        case OPERATIONS.MULTIPLY:
            return values.reduce((a, b) => a * b, 1);
        case OPERATIONS.DIVIDE:
            return values.reduce((a, b) => a / b);
        default:
            throw new Error(`Unknown method: ${method}`);
    }
};

// Array to store the results of the operations
const results = readInputFile().map(operation => {
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
