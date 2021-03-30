console.log('Js folder working')

let city = ''

fetch('http://localhost:3000/weather?address=' + city).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            return console.log(data.error)
        }
        console.log(`Location: ` + data.location)
        console.log(`Forecast: ` + data.forecast)
    })
})

const weatherForm = document.querySelector('form')

weatherForm.addEventListener('submit', () => {
    console.log('testing!')
})