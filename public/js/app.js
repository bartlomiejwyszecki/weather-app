console.log('Js folder working')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

let message = document.querySelector('#message')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    message.textContent = 'Loading...'

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                message.textContent = data.error
                $(".block").css("display", "none")
            } else {
                message.textContent = ''
                temp.textContent = data.forecast.current.temperature
                city.textContent = data.location
                temperature.textContent = data.forecast.current.temperature + '°'
                feelsLike.textContent = data.forecast.current.feelslike + '°'
                cloudCover.textContent = data.forecast.current.cloudcover + '%'
                windSpeed.textContent = data.forecast.current.wind_speed + ' km/h'
                humidity.textContent = data.forecast.current.humidity + '%'
                caption.textContent = data.forecast.current.weather_descriptions[0]
                $(".block").css("display", "flex")
            }
        })
    })
})

//table params 
let city = document.querySelector('#location') 
let temp = document.querySelector('#temp')
let temperature = document.querySelector('#temperature')
let feelsLike = document.querySelector('#feelslike')
let cloudCover = document.querySelector('#cloudcover')
let windSpeed = document.querySelector('#wind_speed')
let humidity = document.querySelector('#humidity')
let caption = document.querySelector('#caption')