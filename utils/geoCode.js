const axios = require('axios');
const forecast = require('./forecast.js');



const geoCode = async (cityName) =>{

        const key = process.env.DB_KEY;
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${key}`;
        console.log(url)
        try{
            const {data} = await axios(url);
            const lat = data[0].lat;
            const lon = data[0].lon;
            return forecast(lat, lon);
        }catch(err){
            console.log(err.message);
        }        

}

module.exports = geoCode;

