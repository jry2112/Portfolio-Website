// Display Home Page
const getHome = ((req, res) => {
    var projects = [
        {name: 'Project 1', image: 'assets/images/FindFlights_screenshot.png', alt: 'Screenshot of sample'},
        {name: 'Project 2', image: 'assets/images/FindFlights_screenshot.png', alt: 'Screenshot of sample'},
        {name: 'Project 3', image: 'assets/images/FindFlights_screenshot.png', alt: 'Screenshot of sample'},
    ];

    var jobs = [
        {
            position: 'Development and Operations Consultant', 
            company: 'CSG LLC Technical Trade Training', 
            location: 'New York, NY', 
            startdate: 'December 2020', 
            enddate: 'Present', 
            tasks: ['Produced proposal that successfully attained access to over $300,000 in state workforce training funds.', 
            'Design, develop, and maintain 200+ hours of Telecommunications (Structured Cabling) learning material including storyboards, project plans, and LMS deployment.',
            'Identify opportunities for partnership with local community organizations that has led to enrollment doubling quarterly.']
        },
        {
            position: 'Landlord Underwriting Specialist (Temporary)', 
            company: 'TheGuarantors', 
            location: 'New York, NY', 
            startdate: 'February 2022', 
            enddate: 'September 2022', 
            tasks: ['Analyzed applications and determined suitability for product using company workflows and technologies to reduce company risk.', 
            'Answered property owners’ queries regarding products and services.']
        },
        {
            position: 'Licensed Real Estate Salesperson', 
            company: 'Crosstown Apartments NYC ', 
            location: 'New York, NY', 
            startdate: 'March 2018', 
            enddate: 'April 2020', 
            tasks: ['Executed marketing initiatives to attain over $140,000 in rental transactions annually. ', 
            'Hired, trained, and managed a top-performing  5-member team of junior agents to further develop sales skills and meet performance goals.']
        }
    ];

    var languages = ['Python', 'JavaScript', 'HTML/CSS', 'C/C++', 'MySQL'];
    var tools = ['Node.JS', 'Express', 'EJS/Handlebars', 'Bootstrap', 'MariaDB'];
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