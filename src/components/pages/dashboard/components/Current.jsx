import { weatherIcons } from "../../../../data/data";
function Current({ weather, location }) {
  return (
    <section className="current">
      <h2 className="visually-hidden">Current Location Temperature</h2>

      <div className="current__weather">
        <div className="current__location">
          <div id="dvCityCountry" className="current__city">
            Berlin, Germany
          </div>
          <div id="dvCurrDate" className="current__date">
            Tuesday, Aug 5, 2025
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
            <span id="dvCurrTemp">20</span>&deg;
          </div>
        </div>
      </div>

      <div className="current__conditions">
        <div className="block current__condition">
          <p className="current__condition-title">Feels Like</p>
          <p className="current__condition-value">
            <span id="pFeelsLike"></span>&deg;
          </p>
        </div>

        <div className="block current__condition">
          <p className="current__condition-title">Humidity</p>
          <p className="current__condition-value">
            <span id="pHumidity"></span>%
          </p>
        </div>

        <div className="block current__condition">
          <p className="current__condition-title">Wind</p>
          <p id="pWind" className="current__condition-value"></p>
        </div>

        <div className="block current__condition">
          <p className="current__condition-title">Precipitation</p>
          <p id="pPrecipitation" className="current__condition-value"></p>
        </div>
      </div>
    </section>
  );
}

export default Current;
