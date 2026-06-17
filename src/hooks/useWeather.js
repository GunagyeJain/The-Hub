import { useEffect, useState } from "react";
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

const useWeather = (city) => {
  const [weather, setWeather] = useState(null);
  const URL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, [city]);

  return weather;
};

export default useWeather;
