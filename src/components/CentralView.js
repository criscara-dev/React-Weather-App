import React from "react";
import moment from "moment";

const TodayData = ({
  todayIcon,
<<<<<<< HEAD
  temperature,
  activeCity,
  activeCountry,
  activeHumidity,
  activePressure,
=======
  weekDay,
  dayMonth,
  temperature,
  activeCity,
  activeCountry,
>>>>>>> c13c8db3444a12abd52a8c0c03906f7a99878642
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
<<<<<<< HEAD
          {/* <h2>Today: {todayMain}</h2>
           <h3 className="todayDescription">- {todayDesc} -</h3> */}
          </div>
          <div className="aside__today--article">
            <div className="aside__today--date1">
              <img  alt="weather icon" src={`https://openweathermap.org/img/w/${todayIcon}.png`} />
            </div>
            <div className="aside__today--date2">
              <h5>{moment(Date.now()).format("MMM Do H[:]mm")}</h5>
            </div>
          </div>
          <div>
            <h3 className="aside__today--date2 odayDescription">- {todayDesc} -</h3>
            </div>
=======
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
>>>>>>> c13c8db3444a12abd52a8c0c03906f7a99878642
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
<<<<<<< HEAD
          <div className="aside__today__2--location">
            Humidity: <b>{activeHumidity}%</b> - Pressure: <b>{activePressure}hPa</b>
          </div>
          <br />
          <div className="aside__today__2--felt">
            Sunrise: {moment.unix(activeSunrise).format('LTS')} 🌎 Sunset: {moment.unix(activeSunset).format('LTS')}
=======
          <div className="aside__today__2--felt">
            Sunrise {moment(activeSunrise).format('LTS')}
            - Sunset
            {moment(activeSunset).format("H[:]mm")}
>>>>>>> c13c8db3444a12abd52a8c0c03906f7a99878642
          </div>
        </div>
      </section>
    </div>
  );
};

<<<<<<< HEAD
const CentralView = ({ main, desc, temperature, name, country, pressure, humidity, sunrise, sunset, weather,icon }) => {
  return (
    <div>
      <TodayData
        todayMain={main}
        todayDesc={desc}
        todayIcon={icon}
        temperature={temperature}
        activeCity={name}
        activeCountry={country}
        activeHumidity={humidity}
        activePressure={pressure}
        activeSunrise={sunrise}
        activeSunset={sunset}
      />
=======
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
>>>>>>> c13c8db3444a12abd52a8c0c03906f7a99878642
    </div>
  );
};

export default CentralView;
