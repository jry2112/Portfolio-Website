// Display Home Page
const getHome = ((req, res) => {
    var projects = [
        {name: 'Project 1', image: 'assets/images/FindFlights_screenshot.png', alt: 'Screenshot of sample'},
        {name: 'Project 2', image: 'assets/images/FindFlights_screenshot.png', alt: 'Screenshot of sample'},
        {name: 'Project 3', image: 'assets/images/FindFlights_screenshot.png', alt: 'Screenshot of sample'},
    ];

    var jobs = [
        {position: 'Position', company: 'Company', location: 'City, State', startdate: '1.1.1111', enddate: '1.1.1111', tasks: ['task1', 'task2'] },
        {position: 'Position 2', company: 'Company 2', location: 'City, State', startdate: '1.1.1111', enddate: '1.1.1111', tasks: ['task1', 'task2'] }
    ];

    res.status(200);
    res.render('pages/index', {
        projects: projects,
        jobs: jobs
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