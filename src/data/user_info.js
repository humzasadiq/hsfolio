const info = {
    // ============ MAIN DETAILS ============
    main: {
        name: "Muhammad Hamza Sadiq",
        sub_description: "I'm a Software Engineer Student from Pakistan. ",
        description: "I'm currently pursuing a Bachelor's Degree in Software Engineering.",
        description2: "I've been programming for 3 years in multiple different languages, learning principles from each one, and designing & developing applications for the past 2 years.",
        role: "Software Engineer",
        photo: "/favicon.png",
        email: "humzasadiq92@gmail.com",
    },

    // ============ SOCIAL LINKS ============
    socials: {
        twitter: "https://twitter.com/",
		github: "https://github.com/humzasadiq",
		linkedin: "https://linkedin.com/in/",
		instagram: "https://instagram.com/",
		facebook: "https://facebook.com/",
    },

    // ============ SKILLS ============
    skills:
        {
            tools: [
                {
                    name: "React",
                    icon: "React",
                    color: "#61DAFB",
                    desc: "JavaScript library",
                    current: true,
                },
                {
                    name: "Tailwind CSS",
                    icon: "Tailwind",
                    color: "#38BDF8",
                    desc: "CSS framework",
                    current: true,
                },
                {
                    name: "NextJS",
                    icon: "Next",
                    color: "#ffffff",
                    desc: "React framework",
                    current: true,
                },
                {
                    name: "Supabase",
                    icon: "supabase",
                    color: "#3ECF8E",
                    desc: "SQL database",
                    current: true,
                },
                {
                    name: "ExpressJS",
                    icon: "Express",
                    color: "#ffffff",
                    desc: "Backend framework",
                    current: false,
                },
                {
                    name: "Git",
                    icon: "Git",
                    color: "#FB5030",
                    desc: "Version control",
                    current: false,
                },
                {
                    name: "Figma",
                    icon: "Figma",
                    color: "#A654F8",
                    desc: "Graphics Design",
                    current: false,
                },
                {
                    name: "MongoDB",
                    icon: "MongoDB",
                    color: "#439934",
                    desc: "NoSQL database",
                    current: false,
                },
                {
                    name: "MySQL",
                    icon: "MySQL",
                    color: "#19618A",
                    desc: "SQL database",
                    current: false,
                },
                {
                    name: "PostgreSQL",
                    icon: "PostgresSQL",
                    color: "#336791",
                    desc: "SQL database",
                    current: false,
                },
                {
                    name: "Three.js",
                    icon: "Three",
                    color: "#EDE9FE",
                    desc: "3D JS library",
                    current: false,
                }, 
            ],
            languages: [
                {
                    name: "JavaScript",
                    icon: "JavaScript",
                    color: "#F0DB4F",
                    desc: "",
                },
                {
                    name: "Python",
                    icon: "Python",
                    color: "#306998",
                    desc: "",
                },
                {
                    name: "C++",
                    icon: "Cpp",
                    color: "#659AD2",
                    desc: "",
                },
            ],
        },

    // ============ PROJECTS ============
    projects: [
        {
			title: "PcPartPicker",
			description: " A full stack web application for building custom pc builds. [group project]",
            technologies: "React,Three,Express,MongoDB",
			github: "https://github.com/humzasadiq/PcPartPicker",
            link: ""
		},
        {
			title: "gogol",
			description: "A Real-time Watch store.",
            technologies: "React,Three,CSS3",
			github: "https://github.com/humzasadiq/RealTime-GooglePixelWatch",
            link: "https://gogol-watchstore.vercel.app/"
		},
        {
			title: "Careerhub",
			description: "A Job search engine that aggregates job listings from multiple platforms. ",
            technologies: "React,Tailwind,Express,CSS3",
			github: "https://github.com/humzasadiq/CareerHub-JobSearchEngine",
            link: "https://careerhub-portal.vercel.app/"
		},
    ],

    // ============ EDUCATION ============
    education: [
        {
            school: "NED University of Engineering and Technology",
            degree: "Bachelor of Engineering in Software Engineering",
            duration: "2022 - 2026",
            image: "NEDUET_logo.webp"
        }
    ],

    // ============ EXPERIENCE ============
    experience: [
        {
            position: "NextJS Backend Developer",
            link: "https://nexdev.org",
            company: "Nexus",
            duration: "October 2024 - Present [part-time]",
            image: "nexus.png",
            contact: false,
            descriptions: [
                "Worked on implementing Password-less Authentication with Google and GitHub Sign-In. Further optimized authentication flow by implementing password reset functionality and bot-protection.",
                "Currently working part-time with the development team to push the product to MVP stage."
            ]
        },
    ],

    // ============ CERTIFICATES ============
    certificates: [
        {
            title: "Programming with JavaScript",
            description: "Provided by Coursera & Authorized by Meta",
            icon: "meta",
            link: "https://www.coursera.org/account/accomplishments/verify/N9S2LAZD2UPG",
        },
        {
            title: "Full Stack Open",
            description: "Provided by University of Helsinki",
            icon: "fso",
            link: "https://fullstackopen.com/en/",
        },
        
    ],

    // ============ CONTACT ============
    contact: {
        title: "Let's Get in Touch: Ways to Connect with Me",
        description: "Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at danielshan.balico@gmail.com. I make an effort to respond to all messages within 24 hours, although it may take me longer during busy periods. Finally, if you prefer to connect on social media, you can connect with me using the social media links below.",
    },

    // ============ FOOTER ============
    footer: "© 2025 Muhammad Hamza Sadiq. All Rights Reserved"
}

export default info