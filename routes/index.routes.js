// index.js Main Routes
const express = require("express");
const router = express.Router();

const {
    getHome,
    getAbout,
    getProjects
} = require('../controllers/index.controller');

router.get('/', getHome);

router.get('/about', getAbout);

router.get('/projects', getProjects);

module.exports = router;