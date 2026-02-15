function Daily() {
  return (
    <section className="daily">
      <h2 className="section__title daily__title">Daily forecast</h2>
      <div className="daily__forecast">
        <div id="dvForecastDay1" className="block daily__day"></div>
        <div id="dvForecastDay2" className="block daily__day"></div>
        <div id="dvForecastDay3" className="block daily__day"></div>
        <div id="dvForecastDay4" className="block daily__day"></div>
        <div id="dvForecastDay5" className="block daily__day"></div>
        <div id="dvForecastDay6" className="block daily__day"></div>
        <div id="dvForecastDay7" className="block daily__day"></div>
      </div>
    </section>
  );
}

export default Daily;
