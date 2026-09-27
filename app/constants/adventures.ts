type CityMap = {
  [country: string]: string[];
};

type AreaMap = {
  [continent: string]: CityMap;
};

type People =
  | "Sam F"
  | "Sam H"
  | "Tom"
  | "George Bell"
  | "mam"
  | "Ruairidh"
  | "George"
  | "Sophie"
  | "Anastasia"
  | "Clare"
  | "Harry"
  | "Rhianon"
  | "Jon"
  | "Yr Urdd"
  | "nain"
  | "Alex"
  | "Lousie"
  | "Gwenlli";

type adventureType = {
  id: number;
  name: string;
  enw: string;
  mainImg?: string[];
  shortDescription: string;
  with: People[];
  time:
    | {
        start: string;
        end: string;
      }
    | { year: number };
  areas: AreaMap;
  ardaloedd: AreaMap;
  disgrifiadByr: string;
};

const adventures: adventureType[] = [
  {
    id: 1,
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
    with: ["Sam F", "Sam H", "Tom", "George Bell"],
    time: {
      start: "2022-07-26",
      end: "2022-10-22",
    },
  },
  {
    id: 2,
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
    with: ["mam"],
    time: {
      start: "2017-06-23",
      end: "2017-07-04",
    },
  },
  {
    id: 3,
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
    with: ["Ruairidh", "George Bell"],
    time: {
      start: "2022-03-03",
      end: "2022-03-06",
    },
  },
  {
    id: 4,
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

    with: ["mam"],
    time: {
      start: "2022-11-25",
      end: "2022-12-04",
    },
  },
  {
    id: 5,
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

    with: ["mam"],
    time: {
      start: "2019-06-29",
      end: "2019-07-20",
    },
  },
  {
    id: 6,
    name: "Faro",
    enw: "Faro",
    areas: {
      Europe: {
        Portugal: ["Faro"],
      },
    },
    ardaloedd: {
      Ewrop: {
        Portiwgal: ["Faro"],
      },
    },
    shortDescription:
      "Catch up with uni friends whilst enjoying the beach and some sun!",
    disgrifiadByr:
      "Dal fyny hefo ffrindiau o coleg tra yn mwynhau y traeth a'r haul!",
    with: ["George", "Tom", "Sam H", "Sophie", "Ruairidh", "Anastasia"],
    time: {
      start: "2026-09-04",
      end: "2026-09-13",
    },
  },
  {
    id: 7,
    name: "Vietnam",
    enw: "Vietnam",
    areas: {
      Asia: {
        Vietnam: ["??"],
      },
    },
    ardaloedd: {
      Asia: {
        Vietnam: ["??"],
      },
    },
    shortDescription: "A bit of travelling around Vietnam with my mam",
    disgrifiadByr: "Ychydig o trafeilio o gwmpas vietnam hefo fy mam",
    time: {
      start: "2024-12-24",
      end: "2025-01-16",
    },
    with: ["mam"],
  },
  {
    id: 8,
    name: "Austria",
    enw: "Awstria",
    areas: {
      Europe: {
        Austria: ["??"],
      },
    },
    ardaloedd: {
      Ewrop: {
        Awstria: ["??"],
      },
    },
    shortDescription: "Skiing holiday with George and his parents",
    disgrifiadByr: "Holides sgio hefo George a'i rhieni",
    time: {
      start: "2025-03-01",
      end: "2025-03-08",
    },
    with: ["George", "Clare", "Harry"],
  },
  {
    id: 9,
    name: "Budapest",
    enw: "Budapest",
    areas: {
      Europe: {
        Hungary: ["Budapest"],
      },
    },
    ardaloedd: {
      Ewrop: {
        Hwngari: ["Budapest"],
      },
    },
    shortDescription: "Catch uni with uni friends in Budapest",
    disgrifiadByr: "Dal fyny hefo ffrindiau coleg yn Budapest",
    time: {
      start: "2025-10-08",
      end: "2025-10-14",
    },
    with: ["George", "Ruairidh", "Sam H", "Rhianon"],
  },
  {
    id: 20,
    name: "Amsterdam",
    enw: "Amsterdam",
    areas: {
      Europe: {
        Netherlands: ["Amsterdam"],
      },
    },
    ardaloedd: {
      Ewrop: {
        "Yr Iseldiroedd": ["Amsterdam"],
      },
    },
    shortDescription: "Catch uni with uni friends in Amsterdam",
    disgrifiadByr: "Dal fyny hefo ffrindiau coleg yn Amsterdam",
    time: {
      start: "2024-01-31",
      end: "2024-02-05",
    },
    with: ["Ruairidh", "Sam H", "Rhianon", "Tom", "George Bell"],
  },
  {
    id: 10,
    name: "Sicily",
    enw: "Sicily",
    areas: {
      Europe: {
        Italy: ["Catania", "Taormina"],
      },
    },
    ardaloedd: {
      Ewrop: {
        "Yr Eidal": ["Catania", "Taormina"],
      },
    },
    shortDescription: "Catch up and spend some time exploring Silily",
    disgrifiadByr: "Dal fyny a gwario amser yn Sicily",
    time: {
      start: "2024-09-24",
      end: "2024-10-04",
    },
    with: ["Jon"],
  },
  {
    id: 11,
    name: "Krakow",
    enw: "Krakow",
    areas: {
      Europe: {
        Poland: ["Krakow"],
      },
    },
    ardaloedd: {
      Ewrop: {
        "Gwlad Pwyl": ["Krakow"],
      },
    },
    shortDescription: "Catch up with uni friends",
    disgrifiadByr: "Dal fyny hefo ffrindiau coleg",
    time: {
      start: "2024-07-10",
      end: "2024-07-15",
    },
    with: ["Ruairidh", "Sam H", "Rhianon"],
  },
  {
    id: 12,
    name: "Paphos",
    enw: "Paphos",
    areas: {
      Europe: {
        Greece: ["Paphos"],
      },
    },
    ardaloedd: {
      Ewrop: {
        "Gwlad Groeg": ["Paphos"],
      },
    },
    shortDescription: "Chill",
    disgrifiadByr: "Chilio allan",
    time: {
      start: "2023-11-11",
      end: "2023-11-18",
    },
    with: ["mam"],
  },
  {
    id: 13,
    name: "La Ciotat",
    enw: "La Ciotat",
    areas: {
      Europe: {
        France: ["La Ciotat"],
      },
    },
    ardaloedd: {
      Ewrop: {
        Ffrainc: ["La Ciotat"],
      },
    },
    shortDescription: "Chill",
    disgrifiadByr: "Chilio allan",
    time: { start: "2016-08-17", end: "2016-08-22" },
    with: ["mam"],
  },
  {
    id: 14,
    name: "New York and Washington DC",
    enw: "Efrog Newydd a Washington DC",
    areas: {
      "North America": {
        "United States": ["New York", "Philidelphia", "Washington DC"],
      },
    },
    ardaloedd: {
      "Gogledd America": {
        "Unol Daleithau": ["Efrog Newydd", "Philidelphia", "Washington DC"],
      },
    },
    shortDescription: "Trip to New York and Washington DC with school",
    disgrifiadByr: "Trip i Efrog Newydd a Washington DC hefo ysgol",
    time: {
      start: "2015-03-10",
      end: "2015-03-15",
    },
    with: [],
  },
  {
    id: 15,
    name: "New Zealand and Australia",
    enw: "Seland Newydd a Awstralia",
    areas: {
      Oceania: {
        "New Zealand": [
          "Auckland",
          "Hahei",
          "Wellington",
          "Kaikoura",
          "Methven",
          "Queenstown",
          "Akaroa",
          "Christchurch",
        ],
        Australia: ["Sydney", "Corrowa"],
      },
    },
    ardaloedd: {
      Oceania: {
        "Seland Newydd": [
          "Auckland",
          "Hahei",
          "Wellington",
          "Kaikoura",
          "Methven",
          "Queenstown",
          "Akaroa",
          "Christchurch",
        ],
        Awstralia: ["Sydney", "Corrowa"],
      },
    },
    shortDescription: "Trip to New Zealand and Australia",
    disgrifiadByr: "Trip i Seland Newydd a Awstralia",
    time: {
      start: "2014-11-28",
      end: "2015-01-01",
    },
    with: ["mam", "Alex", "Lousie", "Gwenlli"],
  },
  {
    id: 16,
    name: "Barcelona",
    enw: "Barcelona",
    areas: {
      Europe: {
        Spain: ["Barcelona"],
      },
    },
    ardaloedd: {
      Ewrop: {
        Sbaen: ["Barcelona"],
      },
    },
    shortDescription: "Visiting Barcelona",
    disgrifiadByr: "Ymweld a Barcelona",
    time: {
      start: "2014-02-22",
      end: "2014-02-26",
    },
    with: ["mam", "nain"],
  },
  {
    id: 17,
    name: "Koppenhagen",
    enw: "Koppenhagen",
    areas: {
      Europe: {
        Denmark: ["Koppenhagen"],
      },
    },
    ardaloedd: {
      Ewrop: {
        Denmarc: ["Koppenhagen"],
      },
    },
    shortDescription: "Visiting Koppenhagen",
    disgrifiadByr: "Ymweld a Koppenhagen",
    time: {
      year: 2014,
    },
    with: ["mam"],
  },
  {
    id: 21,
    name: "Paris",
    enw: "Paris",
    areas: {
      Europe: {
        France: ["Paris"],
      },
    },
    ardaloedd: {
      Ewrop: {
        Ffrainc: ["Paris"],
      },
    },
    shortDescription: "Visiting Paris",
    disgrifiadByr: "Ymweld a Paris",
    time: {
      year: 2014,
    },
    with: ["mam"],
  },
  {
    id: 18,
    name: "Paris",
    enw: "Paris",
    areas: {
      Europe: {
        France: ["Paris"],
      },
    },
    ardaloedd: {
      Ewrop: {
        Ffrainc: ["Paris"],
      },
    },
    shortDescription: "Visiting Paris",
    disgrifiadByr: "Ymweld a Paris",
    time: {
      year: 2014,
    },
    with: ["Yr Urdd"],
  },
];

const getAdventureSortDate = (adventure: adventureType): number =>
  "start" in adventure.time
    ? Date.parse(adventure.time.start)
    : Date.UTC(adventure.time.year, 0, 1);

const ADVENTURES = adventures.sort(
  (a, b) => getAdventureSortDate(b) - getAdventureSortDate(a)
);

export default ADVENTURES;
