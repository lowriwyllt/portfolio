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
    mainImg: [
      "https://firebasestorage.googleapis.com/v0/b/lowri-roberts.appspot.com/o/Travel%2FEurope%202022%2Fimage.avif?alt=media&token=315efea2-2609-442a-afbc-062406d73a35",
      "https://firebasestorage.googleapis.com/v0/b/lowri-roberts.appspot.com/o/Travel%2FEurope%202022%2F59454301-DB11-440E-8194-005A88FE604D.jpeg?alt=media&token=9b4670f5-73cb-46e8-8788-84a425a664c1",
    ],
    shortDescription:
      "Travelling after university with George. Sam F coming to meet us from La Ciotat to Verona. Sam H and Tom coming to meet us from Venice to Rome.",
    duration: "90 days",
    with: ["Sam F", "Sam H", "Tom", "George Bell"],
    year: 2022,
  },
  {
    name: "Kefalonia",
    enw: "Kefalonia",
    mainImg: [
      "https://firebasestorage.googleapis.com/v0/b/lowri-roberts.appspot.com/o/Travel%2FKefalonia%202017%2Fimage%20(1).avif?alt=media&token=01546471-bff4-4d8f-9a18-d7556f855d23",
      "https://firebasestorage.googleapis.com/v0/b/lowri-roberts.appspot.com/o/Travel%2FKefalonia%202017%2FEB5DAE3C-E4A2-4433-9119-F1F958131FB9.jpeg?alt=media&token=dd2e905b-86fb-4800-a56b-d4fb138c102e",
    ],
    shortDescription: "holiday with my mam.",
    duration: "11 days",
    with: ["my mam"],
    year: 2017,
  },
  {
    name: "Milan",
    enw: "Milan",
    mainImg: [
      "https://firebasestorage.googleapis.com/v0/b/lowri-roberts.appspot.com/o/Travel%2FMilan%202022%2Fimage%20(2).avif?alt=media&token=44c66f33-1c46-4341-b9a6-4139c4dd8778",
      "https://firebasestorage.googleapis.com/v0/b/lowri-roberts.appspot.com/o/Travel%2FMilan%202022%2F3BF8249B-69FF-41A9-B13D-228A6B28A33D.jpeg?alt=media&token=44b64807-2e85-4be4-b95d-b93a9f5f1055",
    ],
    shortDescription: "Long weekend trip to Milan to explore a new city.",
    duration: "4 days",
    with: ["Ruairidh", "George Bell"],
    year: 2022,
  },
  {
    name: "Morocco",
    enw: "Morocco",
    mainImg: [
      "https://firebasestorage.googleapis.com/v0/b/lowri-roberts.appspot.com/o/Travel%2FMorrocco%202022%2Fimage%20(3).avif?alt=media&token=e1c1f400-2ea2-4439-9891-9ff25ccfa3fa",
      "https://firebasestorage.googleapis.com/v0/b/lowri-roberts.appspot.com/o/Travel%2FMorrocco%202022%2FBAB19FFA-3173-4745-89EB-E45558E83180.jpeg?alt=media&token=df18f9e7-d94d-4639-b991-5504840d0982",
    ],
    shortDescription: "Spend some time exploring a new country with my mother!",
    duration: "10 days",
    with: ["my mam"],
    year: 2022,
  },
  {
    name: "Portugal",
    enw: "Portiwgal",
    mainImg: [
      "https://firebasestorage.googleapis.com/v0/b/lowri-roberts.appspot.com/o/Travel%2FPortugal%202019%2Fimage%20(4).avif?alt=media&token=85700ec4-cd7a-43ed-a8ef-9eb58ef6aee0",
      "https://firebasestorage.googleapis.com/v0/b/lowri-roberts.appspot.com/o/Travel%2FPortugal%202019%2F929D6A4A-70A2-4027-9D50-6062541D2CED.jpeg?alt=media&token=26554720-1f22-4409-b1f0-96bf09de9580",
    ],
    shortDescription:
      "My first solo travel exerience staying in hostels and meeting amazing people from all over!",
    duration: "21 days",
    with: ["my mam"],
    year: 2019,
  },
];

export default ADVENTURES;
