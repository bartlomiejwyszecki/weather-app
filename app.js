const request = require('postman-request')
const mapRequest = require('postman-request')

let city = 'Pszczyna'
const mapUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + city + '.json?access_token=pk.eyJ1IjoiYnd5c3plY2tpIiwiYSI6ImNrbXQxbXZidTBuaXoyd3FndGR3eW9mNHQifQ.WpAdng-FfYj2_Oe9uSac6Q&limit=1'

const url = 'http://api.weatherstack.com/current?access_key=8521046f3448d426d69e3df41a1695e2&query=Warszawa'

// request({ url: url, json: true }, (error, response) => {
//     //console.log(`It is currently ${response.body.current.temperature} degrees in ${response.body.location.name}, but it feels like ${response.body.current.feelslike}.`)
//     console.log(response.body.current)
// })

mapRequest({ url: mapUrl, json: true }, (error, response) => {
    const longitude = response.body.features[0].center[0]
    const latitude = response.body.features[0].center[1]
    console.log(longitude, latitude)
})