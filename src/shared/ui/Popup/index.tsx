import React from "react";
import styles from "./style.module.scss";

interface PopupProps {
  children: React.ReactNode;
  position: "top" | "bottom";
}

export default function Popup({ children, position }: PopupProps) {
  return (
    <aside className={styles.popupContainer} data-position={position}>
      {children}
    </aside>
  );
}
