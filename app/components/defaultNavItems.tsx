// components/layout/defaultNavItems.tsx
import React from "react";
import {
  CodeBracketIcon,
  DocumentIcon,
  HomeIcon,
  GlobeEuropeAfricaIcon,
} from "@heroicons/react/24/outline";
import { NavItem } from "./Sidebar";

export const defaultNavItems: NavItem[] = [
  {
    label: "Home",
    href: "/home",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Coding Projects",
    href: "/codingprojects",
    icon: <CodeBracketIcon className="w-6 h-6" />,
  },
  {
    label: "Experience",
    href: "/experience",
    icon: <DocumentIcon className="w-6 h-6" />,
  },
  {
    label: "Travel",
    href: "/travel",
    icon: <GlobeEuropeAfricaIcon className="w-6 h-6" />,
  },
];
