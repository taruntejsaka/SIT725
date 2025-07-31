var express = require('express');
var app = express();
var port = 3000;


// Serve static files from the "public" folder
app.use(express.static('public'));


// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', message: 'Server is running smoothly!' });
});


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
