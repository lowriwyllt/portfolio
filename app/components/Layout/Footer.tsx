import Link from "next/link";
import { defaultNavItems } from "./defaultNavItems";
import { merriweather } from "@/app/fonts";

export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};
type Props = {
  navItems?: NavItem[];
};
const Footer = ({ navItems = defaultNavItems }: Props): JSX.Element => {
  return (
    <footer className="bg-darkPurple py-6  w-full relative z-40">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/3">
            <h3
              className={`text-lg font-semibold text-white ${merriweather.className}`}
            >
              Lowri Roberts
            </h3>
            <p className="text-white mt-2">Web Developer</p>
          </div>
          <div className="w-full md:w-2/3 flex flex-wrap justify-end items-center ">
            <nav className="w-full md:w-auto">
              <ul className="flex items-center justify-center space-x-4 ">
                {navItems.map((item, index) => {
                  return (
                    <li key={item.label}>
                      <Link
                        aria-label={item.label}
                        key={item.label}
                        href={item.href}
                        className="hover:text-darkPurple hover:bg-white text-white flex gap-4 items-center transition-colors duration-300 rounded-md p-2 mx-2"
                      >
                        <div className="block sm:hidden md:block">
                          {item.icon}
                        </div>
                        <div className="hidden sm:block">{item.label}</div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
