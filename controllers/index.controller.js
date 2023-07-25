// Display Home Page
const getHome = ((req, res) => {
    var project_names = [
        'PAgCASA Data Report Emailer & Visualization',
        'Broadband Speed Test Data API',
        'Damn Vulnerable Web Application Vulnerability Assessment',
        'Find Flights Travel App',
        'Tech School Management Database'
    ]

    var descriptions = [
        "In March 2023, I started my Senior Capstone project at OSU, which has been an enriching experience for me. The project involved collaborating with a local non-profit to manage and visualize M-Lab's and Ookla's Broadband Speed Testing data hosted in GCP (Google Cloud Platform).\nDuring the project, my responsibilities included researching GCP's services, establishing a project structure, and creating a data migration tool. This tool efficiently parses test data and transfers it to BigQuery for analysis.\nBeyond the Capstone, I continued to work independently on the project with the non-profit's support. I expanded the project by incorporating a data visualization component using Looker Studio. Additionally, I made important improvements, enabling the project to handle various data formats, such as plaintext and JSON files.\nAnother aspect of my work involved enhancing the collection of pre-written BigQuery SQL statements, enabling users to conduct more sophisticated data analysis, including cross-comparisons of the captured data.\nThis project has been a rewarding journey, and I'm committed to its ongoing development, making it an even more valuable tool for our non-profit partner.",
        "This portfolio project was developed as part of my CS493 Cloud Application Development course at OSU. It was inspired by my previous work with broadband speed test data during my Capstone. The project serves as a REST API model, facilitating CRUD operations on three main entities: Users, Tests, and Devices.\nFor the backend, I chose Python and Flask, which made deployment on Google App Engine a seamless process. Datastore was utilized for data storage, enabling me to model both relational and non-relational relationships between entities.\nTo prioritize data security, protected entities in the API can only be accessed by authorized users, with OAuth-based authentication in place.\nFor thorough testing and validation of responses, I created a Postman Testing Collection, ensuring the reliability and functionality of the project.\nThroughout the development journey, I delved into various other essential concepts, including pagination, response status codes, and message handling, enriching my understanding of cloud application development.\nThis project has been an invaluable experience, equipping me with practical skills and insights that will undoubtedly prove beneficial in my future endeavors.",
        "This project marked my first look at the world of vulnerability assessments. Working with the Damn Vulnerable Web Application (DVWA) – an open-source web application intentionally designed with security vulnerabilities – was an exciting opportunity to enhance my web application security skills. With the DVWA, I created a controlled environment to practice and improve my cybersecurity know-how. Conducting a comprehensive vulnerability assessment, I identified and proposed fixes for various vulnerabilities, aligning them with the well-known OWASP TOP 10 categories. Some of the challenges I tackled included Brute Force Login, Command and SQL Injection, File Upload, and XSS. I had the chance to use common industry tools like VMWare, BurpSuite, and parts of the Linux penetration testing suite (e.g. THC Hydra) to succesfully exploit the vulnerabilities I discovered. This experience solidified my passion for cybersecurity, and I'm thrilled to continue pursuing my end goal in this dynamic field.",
        "I worked on the Find Flights Travel App using a scrum Agile methodology and a microservices Architecture. Developed with Node.js + Express backend, the app's primary function utilizes the Amadeus Flight Offers Search API to provide users with flights based on their input. To add some flair, I implemented an Image Microservice using Unsplash's API to generate destination-based images, and it was even integrated into one of my partner's projects as part of the requirements. Moreover, I integrated my groupmate's latitude-longitude microservice to display a map of the destination, seamlessly incorporating the Google Maps API.",
        "The Tech School Management Database is a school project I developed using Node.js, Express, and MySQL/MariaDB. Working collaboratively with a partner, we successfully planned, modeled, and implemented a robust database while creating a convenient CRUD API for efficient database operations.\nThis project features a dynamic web interface that enables users to view, edit, and delete student, staff, and class data stored in the backend. To ensure a well-structured foundation, we carefully designed an Entity-Relationship Diagram (ERD), created a comprehensive schema, and crafted necessary Data Definition Language (DDL) and Data Manipulation Language (DML) scripts. Additionally, we provided detailed documentation to facilitate understanding and maintenance."

    ]

    var projects = [];


    for (let i = 0; i < project_names.length; i++) {
        const project_name = project_names[i];
        const image_fn = `${project_name.replace(/ /g, '_')}_main.png`;
        projects.push({ 
            name: project_name,
            image: `assets/images/${image_fn}`,
            alt: `screenshot of ${project_name}`,
            description: descriptions[i]
        });
    }

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

    var languages = ['Python', 'JavaScript', 'HTML/CSS', 'C/C++', 'SQL'];
    var tools = ['Node.JS', 'Express', 'EJS/Handlebars', 'Bootstrap', 'MariaDB', 'WireShark', 'Burp Suite', 'Kali Linux'];
    var concepts = ['Cloud Computing (GCP)', 'Data Migration + Visualization', 'Web Application Security', 'Vulnerabilty Assessment & Penetration Testing', 'Networking'];

    var columbiaCourses = {title: '"We asked the City for Help, We Got a Raid Instead:" Confronting Youth Gun Violence in Post-Stop and Frisk New York',
                            link: 'file_link'}

    var osuCourses = ['Assembly Language and Architecture', 'Web Development', 'Introduction to Databases', 'Data Structures & Algorithms', 'Operating Systems', 'Software Engineering I & II', 'Introduction to Cybersecurity', 'Introduction to Networks']

    var organizations = ['CodePath', 'Women in CyberSecurity (WiCyS)']


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