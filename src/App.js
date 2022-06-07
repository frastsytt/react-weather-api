import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './components/displayQuery';
import WeatherForm from './components/userInput';

function App() {
  const [isFetched, fetchFinished] = useState(false)
  const [city, findCity] = useState('Tallinn')
  const [cityData, setCityData] = useState();
  const key = '77f97b598769bf8861004c74e30ebbba';

  const fetchWeatherHandler = useCallback(async () => {
    fetchFinished(false)
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
      const data = await response.json();

      setCityData({
        name: city,
        temp: Math.round(parseFloat(data.main.temp) - 273.15),
        desc: data.weather[0].description
      });
    } catch (error) {
      return
    }
    fetchFinished(true)
  }, [city]);

  const changeCity = (city) => {
    findCity(city);
  }

  useEffect(() => {
    fetchWeatherHandler();
  }, [fetchWeatherHandler]);


  return (
      <container>
        <div className='App-header bg-info bg-opacity-25 text-black'>
        <card className='text-center m-2 p-2'>
          {isFetched && <Weather city={cityData}/>}
          <WeatherForm onChangeCity={changeCity} />
        </card>
        </div>
      </container>
  );
}

export default App;