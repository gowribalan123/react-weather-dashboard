import React from 'react'

const WeatherService= ({ weather }) => { 
  return ( 
  <div className="weather-card"> 
  <h1>{weather.name}</h1>
  <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
   <p>Weather: {weather.weather[0].description}</p>
    <p>Humidity: {weather.main.humidity}%</p> 
    <p>Wind Speed: {weather.wind.speed} m/s</p>
     </div> 
     )
     }


export default WeatherService