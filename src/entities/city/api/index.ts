import { API_URLS } from "@/shared/config";
import { ICity } from "../model";
const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

/**
 * Получение координат города.
 * @param name - название города.
 * @returns Promise с результатом операции.
 */
export async function getCity(
  name: string,
  limit: number = 1
): Promise<ICity | null> {
  const apiUrl = `${API_URLS.CITY}?q=${name}&limit=${limit}&APPID=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) return null;
    const data = await response.json();
    return data[0];
  } catch {
    return null;
  }
}
