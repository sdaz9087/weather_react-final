import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
import "./Main.css";

export default function Main(props) {
  return (
    <main className="p-0 mb-3">
      <h1 className="current-city text-capitalize" id="current-city">
        {props.info.city.toLowerCase()}
      </h1>
      <div className="current-weather d-flex justify-content-between align-items-center row">
        <div className="col-5">
          <div className="current-temperature-icon">
            <WeatherIcon
              code={props.info.icon}
              descript={props.info.description}
              width={100}
              height={100}
            />
          </div>
          <h5 className="text-capitalize  mt-3"> {props.info.description}</h5>{" "}
          <p className="current-details">
            Humidity: <strong>{props.info.humidity}%</strong>, Wind:{" "}
            <strong>{props.info.wind}km/h</strong>
          </p>
        </div>
        <div className="current-temperature col-5">
          <div>
            <WeatherTemperature tempCelsius={props.info.temperature} />
            <FormattedDate date={props.info.date} />
          </div>
        </div>
      </div>
    </main>
  );
}
