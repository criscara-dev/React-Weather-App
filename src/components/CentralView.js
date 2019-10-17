import React from "react";
import moment from "moment";

const TodayData = ({
  todayIcon,
  temperature,
  activeCity,
  activeCountry,
  activeHumidity,
  activePressure,
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
          <div className="aside__today__2--location">
            Humidity: <b>{activeHumidity}%</b> - Pressure: <b>{activePressure}hPa</b>
          </div>
          <br />
          <div className="aside__today__2--felt">
            Sunrise: {moment.unix(activeSunrise).format('LTS')} 🌎 Sunset: {moment.unix(activeSunset).format('LTS')}
          </div>
        </div>
      </section>
    </div>
  );
};

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
    </div>
  );
};

export default CentralView;
