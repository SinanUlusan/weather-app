import React, { useState } from "react";

import "./style.css";

import SearchImg from "../../assets/images/search.png";

import { useWeatherContext } from "../../context/WeatherContext";

const SearchBar = () => {
  const { getCityName } = useWeatherContext();

  const [searchCity, setSearchCity] = useState("");

  const handleOnchange = (e) => {
    setSearchCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchCity.trim() !== "") {
      await getCityName(searchCity);
      setSearchCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Please enter a city name"
        value={searchCity}
        onChange={handleOnchange}
      />
      <img src={SearchImg} alt="search" />
    </form>
  );
};

export default SearchBar;
