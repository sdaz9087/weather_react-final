import React from "react";
import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "sunny",
    "01n": "clear-night",
    "02d": "partlycloudy",
    "02n": "partlycloudy",
    "03d": "cloudy",
    "03n": "cloudy",
    "04d": "windy-variant",
    "04n": "windy-variant",
    "09d": "pouring",
    "09n": "pouring",
    "10d": "rainy",
    "10n": "rainy",
    "11d": "lightning-rainy",
    "11n": "lightning-rainy",
    "13d": "snowy",
    "13n": "snowy",
    "50d": "fog",
    "50n": "fog",
  };

  const codeDescription = {
    "rain and snow": "snowy-rainy",
    "light rain and snow": "snowy-rainy",
    "light thunderstorm": "lightning",
    thunderstorm: "lightning",
    "freezing rain": "hail",
    "extreme rain": "hail",
  };

  if (codeDescription[props.descript]) {
    return (
      <WeatherSvg
        state={codeDescription[props.descript]}
        width={100}
        height={100}
      />
    );
  } else {
    return (
      <WeatherSvg
        state={codeMapping[props.code]}
        width={props.width}
        height={props.height}
      />
    );
  }
}
