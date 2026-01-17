import langType from "@/app/constants/langType";
import WebsiteNavigation from "./WebsiteNavigation";

type Props = {
  lang?: langType;
  SidebarButton: React.FC;
};

const Navbar = ({ lang = "en", SidebarButton }: Props) => {
  return (
    <>
      <WebsiteNavigation
        lang={lang}
        variation="header"
        buttonVariant="primarySubtle"
      />
      <SidebarButton />
    </>
  );
};
export default Navbar;
