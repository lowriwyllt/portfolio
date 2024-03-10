export default function UnderConstruction({
  language = "english",
}: {
  language?: string;
}): JSX.Element {
  return (
    <div className="w-full absolute top-72">
      <p className="font-bold text-3xl text-center relative -top-16">
        {language === "welsh"
          ? "Dal yn cael ei osod"
          : "Still under construction"}
      </p>
      <p className="text-xl text-center relative -top-16">
        {language === "welsh"
          ? "Yn y cyfamser gwelwch : "
          : "In the mean time, have a look at :"}{" "}
      </p>
      <div className="flex justify-center">
        <a
          href="https://lowriroberts.netlify.app/"
          className="text-xl relative -top-16 text-darkPurple"
        >
          {language === "welsh" ? "hen bortfolio fi" : "my old portfolio"}
        </a>
      </div>
      <div>
        <div
          className="rotate-12"
          style={{
            height: "30px",
            width: "100%",
            color: "white",
            padding: "5px",
            backgroundImage:
              "repeating-linear-gradient(-55deg, #000, #000 20px, #ffb101 20px, #ffb101 40px)",
          }}
        ></div>
        <div
          className="-rotate-12"
          style={{
            height: "30px",
            width: "100%",
            color: "white",
            padding: "5px",
            backgroundImage:
              "repeating-linear-gradient(-55deg, #000, #000 20px, #ffb101 20px, #ffb101 40px)",
          }}
        ></div>
      </div>
    </div>
  );
}
