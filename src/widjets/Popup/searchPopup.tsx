"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";
import { ArrowDownSvg, MarkerSvg } from "@/shared/icon";
import Popup from ".";
import { Search } from "@/shared/ui";

export default function PopupController({ city }: { city: string }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className={styles.searchButton} onClick={() => setShow(!show)}>
        <MarkerSvg />
        <span>{city}</span>
        <ArrowDownSvg />
      </button>

      <Popup position="top" show={show}>
        <button onClick={() => setShow(!show)}>X</button>
        <Search onClick={() => console.log("Search:", city)} />
      </Popup>
    </>
  );
}
