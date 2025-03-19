"use client"

import React from "react";
import styles from "./styles.module.scss";

interface PopupProps {
  children: React.ReactNode;
  position: "top" | "bottom";
  show?: boolean;
}

export default function Popup({ children, position, show = false }: PopupProps) {
  return (
    <aside className={styles.popupContainer} data-position={position} data-show={show}>
      {children}
    </aside>
  );
}
