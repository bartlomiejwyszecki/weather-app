const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

let locationName = process.argv[2]

if (locationName) {
    geocode(locationName, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return console.log(error)
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })    
} else {
    console.log('Please provide an adress.')
}