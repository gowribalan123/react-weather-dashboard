import React ,{useState,useEffect} from 'react'
import axios from 'axios'
 import WeatherService from './components/WeatherService'
  import { TailSpin } from 'react-loader-spinner'
 import './App.css'
 import dateFormat from 'dateformat';

 
 import 'bootstrap/dist/css/bootstrap.min.css'


 const apiKey = 'daf57a3e9ec7c333a17cc9d1788544c7';
         
const App = () => {

  const [city, setCity] = useState('Thrissur')
   const [weather, setWeather] = useState(null)
   
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
  const [darkMode, setDarkMode] = useState(false)
  const [time, setTime] = useState(new Date());  
  const [currentDate, setCurrentDate] = useState(new Date()); 
  //const [temperature, setTemperature] = useState(null);
  //const [location, setLocation] = useState(null);



  useEffect(() => { 

    //if (navigator.geolocation) {
      //navigator.geolocation.getCurrentPosition((position) => {
        //const { latitude, longitude } = position.coords;
        //setLocation({ latitude, longitude });

    const fetchWeather = async () => {
      
       setLoading(true)
       
       setError(null)    
        try
         {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`); 
         setWeather(response.data);
        // setTemperature(response.data.main.temp)
         
      }
    
          catch (error)
           { setError("Error fetching the weather data");

   }
    finally { setLoading(false);
      
     }
    
     }
      fetchWeather()
     }, [city])
const handleCityChange = (e) => { setCity(e.target.value); }

 const toggleDarkMode = () => { setDarkMode(!darkMode); };
 
 const timerId = setInterval(() => setTime(new Date()), 1000);  
 //clearInterval(timerId); // Cleanup on unmount  
 
 const interval = setInterval(() => {  
  setCurrentDate(new Date());  }, 1000); // updates every second  

 
//clearInterval(interval); // cleanup interval on unmount  




    
    //setTemperature(response.data.main.temp);
 
  

//const intervaltemp = setInterval( 60000); // Update every minute

 //clearInterval(intervaltemp); // Cleanup interval on component unmount

 return (
  <div className="container " >
  <div class="row rowbg">
    
    
  
  
  
  
   
  
          <div className={darkMode ? 'app  dark-mode' : 'app light-mode'}> 
              <header > 
                <h1 >Weather Dashboard</h1>
      

      
                  <input type="text" value={city} onChange={handleCityChange} 
                   placeholder="Enter city" />
                  <button onClick={toggleDarkMode}>
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                  </button> 
                </header>
                {
                loading ? (  <TailSpin color="#00BFFF" height={80} width={80} />  ) : error ? ( <p>{'Please enter a valid city name'}</p>) : 
                ( <WeatherService weather={weather} />
                  
                )
               }
               <div className='container'>

              <div class='row'>
                <div class='col'>
                
               <p className='p1'>{dateFormat(currentDate, "dddd, mmmm dS, yyyy")} </p>
               </div>
               <div class='col'>
  <p className='p2'> {time.toLocaleTimeString()} </p>
  </div></div>
  </div>    </div>
             </div>
        </div>

    
    
      
      
    
    
  )}
export default App