import React from "react";
import moment from "moment";
import styled from "styled-components";

const Centered = styled.div`
  text-align: center;
  padding-bottom: 3rem;
`;

const TodayData = ({
  todayIcon,
  temperature,
  activeCity,
  activeCountry,
  activeHumidity,
  activePressure,
  activeSunrise,
  activeSunset,
  todayDesc
}) => {
  const celsius = temperature - 273.15;
  return (
    <div>
      <section style={{ display: "flex", justifyContent: "center" }}>
        <article>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 6
            }}
          >
            <div style={{ flex: 1, marginRight: "1rem" }}>
              <img
                alt="weather icon"
                src={`https://openweathermap.org/img/w/${todayIcon}.png`}
              />
            </div>
            <div style={{ flex: 1, textTransform: "capitalize" }}>
              <h5>{moment(Date.now()).format("MMM Do H[:]mm")}</h5>
            </div>
          </div>
          <div>
            <h3 style={{ flex: 1, textTransform: "capitalize" }}>
              - {todayDesc} -
            </h3>
          </div>
        </article>
      </section>
      <section>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ fontSize: 64, fontWeight: 100 }}>
            {celsius.toFixed(1)}
          </div>
          <div style={{ lineHeight: 3 }}>°C</div>
        </div>
        <div>
          <Centered>
            {activeCity}, {activeCountry}
          </Centered>
          <br />
          <Centered>
            Humidity: <b>{activeHumidity}%</b> - Pressure:{" "}
            <b>{activePressure}hPa</b>
          </Centered>
          <br />
          <Centered>
            Sunrise: {moment.unix(activeSunrise).format("LTS")} 🌎 Sunset:{" "}
            {moment.unix(activeSunset).format("LTS")}
          </Centered>
        </div>
      </section>
    </div>
  );
};

const CentralView = ({
  desc,
  temperature,
  name,
  country,
  pressure,
  humidity,
  sunrise,
  sunset,
  icon
}) => {
  return (
    <div>
      <TodayData
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
