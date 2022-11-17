// Display Home Page
const getHome = ((req, res) => {
    var projects = [
        {name: 'Project 1', image: 'assets/images/FindFlights_screenshot.png', alt: 'Screenshot of sample'},
        {name: 'Project 2', image: 'assets/images/FindFlights_screenshot.png', alt: 'Screenshot of sample'},
        {name: 'Project 3', image: 'assets/images/FindFlights_screenshot.png', alt: 'Screenshot of sample'},
    ];

    res.status(200);
    res.render('pages/index', {
        projects: projects
    });
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