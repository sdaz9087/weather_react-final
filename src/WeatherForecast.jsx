import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDaily from "./WeatherForecastDaily";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function loadApi() {
    const apiKey = "46fac47dd8b8fa26d1b6852218ad3dfe";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast d-none d-md-flex align-items-center flex-wrap justify-content-evenly ">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            // if (index > 5) return null;
            // if (index === 0) return null;
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDaily data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    loadApi();
    return null;
  }
}
