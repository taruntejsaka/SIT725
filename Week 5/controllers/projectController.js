const Project = require('../models/Project');

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json({ statusCode: 200, data: projects, message: "Success" });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: "Error fetching projects" });
  }
};

exports.seedData = async (req, res) => {
  const sampleData = [
    {
      title: "Kitten 2",
      image: "/images/kitten-2.jpg",
      link: "#",
      description: "Demo description about kitten 2",
    },
    {
      title: "Kitten 3",
      image: "/images/kitten-3.jpg",
      link: "#",
      description: "Demo description about kitten 3",
    }
  ];

  try {
    await Project.insertMany(sampleData);
    res.send("✅ Sample data inserted!");
  } catch (err) {
    res.status(500).send("Error inserting sample data");
  }
};