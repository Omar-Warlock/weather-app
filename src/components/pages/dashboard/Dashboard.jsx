import { useEffect, useState } from "react";
import Current from "./components/Current";
import Daily from "./components/Daily";
import Hourly from "./components/Hourly";

function Dashboard({ searchData, ddlUnit }) {
  const [locationData, setLocationData] = useState({
    location: "",
    cityName: "",
    countryName: "",
    currDate: new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      weekday: "long",
    }).format(new Date()),
  });

  const [weatherData, setWeatherData] = useState({});

  // تحديث بيانات الموقع
  const getLocationData = (inputLocationData) => {
    if (!inputLocationData || !inputLocationData[0]) return;

    const loc = inputLocationData[0];
    setLocationData({
      ...locationData,
      location: loc.address || "",
      cityName: loc.city || "",
      countryName: loc.country_code ? loc.country_code.toUpperCase() : "",
      currDate: new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        weekday: "long",
      }).format(new Date()),
    });
  };

  // جلب بيانات الطقس
  const getWeatherData = (searchData) => {
    if (!searchData || !searchData.lat || !searchData.lon) return;

    let tempUnit = "celsius";
    let windUnit = "kmh";
    let precipUnit = "mm";

    if (ddlUnit === "F") {
      tempUnit = "fahrenheit";
      windUnit = "mph";
      precipUnit = "inch";
    }

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${searchData.lat}&longitude=${searchData.lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,precipitation,wind_speed_10m&wind_speed_unit=${windUnit}&temperature_unit=${tempUnit}&precipitation_unit=${precipUnit}`;

    fetch(url)
      .then((res) => res.json())
      .then((body) => setWeatherData(body))
      .catch((err) => console.error("Weather fetch error:", err));
  };

  // استخدم useEffect لتحديث الداتا لما searchData يتغير
  useEffect(() => {
    if (searchData) {
      getLocationData(searchData);
      getWeatherData(searchData);
      console.log(searchData);
    }
  }, [searchData, ddlUnit]);

  return (
    <div className="dashboard">
      <Current weather={weatherData} location={locationData} />
      <Daily />
      <Hourly />
    </div>
  );
}

export default Dashboard;
