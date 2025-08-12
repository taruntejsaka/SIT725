const Project = require('../models/projectModel');

// GET all projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Insert sample projects
exports.initData = async (req, res) => {
  try {
    const sampleProjects = [
      {
        title: "Kitten Project",
        image: "/images/kitten-1.jpg",
        link: "#",
        description: "A cute kitten project."
      },
      {
        title: "Another Project",
        image: "/images/livedemo.jpg",
        link: "#",
        description: "Another sample project."
      }
    ];
    await Project.deleteMany({});
    await Project.insertMany(sampleProjects);
    res.send("✅ Sample data inserted");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
