var work = {
    jobs: [{
        employer: "VicLink / Ryan Achten",
        title: "yyy",
        location: "zzz",
        dates: "###-###",
        description: "dslgksladg lsdjglasngd lkdgalsdkgj"
    }, {
        employer: "Victoria University of Wellington",
        title: "yyy",
        location: "zzz",
        dates: "###-###",
        description: "dslgksladg lsdjglasngd lkdgalsdkgj"
    }, {
        employer: "Victoria University of Wellington",
        title: "yyy",
        location: "zzz",
        dates: "###-###",
        description: "dslgksladg lsdjglasngd lkdgalsdkgj"
    }, {
        employer: "National Archive of Film Television and Sound",
        title: "yyy",
        location: "zzz",
        dates: "###-###",
        description: "dslgksladg lsdjglasngd lkdgalsdkgj"
    }, {
        employer: "The British Library",
        title: "yyy",
        location: "zzz",
        dates: "###-###",
        description: "dslgksladg lsdjglasngd lkdgalsdkgj"
    }, {
        employer: "Radio New Zealand Sound Archives",
        title: "yyy",
        location: "zzz",
        dates: "###-###",
        description: "dslgksladg lsdjglasngd lkdgalsdkgj"
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
        title: "xxx",
        dates: "###-###",
        description: "sdlkshdg sdlgjsdgljk sdlgjksdg",
        images: ["images/fry.jpg", "images/fry.jpg"]
    }, {
        title: "xxx",
        dates: "###-###",
        description: "sdlkshdg sdlgjsdgljk sdlgjksdg",
        images: ["images/fry.jpg", "images/fry.jpg"]
    }, {
        title: "xxx",
        dates: "###-###",
        description: "sdlkshdg sdlgjsdgljk sdlgjksdg",
        images: ["images/fry.jpg", "images/fry.jpg"]
    }, {
        title: "xxx",
        dates: "###-###",
        description: "sdlkshdg sdlgjsdgljk sdlgjksdg",
        images: ["images/fry.jpg", "images/fry.jpg"]
    }, {
        title: "xxx",
        dates: "###-###",
        description: "sdlkshdg sdlgjsdgljk sdlgjksdg",
        images: ["images/fry.jpg", "images/fry.jpg"]
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
    name: "Timothy J.",
    role: "Developer",
    welcomeMessage: "Go away.",
    biopic: "images/fry.jpg",
    contacts: {
        mobile: "123-456",
        email: "tim@tim.com",
        github: "MisterTJB",
        twitter: "@MisterTJB",
        location: "Wellington"
    },
    skills: [
        "iOS", "Web", "Data analysis", "Flying"
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
        name: "Victoria University of Wellington",
        location: "Wellington",
        degree: "XYZ",
        dates: "2015-2016",
        url: "www.victoria.ac.nz",
        majors: ["Computer Science"]
    }, {
        name: "University of Canterbury",
        location: "Wellington",
        degree: "XYZ",
        dates: "2010-2014",
        url: "www.canterbury.ac.nz",
        majors: ["Computer Science", "Mathematics"]
    }, {
        name: "Victoria University of Wellington",
        location: "Wellington",
        degree: "XYZ",
        dates: "2008-2010",
        url: "www.victoria.ac.nz",
        majors: ["Information Studies"]
    }, {
        name: "Tai Poutini Polytechnic",
        location: "Christchurch",
        degree: "XYZ",
        dates: "2004-2005",
        url: "www.mainz.ac.nz",
        majors: ["Audio Engineering"]
    }],

    onlineCourses: [{
        title: "Front-end Web Developer Nanodegree",
        school: "Udacity",
        dates: "2016",
        url: "www.udacity.com"
    }, {
        title: "iOS Developer Nanodegree",
        school: "Udacity",
        dates: "2015-2016",
        url: "www.udacity.com"
    }, {
        title: "Data Analyst Developer Nanodegree",
        school: "Udacity",
        dates: "2015-2016",
        url: "www.udacity.com"
    }],
    display: function() {
        return 0;
    }
};
