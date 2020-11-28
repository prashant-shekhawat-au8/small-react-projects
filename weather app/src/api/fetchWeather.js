import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '560ae1892207e114e373bbfc5f5daab6';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }

    });
    console.log(data)
    return data;
}