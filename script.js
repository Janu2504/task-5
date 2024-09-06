async function getWeather() {
    const location = document.getElementById('locationInput').value;
    const apiKey = 'your_api_key'; // Replace with your API key
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
    
    const data = await response.json();
    
    if (response.ok) {
        displayWeather(data);
    } else {
        alert('Error: ' + data.message);
    }
}

function displayWeather(data) {
    const weatherDisplay = document.getElementById('weatherDisplay');
    weatherDisplay.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
}
