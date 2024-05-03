import React from "react";
import {
  CodeBracketIcon,
  DocumentIcon,
  HomeIcon,
  GlobeEuropeAfricaIcon,
} from "@heroicons/react/24/outline";

export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

export const englishNavItems: NavItem[] = [
  {
    label: "Home",
    href: "/en/home",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Coding Projects",
    href: "/en/codingprojects",
    icon: <CodeBracketIcon className="w-6 h-6" />,
  },
  {
    label: "Experience",
    href: "/en/experience",
    icon: <DocumentIcon className="w-6 h-6" />,
  },
  {
    label: "Travel",
    href: "/en/travel",
    icon: <GlobeEuropeAfricaIcon className="w-6 h-6" />,
  },
];

export const welshNavItems: NavItem[] = [
  {
    label: "Adra",
    href: "/cy/adra",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Prosiectau Codio",
    href: "/cy/prosiectaucodio",
    icon: <CodeBracketIcon className="w-6 h-6" />,
  },
  {
    label: "Profiad",
    href: "/cy/profiad",
    icon: <DocumentIcon className="w-6 h-6" />,
  },
  {
    label: "Trafeilio",
    href: "/cy/trafeilio",
    icon: <GlobeEuropeAfricaIcon className="w-6 h-6" />,
  },
];
