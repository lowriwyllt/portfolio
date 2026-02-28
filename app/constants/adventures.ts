type adventureType = {
  name: string;
  enw: string;
  mainImg: string[];
  shortDescription: string;
  duration: string;
  with: string[];
  year: number;
};

const ADVENTURES: adventureType[] = [
  {
    name: "Europe",
    enw: "Ewrop",
    mainImg: ["/adventures/Europe2019.png"],
    shortDescription:
      "Travelling after university with George. Sam F coming to meet us from La Ciotat to Verona. Sam H and Tom coming to meet us from Venice to Rome.",
    duration: "90 days",
    with: ["Sam F", "Sam H", "Tom", "George Bell"],
    year: 2022,
  },
  {
    name: "Kefalonia",
    enw: "Kefalonia",
    mainImg: ["/adventures/Kefalonia2017.png"],
    shortDescription: "holiday with my mam.",
    duration: "11 days",
    with: ["my mam"],
    year: 2017,
  },
  {
    name: "Milan",
    enw: "Milan",
    mainImg: ["/adventures/Milan2022.png"],
    shortDescription: "Long weekend trip to Milan to explore a new city.",
    duration: "4 days",
    with: ["Ruairidh", "George Bell"],
    year: 2022,
  },
  {
    name: "Morocco",
    enw: "Morocco",
    mainImg: ["/adventures/Morocco2022.png"],
    shortDescription: "Spend some time exploring a new country with my mother!",
    duration: "10 days",
    with: ["my mam"],
    year: 2022,
  },
  {
    name: "Portugal",
    enw: "Portiwgal",
    mainImg: ["/adventures/Portugal2019.png"],
    shortDescription:
      "My first solo travel exerience staying in hostels and meeting amazing people from all over!",
    duration: "21 days",
    with: ["my mam"],
    year: 2019,
  },
];

export default ADVENTURES;
