const searchBtn = document.getElementById('search-btn')
searchBtn.addEventListener('click', function () {

    const cityName = document.getElementById('search-field').value

    if (cityName == '') {
        alert("Please enter a city name, like - london, tokiyo, dhaka...")
    } else {
        const key = '7069ae7a44eece97b3477a7e3669ede5'

        const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`

        fetch(url)
            .then(res => res.json())
            .then(data => displayData(data))
        // .catch(err => alert('Something went wrong'))

        function displayData(data) {
            const cityNameDisplay = document.getElementById('city-name-display')
            cityNameDisplay.innerText = cityName
            const cityTemp = document.getElementById('city-temp')
            const temp = data.main.temp
            const currentTemp = temp - 273.15
            cityTemp.innerText = parseInt(currentTemp)
            const cityClouds = document.getElementById('weather')
            cityClouds.innerText = data.weather[0].main
        }
    }
})




