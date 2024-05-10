import React, { useState } from "react";
import { Watch } from "react-loader-spinner";
import axios from "axios";
import SearchForm from "./SearchForm";
import Main from "./Main";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ loaded: false });

  function displayWeather(response) {
    setWeatherData({
      loaded: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      // icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    let apiKey = "46fac47dd8b8fa26d1b6852218ad3dfe";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios
      .get(apiUrl)
      .then(displayWeather)
      .catch((error) =>
        console.log("Oops.It's wrong city.Please void another one")
      );
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  let form = <SearchForm handleSubmit={handleSubmit} changeCity={changeCity} />;

  if (weatherData.loaded) {
    return (
      <>
        {form}
        <Main info={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </>
    );
  } else {
    search();
    return (
      <>
        {form}
        <Watch
          visible={true}
          height="80"
          width="80"
          radius="48"
          color="#414D5F"
          ariaLabel="watch-loading"
          wrapperStyle={{
            justifyContent: "center",
            marginTop: " 150px",
          }}
          wrapperClass="watch"
        />
      </>
    );
  }
}
