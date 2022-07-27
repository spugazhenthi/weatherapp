const geocodeutils = require('../weather-app/utils/geocode')
const forecastutils = require('./utils/forecast')


// console.log('starting')

// setTimeout(()=>{
// console.log('2 seconds timer')
// },2000)

// debugger
// setTimeout(()=>{
//     console.log('0 seconds timer')
// },0)
// console.log('stopping')

// const request = require('request')
// const url = 'http://api.weatherstack.com/current?access_key=a48c0f6e084d0dabf140094bcb6f1c7a&query=37.8267,-122.4233&units=f'

// const getCoorDinates = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicHVnYXpoZ3ltMTIzIiwiYSI6ImNsMXl0ZTJvNTBmc3ozY21rYmQ3MnJmNnYifQ.JMF7ICMNiLnXTBR9VSwCvg&limit=1'




// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)


if(!process.argv[2])
{
   console.log('No location is provided')
}
else{
geocodeutils.geocode(process.argv[2],(error,{latitude,langitude,place})=>{
      if(error)
      {
        return console.log('Error: ' + error)
      }

      forecastutils.getforecast(latitude, langitude, (error, foreCastData) => {
      if(error)
      {
        return console.log('Error: ' + error)
      }
      console.log('Location', place)
       console.log('ForecastData', JSON.stringify(foreCastData))
      })
})
}