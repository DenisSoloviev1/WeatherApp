"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import {
  ArrowDownSvg,
  ArrowLeftSvg,
  MarkerSvg,
  SearchSvg,
} from "@/shared/icon";
import { Popup } from "@/shared/ui";

export default function Search({ city }: { city: string }) {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

  const router = useRouter();

  return (
    <>
      <button
        className={styles.openSearchButton}
        onClick={() => setShow(!show)}
      >
        <MarkerSvg />
        <span>{city}</span>
        <ArrowDownSvg />
      </button>

      <Popup position="top" show={show}>
        <div className={styles.title}>
          <button className={styles.buttonBack} onClick={() => setShow(!show)}>
            <ArrowLeftSvg />
          </button>

          <div className={styles.searchContainer} role="search">
            <input
              type="search"
              placeholder="Поиск"
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.searchInput}
            />
            <button
              onClick={() => router.push(`/${search}`)}
              className={styles.searchButton}
            >
              <SearchSvg />
            </button>
          </div>
        </div>
      </Popup>
    </>
  );
}
