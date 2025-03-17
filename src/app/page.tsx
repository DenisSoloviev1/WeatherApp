import { ClockSvg } from "@/shared/icon";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <main className={styles.main}>
        <p>Вас приветствует </p>
        <h1>WeatherApp</h1>

        <section className={styles.history}>
          <div className={styles.title}>
            <ClockSvg />

            <h2>История</h2>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <nav>
          <Link href={"/about"}>О проекте</Link>
        </nav>
      </footer>
    </>
  );
}
