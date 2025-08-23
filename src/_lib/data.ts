import { reverse } from "dns";

export const aboutData = [
    {   
        id: 1,
        title: 'Branch 1',
        href: '/branch-1',
    },
    {
        id: 2,
        title: 'Branch 2',
        href: '/branch-2',
    },
    {
        id: 3,
        title: 'Branch 3',
        href: '/branch-3',
    },
    {
        id: 4,
        title: 'Branch 4',
        href: '/branch-4',
    }
];
// export const administration_data = [
//     {
//         id: 1,
//         name: "Nikhil Bhalla",
//         src: '/Nikhil Bhalla.jpg',
//         description: '',
//         href: 'https://www.linkedin.com/in/nikhil-bhalla01/',
//         role: 'President'
//     },
//     {
//         id: 12,
//         name: "Ryan Ilgen",
//         src: '/Ryan Ilgen.jpg',
//         description: '',
//         href: 'https://www.linkedin.com/in/ryan-ilgen-a67b0a28b/',
//         role: 'Technical Vice President'
//     },
//     {
//         id: 8,
//         name: "Jiseob Shin",
//         src: '/Jiseob Shin.jpg',
//         description: '',
//         href: 'https://www.linkedin.com/in/jiseob/',
//         role: 'Membership Vice President',
//     },
//     {
//         id: 2,
//         name: "Morris Yu",
//         src: '/Morris Yu.jpg',
//         description: '',
//         href: 'https://www.linkedin.com/in/morrisyu/',
//         role: 'Secretary',
//     },
//     {
//         id: 4,
//         name: "Maxwell Mamishev",
//         src: '/Maxwell Mamishev.png',
//         description: 'https://maxwellmamishev.github.io/',
//         href: 'https://maxwellmamishev.github.io/',
//         role: 'Director of Corporate Relations'
//     },
//     {
//         id: 9,
//         name: "Eric Nieto",
//         src: '/Eric Nieto.png',
//         description: '',
//         href: 'https://www.linkedin.com/in/ericnietogonzalez/',
//         role: 'Social Director',
//     },
//     {
//         id: 6,
//         name: "Rohit Iyer",
//         src: '/Rohit Iyer.jpeg',
//         description: '',
//         href: 'https://www.linkedin.com/in/rojiyer/',
//         role: 'Hardware Director',
//     },
//     {
//         id: 7,
//         name: "Siddh Shah",
//         src: '/Siddh Shah.jpeg',
//         description: '',
//         href: 'https://www.linkedin.com/in/siddhshah05/',
//         role: 'Publicity Director',
//     },
//     {
//         id: 3,
//         name: "Stephen Messing",
//         src: '/Stephen Messing.jpg',
//         description: '',
//         href: 'https://www.linkedin.com/in/stephen-messing/',
//         role: 'Advisor',
//     },
//     {
//         id: 5,
//         name: "Rudra Patel",
//         src: '/Rudra Patel.jpeg',
//         description: '',
//         href: 'https://www.linkedin.com/in/rudra-patel-89805123b/',
//         role: 'Software Director',
//     },
//     {
//         id: 11,
//         name: "Minseob Shin",
//         src: '/Minseob_shin.jpg',
//         description: '',
//         href: 'https://www.linkedin.com/in/minseob-shin/',
//         role: 'Webmaster',
//     },
    
// ];
export const administration_data = [
    {
        id: 1,
        name: "Jiseob Shin",
        src: '/Jiseob_Shin_25.jpg',
        description: '',
        href: 'https://www.linkedin.com/in/jiseob/',
        role: 'President'
    },
    {
        id: 12,
        name: "Ryan Ilgen",
        src: '/Ryan_Ilgen_25.jpeg',
        description: '',
        href: 'https://www.linkedin.com/in/ryan-ilgen-a67b0a28b/',
        role: 'Technical Vice President'
    },
    {
        id: 8,
        name: "Siddh Shah",
        src: '/Siddh_Shah_25.jpg',
        description: '',
        href: 'https://www.linkedin.com/in/siddhshah05',
        role: 'Membership Vice President',
    },
    {
        id: 2,
        name: "Max Mamishev",
        src: '/Max_Mamishev_25.jpeg',
        description: '',
        href: 'https://www.linkedin.com/in/maxwell-mamishev-35b554212',
        role: 'Professional Vice President',
    },
    {
        id: 4,
        name: "Aryan Gupta",
        src: '/Aryan_Gupta_25.jpeg',
        description: '',
        href: 'https://www.linkedin.com/in/aryan-gupta-uiuc/',
        role: 'Treasurer'
    },
    {
        id: 13,
        name: "Rishigaanesh Balajirajah",
        src: '/Rishigaanesh_Balajirajah_25.jpg',
        description: '',
        href: 'https://www.linkedin.com/in/rishigaaneshb/',
        role: 'Secretary'
    },
    {
        id: 14,
        name: "Arav Ahluwalia",
        src: '/Arav_Ahluwalia_25.jpg',
        description: '',
        href: 'https://www.linkedin.com/in/arav-ahluwalia-25488b327/',
        role: 'Social Director'
    },

    {
        id: 9,
        name: "Carlos Salinas",
        src: '/Carlos_Salinas_25.jpg',
        description: '',
        href: 'https://www.linkedin.com/in/carlos-salinas-212979327/',
        role: 'Creative Director',
    },
    {
        id: 6,
        name: "Rohit Iyer",
        src: '/Rohit_Iyer_25.jpeg',
        description: '',
        href: 'https://www.linkedin.com/in/rojiyer/',
        role: 'Workshop Lead',
    },
    {
        id: 7,
        name: "Adi Narayan",
        src: '/Adi_Narayan_25.png',
        description: '',
        href: 'https://www.linkedin.com/in/aditya-narayan-7link/',
        role: 'EOH Lead',
    },
    {
        id: 3,
        name: "Ansh Tulsyan",
        src: '/Ansh_Tulsyan_25.png',
        description: '',
        href: 'https://www.linkedin.com/in/anshtulsyan/',
        role: 'AI Director',
    },
    {
        id: 5,
        name: "Braden Miller",
        src: '/Braden_Miller_25.jpeg',
        description: '',
        href: 'https://www.linkedin.com/in/braden-c-miller/',
        role: 'Technical Director',
    },
    {
        id: 15,
        name: "Dilan Patel",
        src: '/Dilan_Patel_25.jpg',
        description: '',
        href: 'https://www.linkedin.com/in/dilanpatel24/',
        role: 'Technical Director',
    },
    {
        id: 16,
        name: "Leslie Choi",
        src: '/Leslie_Choi_25.jpeg',
        description: '',
        href: 'https://www.linkedin.com/in/leslie-choi-516565288/',
        role: 'Technical Director',
    },
    {
        id: 17,
        name: "Kevin Jiao",
        src: '/Kevin_Jiao_25.jpg',
        description: '',
        href: 'https://www.linkedin.com/in/kevin-jiao-59077a32a/',
        role: 'Professional Coordinator',
    },
    {
        id: 18,
        name: "Kevin Wang",
        src: '/Kevin_Wang_25.jpg',
        description: '',
        href: 'https://www.linkedin.com/in/kevin-jiao-59077a32a/',
        role: 'Membership Coordinator',
    },
    {
        id: 19,
        name: "Saahil Verma",
        src: '/Saahil_Verma_25.jpg',
        description: '',
        href: 'https://www.linkedin.com/in/saahil-verma/',
        role: 'Technical Coordinator',
    },
    {
        id: 20,
        name: "Sachin Khanna",
        src: '/Sachin_Khanna_25.png',
        description: '',
        href: 'https://www.linkedin.com/in/sachin-khanna-5a428922a/',
        role: 'Technical Coordinator',
    },
    {
        id: 11,
        name: "Minseob Shin",
        src: '/Minseob_Shin_25.jpeg',
        description: '',
        href: 'https://www.linkedin.com/in/minseob-shin/',
        role: 'Webmaster',
    },
    
];
export const workshopData = [
    {
        id: 1,
        title: 'Workshop 1',
        href: '/workshop-1',
        src: '',
        description: 'workshop 1',
        reverse: false
    },
    {
        id: 2,
        title: 'Workshop 2',
        href: '/workshop-2',
        src: '',
        description: 'workshop 2',
        reverse: true
    },
    {
        id: 3,
        title: 'Workshop 3',
        href: '/workshop-3',
        src: '',
        description: 'workshop 3',
        reverse: false
    },
    {
        id: 4,
        title: 'Workshop 4',
        href: '/workshop-4',
        src: '',
        description: 'workshop 4',
        reverse: true
    }
]
export const branchData = [
    {
        id: 1,
        title: 'Professional',
        src: '',
        description: 'The professional branch focuses on advancing technology by organizing events, workshops, and networking opportunities for engineering professionals and students.'
    },
    {
        id: 2,
        title: 'Technical',
        src: '',
        description: 'The technical branch focuses on enhancing technical skills, organizing workshops and events, and providing practical, hands-on experiences in various engineering and technological fields.'
    },
    {
        id: 3,
        title: 'Membership / Social',
        src: '',
        description: 'The membership/social branch focuses on building a vibrant community by organizing social events, networking opportunities, and fostering connections among its members.'
    }
]

export const sponsorshipData = [
    {
        id: 1,
        title: 'Micron Technology',
        src: '/micron.png',
        link: 'https://www.micron.com/'
    },
    {
        id: 2,
        title: 'Texas Instruments',
        src: '/ti.jpg',
        link: 'https://www.ti.com/'
    },
    {
        id: 3,
        title: 'Cadence Design Systems',
        src: '/Cadence.png',
        link: 'https://www.cadence.com'
    },
    {
        id: 4,
        title: 'Deloitte',
        src: '/deloitte.png',
        link: 'http://www.deloitte.com/'
    },
    {
        id: 5,
        title: 'Halliburton',
        src: '/halliburton.png',
        link: 'http://www.halliburton.com'
    },
    {
        id: 6,
        title: 'Rivian',
        src: '/rivian.png',
        link: 'https://rivian.com/'
    },
    {
        id: 7,
        title: 'Shermco Industries',
        src: '/shermco industries.png',
        link: 'http://www.shermco.com'
    },
    {
        id: 8,
        title: 'The Aerospace Corporation',
        src: '/acl.png',
        link: 'http://www.aerospace.org'
    },
    {
        id: 9,
        title: 'TSMC',
        src: '/tsmc.png',
        link: 'http://www.tsmc.com'
    },
]

export const announcementData = [
    {
        id: 1,
        title: 'Pizza Night!',
        date: 'Next Thursday'
    },
    {
        id: 2,
        title: 'SolidWorks Workshop!',
        date: 'Thursday'
    },
    {
        id: 3,
        title: 'EOH 2024!',
        date: 'Friday & Saturday'
    }

]

export const dailyAnnouncementData = [
    {
        id: 1,
        date: 'Monday - 04/01',
        events: [
            {
                id: 1,
                title: 'Capacitive Power Transfer',
                detail: '3pm - ECEB 4070',
                linkText: 'details',
                href: ''
            }
        ]
    },
    {
        id: 2,
        date: 'Tuesday - 04/02',
        events: [
            {
                id: 1,
                title: 'Perseus’ Mirrored Shield: Enhancing System Robustness and Privacy Through Insights from Cyber Threat Intelligence',
                detail: '10am - Zoom',
                linkText: 'details',
                href: ''
            },
            {
                id: 2,
                title: 'Study Hours with Snacks',
                detail: '7~8pm - ECEB 2036',
                linkText: '',
                href: ''
            }
        ]
    },
    {
        id: 3,
        date: 'Wednesday - 04/03',
        events: [ 
            {
                id: 1,
                title: 'Counseling Center Services: Supporting Engineering Students&apo; Mental Health and Well-Being',
                detail: '5pm - ECEB 1002',
                linkText: 'details',
                href: ''
            }
        ]
    },
    {
        id: 4,
        date: 'Thursday - 04/04',
        events: [
            {
                id: 1,
                title: 'Unconventional Applications of Atomic Materials from Non-volatile Electronics to Wearable Health and Sensors',
                detail: '4~5pm - ECEB 1002',
                linkText: 'details',
                href: ''
            },
            {
                id: 2,
                title: 'IEEE SolidWorks Workshop',
                detail: '5~7pm - ECEB 2015',
                linkText: 'RVSP',
                href: ''
            }
        ]
    },
    {
        id: 5,
        date: 'Friday - 04/05',
        events: [
            {
                id: 1,
                title: 'Engineering Open House 2024',
                detail: '',
                linkText: 'schedule',
                href: ''
            },
            {
                id: 2,
                title: 'Tesla Coil Concert ⚡',
                detail: '8:30~9:30pm - Bardeen Quad',
                linkText: '',
                href: ''
            }
        ]
    },
    {
        id: 6,
        date: 'Saturday - 04/06',
        events: [
            {
                id: 1,
                title: 'Engineering Open House 2024',
                detail: '',
                linkText: 'schedule',
                href: ''
            },
            {
                id: 2,
                title: 'Burns & McDonnell Tech Talk "Grid to the Future"',
                detail: '11am - DCL 1320',
                linkText: 'Register',
                href: ''
            },
            {
                id: 3,
                title: 'From Nikola Tesla to TESLA: How the Electric Grid Became the Most Complex System Ever Engineered',
                detail: '2pm - ECEB 1002',
                linkText: 'details',
                href: ''
            }
        ]
    }
]

export const socialMediaData = [
    {
        id: 1,
        network: 'facebook',
        url: 'https://www.facebook.com/IEEEUIUC',
    },
    {
        id: 2,
        network: 'instagram',
        url: 'https://www.instagram.com/ieee.uiuc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    },
    {
        id: 3,
        network: 'linkedin',
        url: 'https://www.linkedin.com/company/ieeeuiuc/mycompany/',
    },
    {
        id: 4,
        network: 'discord',
        url: 'https://discord.gg/Nnqw3yCav7',
    }
]