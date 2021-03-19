import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form className="searchCity">
      <input type="text" id="text-input" placeholder="Search city" />
      <i className="fas fa-map-marker-alt" id="mapMarker"></i>
    </form>
  );
}
