export type ExperienceItem = {
  company: string;
  companyImg: string;
  cwmni?: string;
  disgrifiadByr: string;
  end_date: string;
  rol: string;
  role: string;
  shortDescription: string;
  start_date: string;
  long_description?: string;
};

const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Snowdonia National park",
    companyImg: "/experience/snowdonia_national_park_logo.jpg",
    cwmni: "Parc Cenedlaethol Eryri",
    disgrifiadByr: "Rhoi gwybodaeth i ymwelwyr.",
    end_date: "07/2021",
    rol: "Cymorthaethwydd Canolfan Croeso",
    role: "Tourist Information Centre Assistant",
    shortDescription: "Providing information to visitors.",
    start_date: "05/2018",
  },
  {
    company: "CellB",
    companyImg: "/experience/cellb_logo.jpg",
    disgrifiadByr:
      "Golchi llestri, gweini and gweithio fy ffordd fyny i weithio ar y bar.",
    end_date: "05/2018",
    rol: "Gweini",
    role: "Waitress",
    shortDescription:
      "Pot washing, waitressing and working my way up to bar tending.",
    start_date: "05/2014",
  },
  {
    company: "Interactive Investor",
    companyImg: "/experience/interactive_investor_logo.jpg",
    disgrifiadByr:
      "Yn gweithio ar nodweddion ac yn helpu mentora datblygwyr iau i ddatblygu’r profiad gorau i gwsmeriaid Interactive Investor.",
    end_date: "present",
    long_description: "angen ychwanegu",
    rol: "Peiriannydd Meddalwedd (Canolig)",
    role: "Mid level Software Engineer",
    shortDescription:
      "Working on features and helping mentor junior developers to develop the best experience for Interactive Investor customers.",
    start_date: "09/2024",
  },
  {
    company: "Interactive Investor",
    companyImg: "/experience/interactive_investor_logo.jpg",
    disgrifiadByr:
      "Gweithio ar ddatblygu gwefan gyda profiad gorau i cwsmeriaid Interactive Investor.",
    end_date: "09/2024",
    long_description:
      "I have worked in two squads. The most recent I have been working on content and research, working with third parties in providing data in the best possible way for our customers.I have also worked on the re-platform squad which are re-platforming part of the ii website to React from WebBroker.",
    rol: "Peiriannydd Meddalwedd (Junior)",
    role: "Junior Software Engineer",
    shortDescription:
      "Working on developing the best experience for Interactive Investor customers.",
    start_date: "08/2023",
  },
  {
    company: "Northcoders",
    companyImg: "/experience/northcoders_logo.jpg",
    disgrifiadByr:
      "Bootcamp mewn datblygu gwefannau. Express.js ar gyfer y API, a defnyddiwyd React ar gyfer y UI. Defnyddiodd y prosiect olaf Firebase a React Native i greu ap symudol.",
    end_date: "05/2023",
    rol: "Datblygwr Wê (Junior)",
    role: "Junior Web Developer",
    shortDescription:
      "Bootcamp in full stack web development. Express.js for backend and used react for frontend.  Final project used firebase and react native to create a mobile app.",
    start_date: "02/2023",
  },
  {
    company: "University of Bath",
    companyImg: "/experience/university_of_bath_logo.png",
    disgrifiadByr: " Cwrs bachelors mewn ffiseg gydag astroffiseg.",
    end_date: "07/2022",
    rol: "Myfyrwyr Ffiseg",
    role: "Physics Student",
    shortDescription: "Bachelors course in physics with astrophysics.",
    start_date: "09/2019",
  },
  {
    company: "University of Bath",
    companyImg: "/experience/university_of_bath_logo.png",
    disgrifiadByr:
      "Ymchwilio i sut y gallai Arduinos gael ei gynnwys yn y sesiynau labordy yn y brifysgol.",
    end_date: "09/2021",
    rol: "Ymchwiliwr",
    role: "Researcher",
    shortDescription:
      "Researching how Arduinos could be could be included in the laboratory sessions at the university.",
    start_date: "08/2021",
  },
  {
    company: "University of Bath",
    companyImg: "/experience/university_of_bath_logo.png",
    disgrifiadByr: "Helpu myfyrwyr ail flwyddyn yn eu sesiynnau labordy.",
    end_date: "12/2021",
    rol: "Arddangoswr Labordy",
    role: "Laboratory Demonstrator",
    shortDescription:
      "Helping second year students with their laboratory sessions.",
    start_date: "09/2021",
  },
];

export default EXPERIENCE;
