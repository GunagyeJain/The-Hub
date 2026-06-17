import { useEffect, useState } from "react";
import Container from "../../components/Container";
import useWeather from "../../hooks/useWeather";

const WeatherApp09 = () => {
  const [input, setInput] = useState("");
  const [city, setCity] = useState("London");
  const weather = useWeather(city);

  useEffect(() => {
    if (!input.trim()) return;
    const id = setTimeout(() => {
      setCity(input);
    }, 500);

    return () => clearTimeout(id);
  }, [input]);

  const tempC = weather?.current?.temp_c;
  // const tempF = weather.current.temp_f;
  const conditionText = weather?.current?.condition?.text;
  // const conditionIcon = weather.current.condition.icon;

  return (
    <Container>
      <div className="w-full h-full flex flex-col ">
        {/* searchbar */}
        <div className="m-2 flex items-center bg-surface-hover rounded-xl p-2 gap-1">
          🔍
          <input
            value={input}
            className="outline-0 w-full "
            type="text"
            aria-label="city"
            placeholder="Check weather for a different city!"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        {/* Temperature */}
        {weather && (
          <div>
            <h1>{tempC}°C</h1>
            <h1>{conditionText}</h1>
          </div>
        )}
        {/* City */}
      </div>
    </Container>
  );
};

export default WeatherApp09;
