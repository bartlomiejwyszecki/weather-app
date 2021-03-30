console.log('Js folder working')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                return console.log(data.error)
            }
            requestedLocation.innerHTML = data.location
            requestedForecast.innerHTML = data.forecast
        })
    })
})

let requestedLocation = document.querySelector('.location')
let requestedForecast = document.querySelector('.forecast')