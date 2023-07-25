// index.js Main Routes
const express = require("express");
const router = express.Router();

const {
    getHome,
    getAbout,
    getProjects
} = require('../controllers/index.controller');

// Home Page
router.get('/', getHome);

// About Page
router.get('/about', getAbout);

// Project Page
router.get('/projects', getProjects);

module.exports = router;