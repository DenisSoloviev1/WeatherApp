import Image from "next/image";
import styles from "./page.module.scss";
import {
  ArrowDownSvg,
  ArrowUpSvg,
  HumSvg,
  MarkerSvg,
  WindySvg,
} from "../shared/icon";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <button className={styles.search}>
          <MarkerSvg />
          <span>Краснодар</span>
          <ArrowDownSvg />
        </button>
      </header>

      <main className={styles.main}>
        <div className={styles.banner}>
          <Image
            src="/clear-day.png"
            alt="clear-day"
            width={150}
            height={150}
          />
        </div>

        <div className={styles.card}>
          <span className={styles.date}>Сегодня, 16 Марта</span>
          <div className={styles.temp}>29.</div>

          <p className={styles.description}>description</p>

          <div className={styles.params}>
            <div className={styles.parameter}>
              <WindySvg /> <span>Скорость ветра</span> 10 м/с
            </div>

            <div className={styles.parameter}>
              <HumSvg /> <span>Влажность</span> 56 %
            </div>
          </div>
        </div>

        <button className={styles.moreButton}>
          Подробнее <ArrowUpSvg />
        </button>
      </main>
    </>
  );
}
