const input = document.getElementById("search-input");
const button = document.getElementById("search-btn");
const apiKey = "934dd879fad64c1aa37141847260909";
const card = document.querySelector(".content")
const container = document.querySelector(".card")
button.addEventListener("click", async function () {
  try { 

    card.innerHTML = `<div class="spinner"></div>
                    <div>Loading weather data...</div>`
    ;
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=934dd879fad64c1aa37141847260909&q=${input.value}`,);
    let data = await response.json();
    if (!response.ok) {
        container.classList.add('state-notfound')
        card.innerHTML = ` <div class="error-box">
                            <div class="icon">❗</div>
                             <h3>City not found</h3>
                            <p>We couldn't find the city you're looking for.</p>
                            <button class="btn-retry">Try again</button>
                           </div>`
    ;}
    container.classList.add("state-success")
    card.innerHTML = `<div class="weather-result"><br>
  <div class="city">${data.location.name}</div><br>
  <div class="country">${data.location.country}</div><br>
  <div class="temp">☀️ ${data.current.temp_c}°C</div><br>
  <div class="description">${data.current.condition.text}</div><br>
  <div class="wind"><span class="wind-icon">💨</span> Wind: ${data.current.wind_kph} km/h</div><br>
</div>`
    

  } catch (e) {
    return 1;
  }
});




