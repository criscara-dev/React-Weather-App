import React from "react";
import moment from "moment";

const TodayData = ({
  todayIcon,
  weekDay,
  dayMonth,
  temperature,
  activeCity,
  activeCountry,
  activeFeel,
  activeSunset
}) => {
  const celsius = temperature - 273.15;
  return (
    <div>
      <section className="today">
        <article>
          <div className="aside__today--article">
            <div className="aside__today--date1">
              <i className={`fas ${todayIcon}`}></i>
            </div>
            <div className="aside__today--date2">
              <h6>Today</h6>
              <h6 className="aside__today--lightfont">
                {weekDay}, {dayMonth}
              </h6>
            </div>
          </div>
        </article>
      </section>
      <section className="data__2">
        <div className="aside__today--degree">
        <div>{celsius.toFixed(1)}</div>
          <div className="degree">°C</div>
        </div>
        <div>
          <div className="aside__today__2--location">
            {activeCity}, {activeCountry}
          </div>
          <br />
          <div className="aside__today__2--felt">
            Feels like {activeFeel}°C - Sunset{" "}
            {moment(activeSunset).format("H[:]mm")}
          </div>
        </div>
      </section>
    </div>
  );
};

const CentralView = ({ temperature, sunset, weather }) => {
  return (
    <div>
      <TodayData
        todayIcon={""}
        weekDay={""}
        dayMonth={""}
        temperature={temperature}
        activeCity={""}
        activeCountry={""}
        activeFeel={""}
        activeSunset={sunset}
      />

      <section className="data_3">
        <div id="title-chart">Chance of rain</div>
        <br />
        <div id="chart-area">
          <div id="dayType">
            <div>sunny</div>
            <div>rainy</div>
            <div>
              heavy
              <br /> rain
            </div>
          </div>
          {weather.map(weatherElement => (
            <div key={sunset} className="chart">
              <div className="chart-bar bar-1"></div>
              <div>10AM</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CentralView;
