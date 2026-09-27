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
      ? `${adventure.name} - Travel - Lowri Roberts`
      : "Travel - Lowri Roberts",
    description: adventure?.shortDescription,
  };
};

const TravelAdventure = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return <AdventurePage id={id} />;
};

export default TravelAdventure;
