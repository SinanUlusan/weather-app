import { useState, useEffect } from "react";

import { cloud, sun, rain } from "../../assets/icons/index";
import { useWeatherContext } from "../../context/WeatherContext";
import Card from "../Card";

const Weather = () => {
  const { Weather, city } = useWeatherContext();

  const timeFormat = (time) => {
    const date = new Date(time * 1000);
    const newDay = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
      date
    );
    return newDay;
  };

  const whichIcon = (weatherCondition) => {
    for (const value of weatherCondition) {
      if (value === "Rain") return rain;
      if (value === "Clouds") return cloud;
      if (value === "Clear") return sun;
    }
  };

  const data = Weather?.map((item) => {
    return {
      day: timeFormat(item.dt),
      icon: whichIcon(item.weather?.map((item) => item.main)),
      dayTemp: item.temp.day,
    };
  });

  useEffect(() => console.log(Weather), [Weather]);

  if (data.length) {
    return (
      <>
        <div className="text-animation">
          <h1>{city}</h1>
        </div>
        <div className="weather-container">
          {data.map((item, id) => (
            <Card key={id} item={item} />
          ))}
        </div>
      </>
    );
  } else if (!data.length && city !== "") {
    return (
      <>
        <h2>{`${city} named city couldn't find!`}</h2>
      </>
    );
  }
};

export default Weather;
