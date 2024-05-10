import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = props.date.toLocaleDateString();
  let day = props.date.getDay();
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return (
    <p className="current-date current-details lh-lg">
      <b>
        <span id="current-day">{days[day]}</span> <br />
        <span id="current-date">{date}</span>,{" "}
        <span id="current-time" className="mt-3 lh-lg">
          {hours}:{minutes}
        </span>
      </b>
      <br />
    </p>
  );
}
