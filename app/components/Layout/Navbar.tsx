import WebsiteNavigation from "./WebsiteNavigation";

type Props = {
  lang?: "en" | "cy";
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
