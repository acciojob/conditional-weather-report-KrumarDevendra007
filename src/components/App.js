
import React, {useState, useEffect } from "react";
import './../styles/App.css';
import WeatherDisplay from "./weatherDisplay";

const App = () => {

  const [weather, setWeather] = useState({ temperature: 0, conditions: "" });

  useEffect(() => {
    // Updating the weather data as per the given input
    setWeather({ temperature: 25, conditions: "Sunny" });
  }, []);


  return (
    <div>
        {/* Do not remove the main div */}

        <h2>Conditional Weather Report</h2>
        <WeatherDisplay weather={weather} />
    </div>
  )
}

export default App
