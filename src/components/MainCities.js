import React from "react";

const mainCityStyle = {
  display: "flex",
  alignItems: "flex-end",
  flexWrap: "wrap"
};

const City = ({ country, city }) => (
  <figure className="figure__leftside--margin">
    <img src="https://via.placeholder.com/260x300" alt="{}" />
    <figcaption>
      {city}, {country}
    </figcaption>
  </figure>
);

const MainCities = ({ cities }) => {
  return (
    <div>
      <article style={mainCityStyle}>
        {cities.map(({ city, country }) => (
          <City key={city} city={city} country={country} />
        ))}

        <figure className="add__city">
          <div className="add__more">
            + <br /> Add cit
          </div>
          <figcaption>&nbsp;</figcaption>
        </figure>
      </article>
    </div>
  );
};

export default MainCities;
