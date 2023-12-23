document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const searchInput = document.getElementById("search");
    const weatherContainer = document.getElementById("weather");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const cityName = searchInput.value;
  
      const apiKey = "3aee5b7189adada36138a58ef3517bd6";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          const temperature = data.main.temp;
          const weatherDescription = data.weather[0].description;
          const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  
          weatherContainer.innerHTML = `
            <div>
              <img src="${iconUrl}" alt="Weather Icon">
            </div>
            <div>
              <h2>${temperature} °C</h2>
              <h4>${weatherDescription}</h4>
            </div>
          `;
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    });
  });
  