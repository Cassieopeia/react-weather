import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false});
    const [city, setCity] = useState(props.defaultCity);
    
    function handleResponse(response) {
    setWeatherData ({
        ready: true,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        date: new Date(response.data * 1000),
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        wind: response.data.wind.speed,
        city: response.data.name,
    });
  }
    
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  
    function search() {
    const apiKey = "7d00b6786f1190b8a64b233c6af4caac";
    let apiUrl= `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    }

    if (weatherData.ready) {
    return (
    <div className="Weather">   
        <div className="row">
          <div className="col">
     <form onSubmit={handleSubmit}> 
      <input type="search"
        placeholder="Search city"
        className="form-control"
        onChange={handleCityChange} />
      <input type="submit" value="Search" className="btn btn-light" />
      <i className="fas fa-map-marker-alt" id="mapMarker"></i>
      </form>
        </div>
       </div>
       
         <div className="row">
          <div className="col-6">
      <ul>
      <li className="Date">Friday 14:06 </li>
      <li className="Temperature">{Math.round(weatherData.temperature)}°C </li>
    </ul>
    <ul>
      <li className="Humidity">Humidity: 30%</li>
      <li className="Speed">Wind Speed: km/h</li>
    </ul>
        </div>
        </div>
    </div>
    ); 
} else {
    search();
    return "Loading...";
}
}