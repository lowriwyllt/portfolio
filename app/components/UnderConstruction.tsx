export default function UnderConstruction(): JSX.Element {
  return (
    <div className="w-full absolute top-72">
      <p className="font-bold text-3xl text-center relative -top-16">
        Still under construction
      </p>
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
  );
}
