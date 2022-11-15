// index.js Main Routes
const express = require("express");
const router = express.Router();

router.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to the Home Page");
});

router.get('/about', (req, res)=>{
    res.status(200);
    res.send("Welcome to the About Page");
});

router.get('/projects', (req, res)=>{
    res.status(200);
    res.send("Welcome to the Projects Page");
});


module.exports = router;