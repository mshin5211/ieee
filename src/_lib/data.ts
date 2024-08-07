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