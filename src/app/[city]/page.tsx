import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./page.module.scss";
import {
  ArrowDownSvg,
  ArrowUpSvg,
  HumSvg,
  MarkerSvg,
  WindySvg,
} from "@/shared/icon";

interface IWeather {
  name: string;
  weather: { description: string; icon: string }[];
  main: { temp: number; humidity: number };
  wind: { speed: number };
}

async function getWeather(city: string): Promise<IWeather | null> {
  const apiKey = "5cae3aaa1038f8b453c45fa1b2c1c19e";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},ru&units=metric&lang=ru&APPID=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) return null;
    return response.json();
  } catch {
    return null;
  }
}

export default async function City({ params }: { params: { city: string } }) {
  const weatherData = await getWeather(params.city);

  if (!weatherData) return notFound();

  const { name, weather, main, wind } = weatherData;

  return (
    <>
      <header className={styles.header}>
        <button className={styles.search}>
          <MarkerSvg />
          <span>{name}</span>
          <ArrowDownSvg />
        </button>
      </header>

      <main className={styles.main}>
        <div className={styles.banner}>
          <Image
            src={`https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
            alt={weather[0].description}
            width={150}
            height={150}
          />
        </div>

        <div className={styles.card}>
          <span className={styles.date}>
            Сегодня,
            {new Date().toLocaleDateString("ru-RU", {
              day: "numeric",
              month: "long",
            })}
          </span>
          <div className={styles.temp}>{Math.round(main.temp)}°</div>

          <p className={styles.description}>{weather[0].description}</p>

          <div className={styles.params}>
            <div className={styles.parameter}>
              <WindySvg /> <span>Скорость ветра</span> {Math.round(wind.speed)} м/с
            </div>

            <div className={styles.parameter}>
              <HumSvg /> <span>Влажность</span> {main.humidity} %
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
