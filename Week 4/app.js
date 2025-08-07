const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myprojectDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('✅ Connected to MongoDB!');
});

// Define Project schema and model
const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});

const Project = mongoose.model('Project', ProjectSchema);

// Serve static files from "public" folder
app.use(express.static('public'));

// API route to get all projects (kitten cards)
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json({ statusCode: 200, data: projects, message: "Success" });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: "Error fetching projects" });
  }
});

// Route to insert sample data (run once)
app.get('/api/initData', async (req, res) => {
  const sampleData = [
    {
      title: "Kitten 2",
      image: "images/kitten-2.jpg",
      link: "About Kitten 2",
      description: "Demo description about kitten 2",
    },
    {
      title: "Kitten 3",
      image: "images/kitten-3.jpg",
      link: "About Kitten 3",
      description: "Demo description about kitten 3",
    },
  ];

  try {
    await Project.insertMany(sampleData);
    res.send("✅ Sample data inserted!");
  } catch (err) {
    res.status(500).send("Error inserting sample data");
  }
});

app.get('/test', (req, res) => {
  res.send("Test route is working!");
});


// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', message: 'Server is running smoothly!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
