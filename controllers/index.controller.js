// Display Home Page
const getHome = ((req, res) => {
    res.status(200);
    res.render('pages/index');
});


// Display About Page
const getAbout = ((req, res) => {
    res.status(200);
    res.render('pages/about');

});

// Display Projects Page
const getProjects = ((req, res) => {
    res.status(200);
    res.render('pages/projects');
});

module.exports = {
    getHome,
    getAbout,
    getProjects
};