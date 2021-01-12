import React from 'react'

const Weather = ({weather}) => {
  // console.log('weather load', props.weather.name)
  const loaded = () => {
    return (
      <div>
        <p>{weather.name}</p>
        <p>Current Temperature {weather.main.temp}</p>
        <p>{weather.weather[0].description}</p>
        <p>Max Temp {weather.main.temp_max}</p>
        <p>Min Temp {weather.main.temp_min}</p>
      </div>
    )
  }
  const loading = () => {
    return <h1>Please enter your zipcode...</h1>
  }
  return weather ? loaded() : loading()
}

export default Weather