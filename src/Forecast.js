import React from "react";
import "./Forecast.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast(props) {
  return (
    <div className="col-2">
      08:00
      <br />
      <ReactAnimatedWeather
        icon={props.icon}
        color={props.color}
        size={props.size}
      />
      <br />
      <span>10°C</span>
      <span> | </span>
      <span>5°C </span>
    </div>
  );
}
