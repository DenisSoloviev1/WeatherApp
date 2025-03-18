import { API_URLS } from "@/shared/config";
import { IWeather } from "../model";

const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

/**
 * Получение данных о погоде.
 * @param lat - широта.
 * @param lon - долгота.
 * @returns Promise с результатом операции.
 */
export async function getWeather(
  lat: number,
  lon: number
): Promise<IWeather | null> {
  const apiUrl = `${API_URLS.WEATHER}?lat=${lat}&lon=${lon}&units=metric&lang=ru&APPID=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    return response.json();
  } catch {
    return null;
  }
}
