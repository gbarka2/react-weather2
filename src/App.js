import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Weather from './components/Weather'
import Form from './components/Form'

function App() {

  // const apiKey = "6b52cfa597d7784744ea93bce3b52bb5"
  const [weather, setWeather] = useState(null)

  const getWeather = async (zipcode) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=6b52cfa597d7784744ea93bce3b52bb5`)
    console.log('response:', response)
    const data = await response.json()
    console.log('data:', data)
    setWeather(data)
  };
  // `api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${apiKey}`

  return (
    <div className="App">
      <Form weathersearch={getWeather}/>
      <Weather weather={weather} />
    </div>
  );
}

export default App;
