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

    var languages = ['Python', 'JavaScript', 'HTML/CSS', 'C/C++'];
    var tools = ['a', 'b'];
    var concepts = ['a', 'b'];

    var columbiaCourses = {title: 'thesis Title',
                            link: 'file_link'}

    var osuCourses = ['Assembly Language and Architecture', 'Web Development', 'Introduction to Databases', 'Data Structures & Algorithms', 'Operating Systems', 'Software Engineering I & II', 'Introduction to Cybersecurity', 'Introduction to Networks']

    res.status(200);
    res.render('pages/index', {
        projects: projects,
        jobs: jobs,
        osuCourses: osuCourses,
        columbiaCourses: columbiaCourses,
        tools: tools,
        languages: languages,
        concepts: concepts
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