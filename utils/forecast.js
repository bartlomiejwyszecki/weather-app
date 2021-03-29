const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8521046f3448d426d69e3df41a1695e2&query=' + latitude + ',' + longitude

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('You have no connection with network', undefined)
        } else if (response.body.error) {
            callback('There is no place like ' + latitude + ', ' + longitude, undefined)
        } else {
            callback(undefined, response.body.current)
        }
    })
}

module.exports = forecast