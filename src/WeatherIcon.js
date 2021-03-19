import React from "react";
import "./WeatherIcon.css";
import Sun from "./sun.png";

export default function WeatherIcon() {
  return <img className="BigIcon" src={Sun} alt="sun" width="115" />;
}
