import React, {useEffect, useState} from 'react'

const Weather = ({weather}) => {
  
  const [color, setColor] = useState('white')
  const handleColor = (temp) => {
    if (temp < 40) {
      setColor('blue')
    } else if (temp > 90) {
      setColor('red')
    }
  }



  useEffect(() => {
    handleColor(weather?.main?.temp)
  },[weather?.main?.temp])

  const loaded = () => {
    return (
      <div>
        <p>{weather.name}</p>
        <p style={{color: color}}>Current Temperature {weather.main.temp}</p>
        <p>{weather.weather[0].description}</p>
        <p style={{color: color}}>Max Temp {weather.main.temp_max}</p>
        <p style={{color: color}}>Min Temp {weather.main.temp_min}</p>
      </div>
    )
  }
  const loading = () => {
    return <h1>Please enter your zipcode...</h1>
  }
  return weather ? loaded() : loading()
}

export default Weather