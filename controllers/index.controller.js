// Display Home Page
const getHome = ((req, res) => {
    res.status(200);
    res.send("Welcome to the Home Page");
});


// Display About Page
const getAbout = ((req, res) => {
    res.status(200);
    res.send("Welcome to the About Page");
});

// Display Projects Page
const getProjects = ((req, res) => {
    res.status(200);
    res.send("Welcome to the Projects Page");
});

module.exports = {
    getHome,
    getAbout,
    getProjects
};