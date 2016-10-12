var work = {
    jobs: [{
        employer: "My Current Employer",
        title: "My Current Title",
        location: "Barotseland",
        dates: "2000–",
        description: "Doing things for money"
    }, {
        employer: "My Past Employer",
        title: "My Past Title",
        location: "Sealand",
        dates: "1990–1999",
        description: "Doing things I didn't like for money that wasn't good enough"
    }],
    display: function() {

        this.jobs.forEach(function(job) {
            var position = HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title);
            var dates = HTMLworkDates.replace("%data%", job.dates);
            var location = HTMLworkLocation.replace("%data%", job.location);
            var description = HTMLworkDescription.replace("%data%", job.description);

            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(position, dates, location, description);

        });
    }
};


var projects = {
    projects: [{
        title: "A Recent Project",
        dates: "2016",
        description: "This is something I've been doing recently",
        images: ["https://unsplash.it/200?random", "https://unsplash.it/201/300?random"]
    }, {
        title: "A Not So Recent Project",
        dates: "2015",
        description: "This is something I gave up on",
        images: ["https://unsplash.it/199?random", "https://unsplash.it/202?random"]
    }],
    display: function() {

        this.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);

            var title = HTMLprojectTitle.replace("%data%", project.title);
            var dates = HTMLprojectDates.replace("%data%", project.dates);
            var description = HTMLprojectDescription.replace("%data%", project.description);

            $(".project-entry:last").append(title, dates, description);

            project.images.forEach(function(image) {
                var imageElement = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(imageElement);
            });

        });
    }
};


var bio = {
    name: "Hugh Man",
    role: "Decapodian Army Officer",
    welcomeMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sollicitudin odio, at finibus metus. Donec iaculis, mi a consequat sagittis, turpis ligula bibendum leo, vel venenatis nisl dolor maximus augue. Aenean vitae leo sed massa sodales sodales in eget lorem. Vestibulum tempus blandit odio, rhoncus faucibus turpis ornare sed. Nunc vel ullamcorper nibh. Curabitur augue nulla, eleifend in accumsan sed, feugiat nec tortor",
    biopic: "images/hughman.jpg",
    contacts: {
        mobile: "123-456-7890",
        email: "hugh@decapodianarmy.com",
        github: "Nope",
        twitter: "@Nope",
        location: "New York"
    },
    skills: [
        "An impressive skill", "An unimpressive skill"
    ],
    display: function() {
        var headerName = HTMLheaderName.replace("%data%", this.name);
        var headerRole = HTMLheaderRole.replace("%data%", this.role);

        $("#header").prepend(headerName, headerRole);

        var mobile = HTMLmobile.replace("%data%", this.contacts.mobile);
        var email = HTMLemail.replace("%data%", this.contacts.email);
        var twitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
        var github = HTMLgithub.replace("%data%", this.contacts.github);
        var location = HTMLlocation.replace("%data%", this.contacts.location);

        $("#topContacts").append(mobile, email, twitter, github, location);
        $("#footerContacts").append(mobile, email, twitter, github, location);

        var bioImg = HTMLbioPic.replace("%data%", this.biopic);
        var welcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);

        $("#header").append(bioImg, welcomeMsg, HTMLskillsStart);

        this.skills.forEach(function(skill) {
            var skillHTML = HTMLskills.replace("%data%", skill);
            $("#skills").append(skillHTML);
        });
    }
};

var education = {
    schools: [{
        name: "Mars University",
        location: "Oxford, England",
        degree: "Ph.D",
        dates: "2015-2016",
        url: "www.oxford.ac.uk",
        majors: ["Mechanics of Wonton Burrito Meals"]
    }, {
        name: "Bovine University",
        location: "Antarctica",
        degree: "BSc.",
        dates: "2010-2014",
        url: "www.canterbury.ac.nz",
        majors: ["Computer Science", "Mathematics"]
    }],

    onlineCourses: [{
        title: "Front-end Web Developer Nanodegree",
        school: "Udacity",
        dates: "2016",
        url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }, {
        title: "iOS Developer Nanodegree",
        school: "Udacity",
        dates: "2015-2016",
        url: "https://www.udacity.com/course/ios-developer-nanodegree--nd003"
    }, {
        title: "Data Analyst Developer Nanodegree",
        school: "Udacity",
        dates: "2015-2016",
        url: "https://www.udacity.com/course/data-analyst-nanodegree--nd002"
    }],
    display: function() {

        this.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);

            var nameDegree = HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree);
            var dates = HTMLschoolDates.replace("%data%", school.dates);
            var location = HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry:last").append(nameDegree, dates, location);

            school.majors.forEach(function(major) {
                var major = HTMLschoolMajor.replace("%data%", major);
                $(".education-entry:last").append(major);
            });
        });

        $("#education").append(HTMLonlineClasses);

        this.onlineCourses.forEach(function(course) {
            $("#education").append(HTMLschoolStart);
            var titleSchool = HTMLonlineTitle.replace("%data%", course.title) + HTMLonlineSchool.replace("%data%", course.school);
            var date = HTMLonlineDates.replace("%data%", course.dates);
            var url = HTMLonlineURL.replace("%data%", course.url);
            $(".education-entry:last").append(titleSchool, date, url);

        });
    }
};

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
