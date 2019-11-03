import React from "react";
import moment from "moment";
import styled from "styled-components";

const Centered = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-bottom: 2rem;
  text-transform: ${props => (props.desc ? "capitalize" : "none")};
  @media (max-width: 414px) {
    text-transform:capitalize;
    padding: 1rem
    background-color: ${props => (props.title ? "lightgrey" : "none")};
    color: ${props => (props.title ? "black" : "none")};
    font-weight:${props => (props.title ? 700 : 300)};
    font-size:${props => (props.title ? "1.5rem" : ".8rem")};
    vh:100%;
  }
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

const Strong = styled.strong`
  font-weight: 700;
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
      <Centered title>Current weather:</Centered>
      <Centered>
        <IconDate>
          <img
            alt="weather icon"
            src={`https://openweathermap.org/img/w/${todayIcon}.png`}
          />
          <h5>{moment(Date.now()).format("MMM Do H[:]mm")}</h5>
        </IconDate>
      </Centered>

      <Centered desc>
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
        Humidity:<Strong> {activeHumidity}%</Strong> - Pressure:{" "}
        <Strong>
          {activePressure}
          hPa
        </Strong>
      </Centered>

      <Centered>
        <span>Sunrise: {moment.unix(activeSunrise).format("LTS")}</span> 🌎{" "}
        <span>Sunset: {moment.unix(activeSunset).format("LTS")}</span>
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
