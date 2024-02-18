import { merriweather } from "@/app/fonts";
import { myTechStack } from "./myTechStack";

export default function TechStack({
  language = "english",
}: {
  language?: string;
}): JSX.Element {
  return (
    <div className="p-2 flex flex-col items-center pr-[60px]">
      <h2 className={`${merriweather.className} mb-4`}>
        {language === "welsh" ? "Stac Techengol" : "Tech Stack"}
      </h2>
      <div className="w-4/5 flex flex-row flex-wrap gap-8 justify-center">
        {myTechStack.map((tech) => {
          return (
            <div
              key={tech.label}
              className="transition-transform duration-300 ease-in-out transform hover:scale-110 flex flex-col justify-center items-center"
            >
              <svg
                viewBox="0 0 128 128"
                aria-label={`${tech.label} Icon`}
                className="h-20 drop-shadow-icon"
              >
                {tech.icon}
              </svg>
              <p>{tech.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
