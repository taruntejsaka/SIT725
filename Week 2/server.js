const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Parse JSON bodies
app.use(express.json());

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// In-memory quotes
let quotes = [
  "The best way to predict the future is to invent it.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Do not wait to strike till the iron is hot; but make it hot by striking."
];

// GET: random quote
app.get('/api/quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
});

// POST: add a new quote
// Body: { "quote": "Something inspiring" }
app.post('/api/quote', (req, res) => {
  const { quote } = req.body;
  if (!quote || typeof quote !== 'string' || !quote.trim()) {
    return res.status(400).json({ error: 'quote must be a non-empty string' });
  }
  quotes.push(quote.trim());
  res.status(201).json({ message: 'Quote added', total: quotes.length });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}`);
});
