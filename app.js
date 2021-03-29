const request = require('postman-request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Pszczyna', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

forecast(34.2313, 43.1232, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})
