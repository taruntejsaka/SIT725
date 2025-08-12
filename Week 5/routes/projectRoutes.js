const express = require('express');
const path = require('path');
const router = express.Router();
const projectController = require('../controllers/projectcontroller');

// Serve homepage
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

// API routes
router.get('/projects', projectController.getProjects);
router.get('/init', projectController.initData);

module.exports = router;
