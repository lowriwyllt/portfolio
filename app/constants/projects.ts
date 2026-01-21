type projectType = {
  name: string;
  mainImg: string;
  shortDescription: string;
  enw: string;
  disgrifiadByr: string;
  dateStarted: string;
  dateEnded: string;
};

const PROJECTS: projectType[] = [
  {
    name: "Allotment",
    enw: "Allotment",
    shortDescription:
      "Your virtual gardening companion, helping you grow vegetables from scratch while providing expert guidance and resources",
    disgrifiadByr:
      "Gardd ar y ffon, yn eich helpu i dyfu llysiau o'r dechrau gan ddarparu arweinad arbennigol ac adnoddau.",
    mainImg: "/projects/allotment.jpeg",
    dateStarted: "27-04-2023",
    dateEnded: "15-05-2023",
  },
  {
    name: "Lowri Games",
    enw: "Lowri Games",
    shortDescription:
      "Embrace board game passion and connect with fellow enthusiasts through reviews, recommendations, and engaging discussions.",
    disgrifiadByr:
      "Mwynhau gemau bwrdd a chysylltu a eraill trwy adolygiadau, a thrafodaethau.",
    mainImg: "/projects/lowri_games.jpeg",
    dateStarted: "",
    dateEnded: "",
  },
  {
    name: "Nature Nurture",
    enw: "Maeth Natur",
    shortDescription:
      "Discover the beauty of foraged ingredients with our locally handcrafted lotions and balms, available on Etsy.",
    disgrifiadByr:
      "Darganfod prydferthwch cynhwysion a gasglwyd gyda'n loshionau a phalmau wedi'u creu â llaw yn lleol, sydd ar gael ar Etsy.",
    mainImg: "/projects/maeth_natur.jpeg",
    dateStarted: "18-05-2023",
    dateEnded: "still in progress",
  },
  {
    name: "Portfolio using NextJs",
    enw: "Portfolio yn defnyddio NextJs",
    shortDescription:
      "Elevating my online presence with a cutting-edge portfolio, leveraging the power and performance of Next.js for a seamless user experience.",
    disgrifiadByr:
      "Codir fy mhresenoldeb ar-lein gyda phortffolio arloesol, gan ddefnyddio grym ac effeithiolrwydd Next.js ar gyfer profiad defnyddiwr llyfn.",
    mainImg: "/projects/portfolio_next.jpeg",
    dateStarted: "",
    dateEnded: "",
  },
  {
    name: "Portfolio using react",
    enw: "Portfolio yn defnyddio react",
    shortDescription:
      "Showcasing my skills, projects, and accomplishments through a dynamic and interactive portfolio built with React.",
    disgrifiadByr:
      "Dangos fy ngalluoedd, prosiectau, a chyflawniadau drwy bortffolio deinamig a rhyngweithiol a adeiladwyd gyda React.",
    mainImg: "/projects/portfolio_react.jpeg",
    dateStarted: "",
    dateEnded: "",
  },
];

export default PROJECTS;
