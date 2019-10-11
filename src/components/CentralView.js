import React from "react";
import moment from "moment";

const TodayData = ({
  todayIcon,
  weekDay,
  dayMonth,
  temperature,
  activeCity,
  activeCountry,
  activeSunrise,
  activeSunset,
  todayMain,
  todayDesc
}) => {
  const celsius = temperature - 273.15;
  return (
    <div>
      <section className="today">
        <article>
          <div>
          <h2>{todayMain}:</h2>
           <h3>{todayDesc}</h3>
          </div>
          <div className="aside__today--article">
            <div className="aside__today--date1">
              <img alt="weather icon" src={`https://openweathermap.org/img/w/${todayIcon}.png`} />
            </div>
            <div className="aside__today--date2">
              <h6>Today</h6>{moment(Date.now()).format("H[:]mm")}
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
            Sunrise {moment(activeSunrise).format('LTS')}
            - Sunset
            {moment(activeSunset).format("H[:]mm")}
          </div>
        </div>
      </section>
    </div>
  );
};

const CentralView = ({ main, desc, temperature, name, country,sunrise, sunset, weather,icon }) => {
  return (
    <div>
      <TodayData
      todayMain={main}
      todayDesc={desc}
        todayIcon={icon}
        weekDay={""}
        dayMonth={""}
        temperature={temperature}
        activeCity={name}
        activeCountry={country}
        activeSunrise={sunrise}
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
          {weather.map(weatherElement => (
            <div key={sunset} className="chart">
              <div className="chart-bar bar-2"></div>
              <div>10AM</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CentralView;
