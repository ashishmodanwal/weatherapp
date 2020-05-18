window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "8px 5px";
    document.getElementById("logo").style.fontSize = "25px";
    document.getElementById("img").style.height = "40px";
    document.getElementById("img").style.width = "40px";
  } else {
    document.getElementById("navbar").style.padding = "25px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}
window.addEventListener("load", () => {
 
  const apikey = "bf751f1d9439a40de9492bcd89309e85";
  const inputElement = document.querySelector("#id");
  const degree = document.querySelector("#degree");
  const countryName = document.querySelector("#country");
  const cityName = document.querySelector("#city");
  const weatherType = document.querySelector("#weather-type");
  const liveDate = document.querySelector("#date");
  const liveTime = document.querySelector("#time");
  let lat;
  let long;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      fetch(
        `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=bf751f1d9439a40de9492bcd89309e85`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((response) => {
          console.log(response);

          const temperatre = response.main["temp"];
          degree.textContent = temperatre;

          const country = response.sys["country"];
          countryName.textContent = country;

          const city1 = response.name;
          cityName.textContent = city1;

          const weatherType1 = response.weather[0].description;
          weatherType.textContent = weatherType1;

          const date = new Date();
          liveDate.textContent = date;

          const time = response.time;
          liveTime.textContent = time;
        })
        .catch((err) => {
          console.log(err);
        });

      console.log(lat);
    });
  }

});
