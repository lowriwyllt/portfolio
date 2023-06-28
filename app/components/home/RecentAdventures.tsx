import { merriweather } from "@/app/fonts";
import { fetchAdventures } from "@/database/database";

export default async function RecentAdventures() {
  const data = await fetchAdventures();
  return (
    <div className="p-2 flex flex-col items-center pr-[60px]">
      <h2 className={`${merriweather.className} mb-4`}>Recent Adventures</h2>
      <div className="w-full flex flex-col md:flex-row md:h-[70vh] min-h-[70vh] max-w-[1326px] md:w-4/5">
        {data.map((adventure) => {
          return (
            <div
              className={`flex justify-center items-center max-w-[70vh] grow hover:grow-[7] transition-flex duration-800 ease-in bg-cover bg-no-repeat bg-center`}
              style={{ backgroundImage: `url(${adventure.mainImg})` }}
            >
              <h3 className="absolute font-outline-2 drop-shadow-[0_0_10px_rgba(0,0,0,1)] font-bold text-[3em] md:rotate-90">
                {adventure.name}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
