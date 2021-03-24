import React from "react";
import './App.css';
import Weather from "./Weather";
import Forecast from "./Forecast";

function App() {


  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Manila" />  
      
            
           
            
          </div>
        
        <div className="row">
          <Forecast icon="CLEAR_DAY" color="white" size={50} />
          <Forecast icon="CLEAR_DAY" color="white" size={50} />
          <Forecast icon="RAIN" color="white" size={50} />
          <Forecast icon="RAIN" color="white" size={50} />
          <Forecast icon="CLOUDY" color="white" size={50} />
        </div>
       <div className="footer"> <small> <a href="https://github.com/Cassieopeia/react-weather" target="_blank" rel="noreferrer"> Open-source code</a> by Cassandra Ghysel </small> </div>
    
   </div>
   
  );
}

export default App;
