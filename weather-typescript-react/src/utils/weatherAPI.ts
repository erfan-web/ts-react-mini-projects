const API_KEY = "83bd3c669958f701b14e50330194fa99";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function fetchWeather(city: string) {
  try {
    const res = await fetch(
      `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`,
    );
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
