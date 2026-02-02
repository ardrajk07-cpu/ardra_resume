// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Ardra Jyothikumar',
    title: 'Economics with Data Science Undergraduate',
    image: getAsset('images/kp_photo-removebg-preview.png'), // Customize or replace with your profile image
    description:
      'I am an undergraduate student pursuing Economics with Data Science at Christ University, Bangalore. ' +
      'My interests lie at the intersection of economic theory, data analysis, and real-world problem solving. ' +
      'Through internships, academic projects, and volunteering, I enjoy using data to understand markets, ' +
      'evaluate policies, and build more inclusive economic systems.',
    tagline: 'Exploring Economics through Data Science',
    location: 'Bangalore, India',
  },

  seo: {
    title: 'Ardra Jyothikumar | Economics with Data Science undergraduate',
    description: "Portfolio website showcasing your education, research, projects, and experience.",
  },

  animatedText: ['Economics Student',
'Data Science Enthusiast',
'Finance Learner',
'Aspiring analyst'],

  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Education', url: '/education' },
    { name: 'Experience', url: '/experience' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
  ],



  education: [
    {
      institution: 'Christ University',
      degree: 'Economics with Data Science Undergarduate',
      year: '2025-2029',
      image: getAsset('images/education/placeholder.png'),
      description: ['Relevant coursework: Statistics, Microeconomics, Macroeconomics, Advanced Excel, Programming Fundamentals',
        'GPA: 3.56 (Semester 1)',
        ]
    },
    {
      institution: 'GEMS Our Own English High School, Dubai',
      degree: 'High School Diploma',
      year: '2023-2025',
      image: getAsset('images/education/placeholder.png'),
      description: [ 'Score: 90.3%',
        'Subjects: Economics, Accountancy, Business Studies, Mathematics, English',],
    },
  ],

// ✅ Unified MOOC + Certifications Section
   certifications: [
    {
      title: 'Fundamentals of Digital Marketing',
      specialization: false,
      file: getAsset('images/education/Certifications/download.svg'),
    },
    {
      title: 'Business Course – University of Wollongong Dubai',
      specialization: false,
      file: getAsset('images/education/Certifications/download.svg'),
    },
  ],




  // ✅ Experience section updated
  experience: [
    {
      title: 'Data Analyst',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'FLEKT by KIRIX (Remote)',
      time: '(Dec 2025 – Present)',
      desp: ['Cleaned and transformed raw datasets into structured formats for analysis',
        'Performed end-to-end data analysis to identify gaps and propose solutions',
        'Developed dashboards and visualisations to communicate insights',
     ],
    },
    {
      title: 'Marketing & Research Intern',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'iX Launchpad',
      time: '2022',
      desp: ['Conducted SWOT analysis of businesses',
        'Assisted with digital marketing research and social media analytics',
         ],
    },
 

{
      title: 'Volunteer',
      cardImage: getAsset('images/experience/fazza.png'),
      place: 'FAZZA Para Powerlifting & Archery Championship',
      time: '2024',
      desp: [
        'Supported event coordination for athletes of determination',
        'Developed teamwork, empathy, and organisational skills',
      ],
    },
  ],


  contact: {
    email: 'ardrajk07@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ardra-jyothikumar-210747306/',
    github: 'https://github.com/ardrajk07-cpu',
  },
};

export default siteConfig;