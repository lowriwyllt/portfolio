type CityMap = {
  [country: string]: string[];
};

type AreaMap = {
  [continent: string]: CityMap;
};

type adventureType = {
  name: string;
  enw: string;
  mainImg: string[];
  shortDescription: string;
  duration: string;
  with: string[];
  year: number;
  areas: AreaMap;
  ardaloedd: AreaMap;
  disgrifiadByr: string;
};

const adventures: adventureType[] = [
  {
    name: "Europe",
    enw: "Ewrop",
    areas: {
      Europe: {
        Portugal: ["Faro", "Lisbon", "Sintra", "Porto"],
        Spain: ["Pontevedra", "Madrid", "Barcelona"],
        France: ["Nimes", "Marseille", "Nice"],
        Italy: [
          "Genoa",
          "La Spezia",
          "Milan",
          "Como",
          "Bellagio",
          "Verona",
          "Venice",
          "Bologna",
          "Florence",
          "Rome",
          "Naples",
          "Sorrento",
          "Capri",
        ],
        Greece: ["Rhodes", "Symi"],
      },
    },
    ardaloedd: {
      Ewrop: {
        Portiwgal: ["Faro", "Lisbon", "Sintra", "Porto"],
        Sbaen: ["Pontevedra", "Madrid", "Barcelona"],
        Ffrainc: ["Nimes", "Marseille", "Nice"],
        "Yr Eidal": [
          "Genoa",
          "La Spezia",
          "Milan",
          "Como",
          "Bellagio",
          "Verona",
          "Venice",
          "Bologna",
          "Florence",
          "Rome",
          "Naples",
          "Sorrento",
          "Capri",
        ],
        "Gwlad Groeg": ["Rhodes", "Symi"],
      },
    },
    mainImg: ["/adventures/Europe2019.png"],
    shortDescription:
      "Travelling after university with George. Sam F coming to meet us from La Ciotat to Verona. Sam H and Tom coming to meet us from Venice to Rome.",
    disgrifiadByr:
      "Teithio ar ôl y brifysgol gyda George. Sam F yn dod i gwrdd â ni o La Ciotat i Verona. Sam H a Tom yn dod i gwrdd â ni o Venice i Rome.",
    duration: "90 days",
    with: ["Sam F", "Sam H", "Tom", "George Bell"],
    year: 2022,
  },
  {
    name: "Kefalonia",
    enw: "Kefalonia",
    areas: {
      Europe: {
        Greece: ["Kefalonia"],
      },
    },
    ardaloedd: {
      Ewrop: {
        "Gwlad Groeg": ["Kefalonia"],
      },
    },
    mainImg: ["/adventures/Kefalonia2017.png"],
    shortDescription:
      "Relaxing holiday with my mam, going around this lovely island - although it being a heat wave!",
    disgrifiadByr:
      "Gwyliau ymlacio gyda fy mam, yn mynd o gwmpas y ynys hyfryd hon - er bod hi'n 'heat wave'!",
    duration: "11 days",
    with: ["mam"],
    year: 2017,
  },
  {
    name: "Milan",
    enw: "Milan",
    areas: {
      Europe: {
        Italy: ["Milan"],
      },
    },
    ardaloedd: {
      Ewrop: {
        "Yr Eidal": ["Milan"],
      },
    },
    mainImg: ["/adventures/Milan2022.png"],
    shortDescription: "Long weekend trip to Milan to explore a new city.",
    disgrifiadByr: "Penwythnos hir i Milan i gweld dinas newydd.",
    duration: "4 days",
    with: ["Ruairidh", "George Bell"],
    year: 2022,
  },
  {
    name: "Morocco",
    enw: "Morocco",
    areas: {
      Africa: {
        Morocco: ["Marrakech", "Essaouira"],
      },
    },
    ardaloedd: {
      Affrica: {
        Morocco: ["Marrakech", "Essaouira"],
      },
    },
    mainImg: ["/adventures/Morocco2022.png"],
    shortDescription: "Spend some time exploring a new country with my mother!",
    disgrifiadByr: "Treulio amser yn mynd o gwmpas gwlad newydd gyda fy mam!",
    duration: "10 days",
    with: ["mam"],
    year: 2022,
  },
  {
    name: "Portugal",
    enw: "Portiwgal",
    areas: {
      Europe: {
        Portugal: ["Faro", "Lisbon", "Sintra", "Porto"],
      },
    },
    ardaloedd: {
      Ewrop: {
        Portiwgal: ["Faro", "Lisbon", "Sintra", "Porto"],
      },
    },
    mainImg: ["/adventures/Portugal2019.png"],
    shortDescription:
      "My first solo travel exerience staying in hostels and meeting amazing people from all over!",
    disgrifiadByr:
      "Fy mhrofiad teithio unigol cyntaf yn aros mewn hosteli a chwrdd â phobl anhygoel o bob man!",
    duration: "21 days",
    with: ["mam"],
    year: 2019,
  },
];

const ADVENTURES = adventures.sort((a, b) => b.year - a.year);

export default ADVENTURES;
