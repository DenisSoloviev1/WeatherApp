import { IWeather } from "../model";

/**
 * Получение данных о погоде.
 * @param city - название города.
 * @returns Promise с результатом операции.
 */

export async function getWeather(city: string): Promise<IWeather | null> {
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
