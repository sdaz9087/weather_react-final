import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celsius");

  function converToFahrenheit(event) {
    event.preventDefault(event);
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault(event);
    setUnit("celsius");
  }

  function fahrenheit() {
    return Math.round((props.tempCelsius * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="current-temperature-value" id="current-temperature">
          {props.tempCelsius}
        </span>
        <span className="current-temperature-unit">°C</span>{" "}
        <span className="current-temperature-unit">|</span>{" "}
        <span className="current-temperature-unit">
          <a href="/" onClick={converToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="current-temperature-value" id="current-temperature">
          {fahrenheit()}
        </span>
        <span className="current-temperature-unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>{" "}
        <span className="current-temperature-unit">|</span>{" "}
        <span className="current-temperature-unit">°F</span>
      </div>
    );
  }
}
