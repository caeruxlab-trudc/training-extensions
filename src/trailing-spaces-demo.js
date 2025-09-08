// JavaScript Demo File - Trailing Spaces Extension Demo
// File này có cố ý để nhiều trailing spaces để demo extension

// Function với trailing spaces ở nhiều dòng
function calculateSum(a, b) {
  const result = a + b;
  return result;
}

// Object với mixed indentation và trailing spaces
const userConfig = {
  name: 'Demo User',
  settings: {
    theme: 'dark',
    fontSize: 14,
  },
};

// Array với trailing spaces
const colors = ['red', 'green', 'blue', 'yellow'];

// Class với trailing spaces và mixed tabs/spaces
class DataProcessor {
  constructor() {
    this.data = [];
  }

  // Method với trailing spaces
  addData(item) {
    this.data.push(item);
  }

  // Method với mixed indentation
  processData() {
    return this.data.map((item) => {
      return item.toUpperCase();
    });
  }

  // Method với trailing spaces và empty lines
  clearData() {
    this.data = [];

    // console.log('Data cleared');
  }
}

// Function với nhiều empty lines có spaces
function demonstrateTrailingSpaces() {
  // console.log('This function demonstrates trailing spaces');

  // Empty line with spaces above

  const message = 'Check for trailing spaces!';
  return message;
}

// Arrow function với trailing spaces
const processItems = (items) => {
  return items
    .filter((item) => item !== null)
    .map((item) => item.toString())
    .join(', ');
};

// Export với trailing spaces
module.exports = {
  calculateSum,
  userConfig,
  colors,
  DataProcessor,
  demonstrateTrailingSpaces,
  processItems,
};
