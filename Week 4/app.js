var express = require('express');
var app = express();
var port = 3000;

var mongoose = require('mongoose');
var app = express();
var port = 3000;

// Serve static files from the "public" folder
app.use(express.static('public'));

// Helper function to validate and parse numbers
function parseNumbers(req, res) {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('Error: num1 and num2 must be valid numbers.');
    return null;
  }
  return { num1, num2 };
}

// Add endpoint
app.get('/add', (req, res) => {
  const nums = parseNumbers(req, res);
  if (!nums) return;
  const result = nums.num1 + nums.num2;
  res.send(`Addition Result: ${result}`);
});

// Subtract endpoint
app.get('/subtract', (req, res) => {
  const nums = parseNumbers(req, res);
  if (!nums) return;
  const result = nums.num1 - nums.num2;
  res.send(`Subtraction Result: ${result}`);
});

// Multiply endpoint
app.get('/multiply', (req, res) => {
  const nums = parseNumbers(req, res);
  if (!nums) return;
  const result = nums.num1 * nums.num2;
  res.send(`Multiplication Result: ${result}`);
});

// Divide endpoint
app.get('/divide', (req, res) => {
  const nums = parseNumbers(req, res);
  if (!nums) return;

  if (nums.num2 === 0) {
    res.status(400).send('Error: Cannot divide by zero.');
    return;
  }

  const result = nums.num1 / nums.num2;
  res.send(`Division Result: ${result}`);
});

// Percentage endpoint
app.get('/percentage', (req, res) => {
  const nums = parseNumbers(req, res);
  if (!nums) return;

  if (nums.num2 === 0) {
    return res.status(400).send('Error: Cannot calculate percentage with denominator zero.');
  }

  const result = (nums.num1 / nums.num2) * 100;
  res.send(`Percentage Result: ${result.toFixed(2)}%`);
});
// Square
app.get('/square', (req, res) => {
  const num = parseFloat(req.query.num);
  res.send(`Result: ${num * num}`);
});

// Square root
app.get('/squareroot', (req, res) => {
  const num = parseFloat(req.query.num);
  if (num < 0) {
    res.send("Error: Cannot calculate square root of a negative number");
  } else {
    res.send(`Result: ${Math.sqrt(num)}`);
  }
});
// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', message: 'Server is running smoothly!' });
});


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
