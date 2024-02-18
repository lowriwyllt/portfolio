// components/layout/welshNavItems.tsx
import React from "react";
import {
  CodeBracketIcon,
  DocumentIcon,
  HomeIcon,
  GlobeEuropeAfricaIcon,
} from "@heroicons/react/24/outline";
import { NavItem } from "./Sidebar";

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
