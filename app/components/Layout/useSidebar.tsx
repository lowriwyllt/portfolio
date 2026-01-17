"use client";

import { NavItem } from "@/app/constants/navItems";
import {
  Bars3Icon,
  EnvelopeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./Sidebar.module.css";
import Button from "../Buttons/Button";

type Props = {
  navItems: NavItem[];
  language?: "english" | "welsh";
};

const FOCUSABLE_ELEMENTS =
  "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])";

export const useSidebar = ({ navItems, language = "english" }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const onOpen = () => setIsOpen(true);

  const onClose = () => {
    setIsOpen(false);
    // Return focus to trigger button for keyboard navigation
    setTimeout(() => {
      triggerButtonRef.current?.focus();
    }, 100);
  };

  // Focus management and body scroll lock
  useEffect(() => {
    if (isOpen) {
      // Lock body scroll
      document.body.style.overflow = "hidden";

      // Focus first element (close button)
      closeButtonRef.current?.focus();

      // Set main content to inert/hidden for screen readers
      const mainContent = document.querySelector("main");
      if (mainContent) {
        mainContent.setAttribute("aria-hidden", "true");
        mainContent.setAttribute("inert", "");
      }
    } else {
      // Restore body scroll
      document.body.style.overflow = "";

      // Restore main content
      const mainContent = document.querySelector("main");
      if (mainContent) {
        mainContent.removeAttribute("aria-hidden");
        mainContent.removeAttribute("inert");
      }
    }

    return () => {
      document.body.style.overflow = "";
      const mainContent = document.querySelector("main");
      if (mainContent) {
        mainContent.removeAttribute("aria-hidden");
        mainContent.removeAttribute("inert");
      }
    };
  }, [isOpen]);

  // Focus trap
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
      return;
    }

    if (e.key === "Tab") {
      const focusableElements =
        sidebarRef.current?.querySelectorAll(FOCUSABLE_ELEMENTS);
      if (!focusableElements || focusableElements.length === 0) return;

      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      // Shift + Tab on first element -> go to last
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
      // Tab on last element -> go to first
      else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  };

  // Handle overlay click with keyboard support
  const handleOverlayInteraction = (
    e: React.MouseEvent | React.KeyboardEvent,
  ) => {
    if ("key" in e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClose();
      }
    } else {
      onClose();
    }
  };

  return {
    Button: () => (
      <Button
        // TODO: figure out why it doesn't like ref
        // ref={triggerButtonRef}
        className={styles.menuButton}
        onClick={onOpen}
        ariaLabel="Open navigation menu"
        variant="primarySubtle"
        aria-expanded={isOpen}
        aria-controls="sidebar-navigation"
      >
        <Bars3Icon className={styles.icon} />
      </Button>
    ),
    Sidebar: () => (
      <>
        <div
          className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
          onClick={handleOverlayInteraction}
          onKeyDown={handleOverlayInteraction}
          role="button"
          tabIndex={-1}
          aria-label="Close navigation menu"
          aria-hidden={!isOpen}
        />

        <div
          id="sidebar-navigation"
          ref={sidebarRef}
          className={`${styles.drawer} ${isOpen ? styles.open : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label="Main navigation"
          onKeyDown={handleKeyDown}
          hidden={!isOpen}
        >
          <button
            ref={closeButtonRef}
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <XMarkIcon className={styles.icon} />
          </button>

          <div className={styles.drawerBody}>
            <nav className={styles.nav} aria-label="Primary navigation">
              {navItems.map((item) => (
                <Link
                  href={item.href}
                  aria-label={item.label}
                  key={item.label}
                  onClick={onClose}
                  className={styles.navButton}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            <div className={styles.socialLinks} aria-label="Social media links">
              <a
                href="https://github.com/lowriwyllt"
                aria-label="Visit Lowri Roberts' GitHub profile"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className={styles.navButton}
              >
                <Image
                  src="/github-mark.png"
                  width={21}
                  height={21}
                  alt=""
                  className={styles.iconShadow}
                />
                <span>Github</span>
              </a>

              <a
                href="https://www.linkedin.com/in/lowri-gwenllian-roberts/"
                aria-label="Visit Lowri Roberts' LinkedIn profile"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className={styles.navButton}
              >
                <Image
                  src="/LI-In-Bug.png"
                  width={21}
                  height={21}
                  alt=""
                  className={styles.iconShadow}
                />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:lowri.g.roberts@hotmail.com"
                aria-label="Send an email to Lowri Roberts"
                onClick={onClose}
                className={styles.navButton}
              >
                <EnvelopeIcon className={styles.icon} />
                <span>
                  {language === "welsh" ? "E-bostiwch fi" : "Email me"}
                </span>
              </a>
            </div>
          </div>
        </div>
      </>
    ),
  };
};
