import React, { useRef, useEffect, useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { defaultNavItems } from "./defaultNavItems";
import { useOnClickOutside } from "usehooks-ts";
import { Bars3Icon, EnvelopeIcon } from "@heroicons/react/24/outline";

export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

type Props = {
  open: boolean;
  navItems?: NavItem[];
  setOpen(open: boolean): void;
  onMenuButtonClick(): void;
};

const Sidebar = ({
  open,
  navItems = defaultNavItems,
  setOpen,
  onMenuButtonClick,
}: Props): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, (e: MouseEvent | TouchEvent) => {
    setOpen(false);
  });

  return (
    <div
      className={classNames({
        "flex flex-col justify-between fixed z-30": true,
        "text-white bg-lilac md:bg-transparent": true,
        "top-0 right-14 ": true,
        "h-[calc(100vh)] w-[300px]": true,
        "transition-transform .3s ease-in-out md:translate-x-full": true,
        "translate-x-full": !open,
        "translate-x-14": open,
      })}
      ref={ref}
    >
      <div className="h-[100px]">
        <div className="flex flex-grow flex-row justify-start h-full">
          <ul className="py-2 flex flex-col gap-2 items-center justify-center h-full ">
            <li className="flex  items-center justify-center h-full transition-colors duration-300 md:hidden">
              <button
                aria-label="Menu"
                onClick={onMenuButtonClick}
                className="rounded-md p-2 mx-2"
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-grow flex-col justify-between">
        <nav>
          <ul className="py-2 flex flex-col gap-2 md:hidden">
            {navItems.map((item, index) => {
              return (
                <li key={item.label} onClick={() => setOpen(false)}>
                  <Link
                    className=" hover:bg-darkPurple flex gap-4 items-center transition-colors duration-300 rounded-md p-2 mx-2"
                    aria-label={item.label}
                    key={index}
                    href={item.href}
                  >
                    {item.icon} {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <ul className="py-2 flex flex-col gap-2">
          <li onClick={() => setOpen(false)}>
            <a
              href="https://github.com/lowriwyllt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github for Lowri Roberts"
              className="md:bg-lilac  hover:bg-darkPurple flex gap-4 items-center transition-colors duration-300 rounded-md p-2 mx-2"
            >
              <Image
                src="/github-mark.png"
                width="21"
                height="21"
                alt="Github logo"
                className="h-6 w-6"
              />
              <p>Github</p>
            </a>
          </li>
          <li onClick={() => setOpen(false)}>
            <a
              className="md:bg-lilac  hover:bg-darkPurple flex gap-4 items-center  transition-colors duration-300 rounded-md p-2 mx-2"
              href="https://www.linkedin.com/in/lowri-gwenllian-roberts/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn for Lowri Roberts"
            >
              <Image
                src="/LI-In-Bug.png"
                width="21"
                height="21"
                alt="LinkedIn logo"
                className="h-6 w-6"
              />

              <p>LinkedIn</p>
            </a>
          </li>
          <li onClick={() => setOpen(false)}>
            <a
              className="md:bg-lilac hover:bg-darkPurple flex gap-4 items-center transition-colors duration-300 rounded-md p-2 mx-2"
              href="mailto:lowri.g.roberts@hotmail.com"
              aria-label="Email Lowri Roberts"
            >
              <EnvelopeIcon className="h-6 w-6" />

              <p>Email me</p>
            </a>
          </li>
        </ul>
      </div>
      <div className={`md:h-[108px] h-[148px] `}></div>
    </div>
  );
};
export default Sidebar;
