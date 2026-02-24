export default function Home() {
  return (
    <>
      <main className="main wrapper">
        <section className="hero">
          <div className="hero__content">
            <h1 className="hero__title">How's the sky looking today?</h1>

            <div className="hero__search">
              <input
                className="hero__textbox"
                type="text"
                placeholder="Search for a place..."
              />
              <button className="hero__button" type="button">
                Search
              </button>
            </div>
          </div>
        </section>

        <div className="dashboard">
          {/* Current Weather */}
          <section className="current">
            <div className="current__weather">
              <div className="current__location">
                <div className="current__city">Berlin, Germany</div>
                <div className="current__date">Tuesday, Aug 5, 2025</div>
              </div>

              <div className="current__info">
                <img
                  className="current__icon"
                  src="/assets/images/icon-sunny.webp"
                  alt="Sunny"
                  width="320"
                  height="320"
                />
                <div className="current__temp">20°</div>
              </div>
            </div>

            <div className="current__conditions">
              <div className="block current__condition">
                <p className="current__condition-title">Feels Like</p>
                <p className="current__condition-value">18°</p>
              </div>

              <div className="block current__condition">
                <p className="current__condition-title">Humidity</p>
                <p className="current__condition-value">60%</p>
              </div>

              <div className="block current__condition">
                <p className="current__condition-title">Wind</p>
                <p className="current__condition-value">12 km/h</p>
              </div>

              <div className="block current__condition">
                <p className="current__condition-title">Precipitation</p>
                <p className="current__condition-value">0 mm</p>
              </div>
            </div>
          </section>

          {/* Daily Forecast */}
          <section className="daily">
            <h2 className="section__title daily__title">Daily forecast</h2>

            <div className="daily__forecast">
              <div className="block daily__day">Day 1</div>
              <div className="block daily__day">Day 2</div>
              <div className="block daily__day">Day 3</div>
              <div className="block daily__day">Day 4</div>
              <div className="block daily__day">Day 5</div>
              <div className="block daily__day">Day 6</div>
              <div className="block daily__day">Day 7</div>
            </div>
          </section>

          {/* Hourly Forecast */}
          <section className="hourly">
            <div className="hourly__content">
              <div className="hourly__header">
                <h2 className="section__title hourly__title">
                  Hourly forecast
                </h2>

                <select className="dropdown hourly__select">
                  <option>Select Day</option>
                </select>
              </div>

              <div className="hourly__hours">
                <div className="hourly__hour">1:00</div>
                <div className="hourly__hour">2:00</div>
                <div className="hourly__hour">3:00</div>
                <div className="hourly__hour">4:00</div>
                <div className="hourly__hour">5:00</div>
                <div className="hourly__hour">6:00</div>
                <div className="hourly__hour">7:00</div>
                <div className="hourly__hour">8:00</div>
                <div className="hourly__hour">9:00</div>
                <div className="hourly__hour">10:00</div>
                <div className="hourly__hour">11:00</div>
                <div className="hourly__hour">12:00</div>
                <div className="hourly__hour">13:00</div>
                <div className="hourly__hour">14:00</div>
                <div className="hourly__hour">15:00</div>
                <div className="hourly__hour">16:00</div>
                <div className="hourly__hour">17:00</div>
                <div className="hourly__hour">18:00</div>
                <div className="hourly__hour">19:00</div>
                <div className="hourly__hour">20:00</div>
                <div className="hourly__hour">21:00</div>
                <div className="hourly__hour">22:00</div>
                <div className="hourly__hour">23:00</div>
                <div className="hourly__hour">24:00</div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
