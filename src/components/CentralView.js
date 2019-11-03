import React from "react";
import moment from "moment";
import styled from "styled-components";

const Centered = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-bottom: 2rem;
`;

const Deg = styled.div`
  line-height: 2rem;
`;

const Celsius = styled.div`
  font-size: 4rem;
  font-weight: 100;
`;

const IconDate = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
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
    <React.Fragment>
      <Centered>Current weather:</Centered>
      <Centered>
        <IconDate>
          <img
            alt="weather icon"
            src={`https://openweathermap.org/img/w/${todayIcon}.png`}
          />
          <h5>{moment(Date.now()).format("MMM Do H[:]mm")}</h5>
        </IconDate>
      </Centered>

      <Centered>
        <h3>- {todayDesc} -</h3>
      </Centered>

      <Centered>
        <Celsius>{celsius.toFixed(1)}</Celsius>
        <Deg>°C</Deg>
      </Centered>

      <Centered>
        {activeCity}, {activeCountry}
      </Centered>

      <Centered>
        Humidity: <b>{activeHumidity}%</b> - Pressure:{" "}
        <b>{activePressure}hPa</b>
      </Centered>

      <Centered>
        Sunrise: {moment.unix(activeSunrise).format("LTS")} 🌎 Sunset:{" "}
        {moment.unix(activeSunset).format("LTS")}
      </Centered>
    </React.Fragment>
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
