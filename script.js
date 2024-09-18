const urlBase = 'https://yahoo-weather5.p.rapidapi.com/weather?format=json&u=f'; // Base URL for the API
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'cd19336b2bmsh7090558cacbfc2fp17d44fjsnad3e3096fff6',
        'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
    }
};

// Create an async function to fetch weather data
async function fetchWeather(location) {
    const url = `${urlBase}&location=${location}`; // Dynamic URL based on location
    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Parse the response as JSON

        // Access the weather information properly
        const temperature = result.current_observation.condition.temperature;
        const text = result.current_observation.condition.text;
        const sunrise = result.current_observation.astronomy.sunrise; // Correct path for sunrise
        const sunset = result.current_observation.astronomy.sunset; // Correct path for sunset
        const chill = result.current_observation.wind.chill; // Correct path for wind chill
        const direction = result.current_observation.wind.direction; // Correct path for wind direction
        const speed = result.current_observation.wind.speed; // Correct path for wind speed
        const humidity = result.current_observation.atmosphere.humidity; // Correct path for humidity
        const visibility = result.current_observation.atmosphere.visibility; // Correct path for visibility
        const pressure = result.current_observation.atmosphere.pressure; // Correct path for pressure

        // General location information
        const locationInfo = result.location;
  
        const country = locationInfo.country;
        const lat = locationInfo.lat;
        const long = locationInfo.long;
        const timezone_id = locationInfo.timezone_id;

        console.log('Temperature:', temperature);
        console.log('Condition:', text);
        console.log('Sunrise:', sunrise);
        console.log('Sunset:', sunset);
        console.log('Chill:', chill);
        console.log('Direction:', direction);
        console.log('Speed:', speed);
        console.log('Humidity:', humidity);
        console.log('Visibility:', visibility);
        console.log('Pressure:', pressure);

        console.log('Country:', country);
        console.log('Latitude:', lat);
        console.log('Longitude:', long);
        console.log('Time Zone:', timezone_id);

        // Display the values in HTML elements (make sure these elements exist in your HTML)
        document.getElementById('temperature').innerHTML = temperature;
        document.getElementById('text').innerHTML = text;
        document.getElementById('sunrise').innerHTML = sunrise;
        document.getElementById('sunset').innerHTML = sunset;
        document.getElementById('chill').innerHTML = chill;
        document.getElementById('direction').innerHTML = direction;
        document.getElementById('speed').innerHTML = speed;
        document.getElementById('humidity').innerHTML = humidity;
        document.getElementById('visibility').innerHTML = visibility;
        document.getElementById('pressure').innerHTML = pressure;

        //document.getElementById('displayCity').innerHTML = city; // Changed ID to avoid conflict
        document.getElementById('country').innerHTML = country;
        document.getElementById('lat').innerHTML = lat;
        document.getElementById('long').innerHTML = long;
        document.getElementById('timezone_id').innerHTML = timezone_id;

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to update weather information for a given location
function getWeather(location) {
    document.getElementById('locationName').innerHTML = location; // Ensure you have this element
    fetchWeather(location); // Fetch weather data for the given location
}

// Add event listener to the submit button
document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission
    const cityInput = document.getElementById('cityInput').value; // Get city input (changed ID to avoid conflict)
    getWeather(cityInput); // Get weather for the input city
});

// Initial call to display weather for "Delhi"
getWeather("Delhi");