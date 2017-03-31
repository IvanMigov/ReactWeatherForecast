import axios from 'axios';

const API_KEY = '7bb71013d42f298b1666697ad43a9571';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export  function fetchWeather(city) {
  let url = `${ROOT_URL}&q=${city},us`;
  let request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };

}




