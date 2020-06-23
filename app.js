const express = require("express");
const app = express();
const https = require("https");
const { response } = require("express");

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=kitchener,ca&appid=deeca45352ba2570bec75fb9812f6c52&units=metric";
  https.get(url, function (response) {
    console.log(response);
    response.on("data", function (data) {
      const WeatherData = JSON.parse(data);
      const temp = WeatherData.main.temp;
      const description = WeatherData.weather[0].description;
      console.log(description);
    });
  });

  res.send("Server is up and  running");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
