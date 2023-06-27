import { fetchProjects } from "@/database/database";
import Image from "next/image";

export default async function RecentProjects() {
  const data = await fetchProjects();
  return (
    <div className="p-2 flex flex-col items-center pr-[60px]">
      <h2>Recent Projects</h2>
      <div className="max-w-[1326px] w-full md:w-4/5 flex flex-row flex-wrap gap-4 justify-center">
        {data.map((project: any) => {
          return (
            <div
              key={project.name}
              className="relative inline-block group rounded-3xl max-w-[320px] w-5/12"
            >
              <Image
                src={project.mainImg}
                alt={`Main image of ${project.name}`}
                width={320}
                height={320}
                className="rounded-3xl"
              />
              <div className="relative -top-6 md:top-auto md:absolute md:bottom-0 md:left-0 w-full min-h-1/4 md:bg-black bg-darkPurple bg-opacity-100 md:bg-opacity-75 md:opacity-0 opacity-100 group-hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-b-3xl p-2">
                <h3>{project.name}</h3>
                <p>{project.shortDescription}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
