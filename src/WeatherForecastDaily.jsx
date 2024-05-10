import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDaily(props) {
  function maxTemp() {
    let maxTemperature = Math.round(props.data.temp.max);
    return maxTemperature;
  }

  function minTemp() {
    let minTemperature = Math.round(props.data.temp.min);
    return minTemperature;
  }

  function date() {
    let date = new Date(props.data.dt * 1000);
    let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();
    return weekDays[day];
  }

  return (
    <>
      <div className="WeatherForecast-day">
        <strong>{date()}</strong>
      </div>
      <WeatherIcon code={props.data.weather[0].icon} width={72} height={72} />
      <div className="WeatherForecast-temp-max">
        Hi <span>{maxTemp()}° </span>
      </div>
      <div className="WeatherForecast-temp-min">
        Lo <span>{minTemp()}°</span>
      </div>
    </>
  );
}
