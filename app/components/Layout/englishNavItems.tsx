// components/layout/englishNavItems.tsx
import React from "react";
import {
  CodeBracketIcon,
  DocumentIcon,
  HomeIcon,
  GlobeEuropeAfricaIcon,
} from "@heroicons/react/24/outline";
import { NavItem } from "./Sidebar";

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
