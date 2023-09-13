import { useState } from 'react'
import React from 'react'

const WeatherCard = ({weather, temp }) => {

    const [isCelsius, setIsCelsius] = useState(true)

    const cambiarTemp = () => setIsCelsius (!isCelsius)

    return (
        <article>
            <h1>Weather App</h1>
            <h2>{weather?.name} , {weather?.sys.country}</h2>
            <div>
                <img src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                    alt="" />
            </div>
            <section>
                <h3>"{weather?.weather[0].description}"</h3>
                <ul>
                    <li><span>Wind Speed</span><span>: {weather?.wind.speed} m/s </span></li>
                    <li><span>Clouds</span><span>: {weather?.clouds.all} %</span></li>
                    <li><span>Pressure</span><span>: {weather?.main.pressure}</span></li>
                </ul>
            </section>
            <h2>{isCelsius ? `${temp?.celsius} °C`: `${temp?.farenheit} °F`}</h2>
            <button onClick={cambiarTemp}>{isCelsius ? `Change to °F` : `change to °C`}</button>
        </article>
    
    )
}

export default WeatherCard