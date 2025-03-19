import { notFound } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.scss";
import { HumSvg, WindySvg } from "@/shared/icon";
import { getWeather } from "@/entities/weather";
import { getCity } from "@/entities/city";
import PopupController from "@/widjets/Popup/searchPopup";

export default async function City({ params }: { params: { city: string } }) {
  const cityName = decodeURIComponent(params.city);

  const cityData = await getCity(cityName);

  if (!cityData) {
    return notFound();
  }

  const weatherData = await getWeather(cityData.lat, cityData.lon);

  if (!weatherData) {
    return notFound();
  }

  const { name, weather, main, wind } = weatherData;

  return (
    <>
      <header className={styles.header}>
        <PopupController city={name}/>
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
            Сегодня,{" "}
            {new Date().toLocaleDateString("ru-RU", {
              day: "numeric",
              month: "long",
            })}
          </span>
          <div className={styles.temp}>{Math.round(main.temp)}°</div>

          <p className={styles.description}>{weather[0].description}</p>

          <div className={styles.params}>
            <div className={styles.parameter}>
              <WindySvg /> <span>Скорость ветра</span> {Math.round(wind.speed)}{" "}
              м/с
            </div>

            <div className={styles.parameter}>
              <HumSvg /> <span>Влажность</span> {main.humidity} %
            </div>
          </div>
        </div>

        {/* <button className={styles.moreButton}>
          Подробнее <ArrowUpSvg />
        </button> */}
      </main>
    </>
  );
}
