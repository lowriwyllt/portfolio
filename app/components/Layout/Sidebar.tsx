"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  useDialog,
  useOverlay,
  usePreventScroll,
  useModal,
  FocusScope,
  OverlayContainer,
  AriaDialogProps,
} from "react-aria";
import { useOverlayTriggerState } from "react-stately";
import Button from "../Buttons/Button";
import { Bars3Icon } from "@heroicons/react/24/outline";
import styles from "./Sidebar.module.css";
import WebsiteNavigation from "./WebsiteNavigation";
import langType from "@/app/constants/langType";
import Socials from "./Socials";
import LanguageToggle from "./LanguageToggle";

interface ModalDialogProps extends AriaDialogProps {
  lang: langType;
  isOpen: boolean;
  onClose: () => void;
}

function SidebarModalDialog({
  lang = "en",
  isOpen,
  onClose,
  ...props
}: ModalDialogProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isEntering, setIsEntering] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsEntering(false);
    });
  }, []);

  const handleClose = () => {
    setIsExiting(true);

    setTimeout(() => {
      onClose();
    }, 700);
  };

  const { overlayProps, underlayProps } = useOverlay(
    {
      isOpen,
      onClose: handleClose,
      isDismissable: true,
    },
    ref,
  );

  const { modalProps } = useModal();
  const { dialogProps } = useDialog(props, ref);
  usePreventScroll();

  return (
    <OverlayContainer>
      <div
        {...underlayProps}
        className={`${styles.overlay} ${!isEntering && !isExiting ? styles.overlayVisible : ""}`}
      />

      <FocusScope contain restoreFocus autoFocus>
        <div
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          ref={ref}
          className={`${styles.drawer} ${!isEntering && !isExiting ? styles.drawerVisible : ""}`}
        >
          <div className={styles.drawerBody}>
            <WebsiteNavigation
              lang={lang}
              variation="sidebar"
              buttonVariant="secondaryOutline"
              onClick={handleClose}
            />

            <Socials lang={lang} variant="sidebar" />

            <LanguageToggle lang={lang} handleClose={handleClose} />
          </div>
        </div>
      </FocusScope>
    </OverlayContainer>
  );
}

export default function Sidebar({ lang }: { lang: langType }) {
  const state = useOverlayTriggerState({});

  return (
    <div className={styles.smallScreenOnly}>
      <Button
        onClick={() => state.open()}
        ariaLabel="Open Modal"
        variant="primarySubtle"
      >
        <Bars3Icon className={styles.icon} />
      </Button>

      {state.isOpen && (
        <SidebarModalDialog
          lang={lang}
          isOpen={state.isOpen}
          onClose={state.close}
        />
      )}
    </div>
  );
}
