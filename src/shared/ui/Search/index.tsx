"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import { SearchSvg } from "@/shared/icon";

interface SearchProps {
  onClick: () => void;
}
export function Search({ onClick }: SearchProps) {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.searchContainer} role="search">
      <input
        type="search"
        placeholder="поиск каналов"
        autoFocus
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.searchInput}
      />
      <button onClick={onClick} className={styles.searchButton}>
        <SearchSvg />
      </button>
    </div>
  );
}
