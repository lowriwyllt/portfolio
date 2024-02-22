import { merriweather } from "@/app/fonts";
import { fetchAdventures, adventureType } from "@/database/database";

export default async function RecentAdventures({
  language = "english",
}: {
  language?: string;
}) {
  const data: adventureType[] = await fetchAdventures();
  return (
    <div className="p-2 flex flex-col items-center pr-[60px]">
      <h2 className={`${merriweather.className} mb-4`}>Recent Adventures</h2>
      <div className="w-full flex flex-col md:flex-row md:h-[70vh] min-h-[70vh] max-w-[1326px] md:w-4/5">
        {data.map((adventure) => {
          return (
            <div
              aria-label={adventure.name}
              key={adventure.name}
              className={"flex justify-center items-center max-w-[70vh] grow hover:grow-[7] transition-flex duration-800 ease-in bg-cover bg-no-repeat bg-center"}
              style={{
                backgroundImage: `url(${adventure.mainImg[1]})`,
              }}
            >
              <h3 className="absolute font-outline-2 drop-shadow-[0_0_10px_rgba(0,0,0,1)] font-bold text-[3em] md:rotate-90">
                {language === "welsh" ? adventure.enw : adventure.name}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
