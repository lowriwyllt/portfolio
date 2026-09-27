import { Metadata } from "next";
import AdventurePage from "@/app/components/Travel/AdventurePage";
import ADVENTURES from "@/app/constants/adventures";

export const generateStaticParams = () =>
  ADVENTURES.map((adventure) => ({ id: String(adventure.id) }));

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> => {
  const { id } = await params;
  const adventure = ADVENTURES.find((item) => item.id === Number(id));

  return {
    title: adventure
      ? `${adventure.enw} - Trafeilio - Lowri Roberts`
      : "Trafeilio - Lowri Roberts",
    description: adventure?.disgrifiadByr,
  };
};

const WelshTravelAdventure = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return <AdventurePage id={id} lang="cy" />;
};

export default WelshTravelAdventure;
