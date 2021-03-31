console.log('Js folder working')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

let message = document.querySelector('#message')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    message.textContent = 'Loading...'

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                message.textContent = data.error
            } else {
                message.textContent = ` ${data.location} \r\n 
                                        ${data.forecast.temperature} \r\n
                                        ${data.forecast.weather_descriptions}`
                console.log(data.forecast)
            }
        })
    })
})
