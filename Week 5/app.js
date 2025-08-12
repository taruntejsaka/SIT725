const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = 3000;

// Database connection
mongoose.connect('mongodb://localhost:27017/myprojectDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Serve static files from public
app.use(express.static(path.join(__dirname, 'public')));

// Serve HTML from views
app.use(express.static(path.join(__dirname, 'views')));

// API Routes
const projectRoutes = require('./routes/projectRoutes');
app.use('/api', projectRoutes);

// Serve main HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});