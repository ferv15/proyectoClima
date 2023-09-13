import { useEffect,useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'
import Walpaper from './components/Walpaper'

function App() {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [image, setImage] = useState()
  const [temp, setTemp] = useState()
  
  useEffect(() => {
    const acceso = pos =>{

      const objeto = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(objeto)
    }
    navigator.geolocation.getCurrentPosition(acceso)
  }, [])
  
  useEffect(() => {
    if(coords !== undefined){
      const ApiKey = '60858197b1834d2c59f4f698b48c5c00'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${ApiKey}`
      axios.get(url)
      .then(res => {
        setWeather(res.data)
        const obj = {
          celsius: (res.data.main.temp -273.15).toFixed(1),
          farenheit: ((res.data.main.temp -273.15) * 9/5 +32).toFixed(1)
        }
        setTemp(obj)
      })
      .catch(err => console.log(err))
    }
  }, [coords])

  useEffect(() => {
    if (weather !== undefined) {
      const Apikey = '39316812-d52cdffaf6f91d6e23f526e9a'
      const url = `https://pixabay.com/api/?key=${Apikey}&q=${weather.weather[0].description}`
    axios.get(url)
    .then(res => setImage(res.data))
    .catch(err => console.log(err))
    }
  }, [weather])
  



return (
    <>
    <div>
        <div>
        <Walpaper image={image}/>
          <WeatherCard 
          weather = {weather}
          temp = {temp}
          />
        </div>
    </div>
    </>
  )
}

export default App
