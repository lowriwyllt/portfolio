"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import styles from "./Sidebar.module.css";
import Button from "../Buttons/Button";
import WebsiteNavigation from "./WebsiteNavigation";
import langType from "@/app/constants/langType";
import Socials from "./Socials";

type Props = {
  lang?: langType;
};

const FOCUSABLE_ELEMENTS =
  "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])";

export const useSidebar = ({ lang = "en" }: Props) => {
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
            <WebsiteNavigation
              lang={lang}
              variation="sidebar"
              buttonVariant="secondaryOutline"
              onClick={onClose}
            />

            <Socials lang={lang} variant="sidebar" />
          </div>
        </div>
      </>
    ),
  };
};
