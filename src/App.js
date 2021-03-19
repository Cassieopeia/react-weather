import React from "react";
import './App.css';
import Search from "./Search";
import Date from "./Date";
import HumiditySpeed from "./HumiditySpeed";
import City from "./City";
import WeatherIcon from "./WeatherIcon";
import Description from "./Description";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="row">
          <div className="col">
            <Search />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Date />
            <HumiditySpeed />
          </div>
          <div className="col-6">
            <City />
            <WeatherIcon />
            <Description />
          </div>
        </div>
        <div className="row">
          <Forecast icon="CLEAR_DAY" color="white" size={50} />
          <Forecast icon="CLEAR_DAY" color="white" size={50} />
          <Forecast icon="RAIN" color="white" size={50} />
          <Forecast icon="RAIN" color="white" size={50} />
          <Forecast icon="CLOUDY" color="white" size={50} />
        </div>
      </div>
       <div className="footer"> <small> <a href="https://github.com/Cassieopeia/react-weather" target="_blank" rel="noreferrer"> Open-source code</a> by Cassandra Ghysel </small> </div>
    </div>
  
  );
}

export default App;
