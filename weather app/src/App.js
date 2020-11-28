import React, { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(query);

            setWeather(data);
            setQuery('');
        }
    }

    return (
        <div className="main-container">
          <h1>Weather App</h1>
            <input type="text"placeholder="type here to Search..."value={query}onChange={(e) => setQuery(e.target.value)} onKeyPress={search}/>
            {weather.main && (
                <div >
                    <h2 >
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div >
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div >
                        <img  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                    <div>
                    <div>
                      <h3>Wind</h3>
                      {weather.wind.speed}mph
                    </div>
                    <div>
                      <h3>High</h3>
                      {weather.main.temp_max} C
                    </div>
                    <div>
                      <h3>Low</h3>
                      {weather.main.temp_min} C
                    </div>
                    <div>
                      <h3>Rain</h3>
                      {weather.clouds.all} %
                    </div>
                      
                    </div>
                </div>
            )}
            <div>
             
            </div>
        </div>
    );
}

export default App;