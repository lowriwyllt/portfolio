"use client";

import React, { useRef } from "react";
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

interface ModalDialogProps extends AriaDialogProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

function SidebarModalDialog({
  children,
  isOpen,
  onClose,
  ...props
}: ModalDialogProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { overlayProps, underlayProps } = useOverlay(
    {
      isOpen,
      onClose,
      isDismissable: true,
    },
    ref,
  );

  const { modalProps } = useModal();
  const { dialogProps } = useDialog(props, ref);
  usePreventScroll();

  return (
    <OverlayContainer>
      <div {...underlayProps} className={`${styles.overlay} ${styles.open}`} />

      <FocusScope contain restoreFocus autoFocus>
        <div
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          ref={ref}
          className={`${styles.drawer} ${styles.open}`}
        >
          {children}
        </div>
      </FocusScope>
    </OverlayContainer>
  );
}

export default function Sidebar({ lang }: { lang: langType }) {
  const state = useOverlayTriggerState({});

  const handleNavClick = () => {
    setTimeout(() => {
      state.close();
    }, 200);
  };

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
        <SidebarModalDialog isOpen={state.isOpen} onClose={state.close}>
          <div className={styles.drawerBody}>
            <WebsiteNavigation
              lang={lang}
              variation="sidebar"
              buttonVariant="secondaryOutline"
              onClick={handleNavClick}
            />

            <Socials lang={lang} variant="sidebar" />
          </div>
        </SidebarModalDialog>
      )}
    </div>
  );
}
