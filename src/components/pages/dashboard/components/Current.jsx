import bgSmall from "../../../../../src//assets/images/bg-today-small.svg";
import bgLarge from "../../../../../src//assets/images/bg-today-Large.svg";
import { weatherIcons } from "../../../../data/data";
import { useEffect, useState } from "react";
function Current({ weather, location }) {
  const current = weather?.current;
  const units = weather?.current_units;
  const [bgImage, setBgImage] = useState(bgSmall);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 700) {
        setBgImage(bgLarge);
      } else {
        setBgImage(bgSmall);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="current">
      <h2 className="visually-hidden">Current Location Temperature</h2>

      <div
        className="current__weather"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="current__location">
          <div id="dvCityCountry" className="current__city">
            {`${location?.cityName || ""}, ${location?.countryName || ""}`}
          </div>

          <div id="dvCurrDate" className="current__date">
            {location?.currDate}
          </div>
        </div>

        <div className="current__info">
          <img
            className="current__icon"
            src={weatherIcons.clear}
            alt=""
            width="320"
            height="320"
          />

          <div className="current__temp">
            <span id="dvCurrTemp">
              {current?.temperature_2m !== undefined
                ? Math.round(current.temperature_2m)
                : "--"}
            </span>
            &deg;
          </div>
        </div>
      </div>

      <div className="current__conditions">
        <div className="block current__condition">
          <p className="current__condition-title">Feels Like</p>
          <p className="current__condition-value">
            <span id="pFeelsLike">
              {current?.apparent_temperature !== undefined
                ? Math.round(current.apparent_temperature)
                : "--"}
            </span>
            &deg;
          </p>
        </div>

        <div className="block current__condition">
          <p className="current__condition-title">Humidity</p>
          <p className="current__condition-value">
            <span id="pHumidity">{current?.relative_humidity_2m ?? "--"}</span>%
          </p>
        </div>

        <div className="block current__condition">
          <p className="current__condition-title">Wind</p>
          <p id="pWind" className="current__condition-value">
            {current?.wind_speed_10m !== undefined
              ? `${current.wind_speed_10m} ${
                  units?.wind_speed_10m?.replace("mp/h", "mph") || ""
                }`
              : "--"}
          </p>
        </div>

        <div className="block current__condition">
          <p className="current__condition-title">Precipitation</p>
          <p id="pPrecipitation" className="current__condition-value">
            {current?.precipitation !== undefined
              ? `${current.precipitation} ${
                  units?.precipitation?.replace("inch", "in") || ""
                }`
              : "--"}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Current;
