import React ,{useState,useEffect} from 'react'
import axios from 'axios'
 import WeatherService from './components/WeatherService'
  import { TailSpin } from 'react-loader-spinner'
 import './App.css'

 const apiKey = 'daf57a3e9ec7c333a17cc9d1788544c7';
         
const App = () => {
  const [city, setCity] = useState('Thrissur')
   const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => { 
    const fetchWeather = async () => {
      
       setLoading(true)
       
       setError(null)    
        try
         { const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`); 
         setWeather(response.data);
         }
          catch (error)
           { setError(error.message);

   }
    finally { setLoading(false);

     }
     };
      fetchWeather();
     }, [city]);
const handleCityChange = (e) => { setCity(e.target.value); }
 const toggleDarkMode = () => { setDarkMode(!darkMode); };
  return (
    <div class="weather">
    <div className={darkMode ? 'app weather dark-mode' : 'app'}> 
     <header > 
       <h1>Weather Dashboard</h1>
        <input type="text" value={city} onChange={handleCityChange} 
        placeholder="Enter city" />
         <button onClick={toggleDarkMode}>
           {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button> 
            </header>
             {loading ? ( 
              <TailSpin color="#00BFFF" height={80} width={80} /> 
             ) : error ? ( <p>{'Please enter a valid city name'}</p>

              ) : 
    ( 
    <WeatherService weather={weather} />
  )
}
</div></div>
  )}
export default App