function Hourly() {
  return (
    <section className="hourly">
      <div className="hourly__content">
        <div className="hourly__header">
          <h2 className="section__title hourly__title">Hourly forecast</h2>
          <select
            className="dropdown hourly__select"
            name="hourly__select"
            id="ddlDay"
          ></select>
        </div>

        <div className="hourly__hours">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              id={`dvForecastHour${i + 1}`}
              className="hourly__hour"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hourly;
