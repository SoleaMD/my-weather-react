import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import Time from "./Time";
import Data from "./Data";

import "./Search.css";
import { ReactComponent as Location } from "./img/my_location_dark.svg";

export default function Search() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(false);
  const [weather, setWeather] = useState("");
  const [statement, setStatement] = useState("");

  function displayTemperature(response) {
    setResult(true);
    setWeather({
      temperature: response.data.main.temp,
      description:
        response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
      feels: response.data.main.feels_like,
      max: response.data.main.temp_max,
      min: response.data.main.temp_min,
      date: new Date(response.data.dt * 1000),
    });
  }

  function goSearch(event) {
    event.preventDefault();
    let apiKey =
      "31494f01ec42e369b1839339e1ef40bd";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);

    if (city.length <= 0) {
      setStatement(
        <p>
          Invalid city search, please try again
        </p>
      );
    } else {
      setStatement("");
    }
  }
  function updateSearch(event) {
    setCity(event.target.value);
  }
  let form = (
    <div className="Search">
      <form id="city-form" onSubmit={goSearch}>
        <br />
        <div className="mb-3">
          <input
            type="search"
            className="form-control"
            placeholder="Enter a city"
            id="city-selected"
            autoComplete="off"
            onChange={updateSearch}
          />
          <input
            type="submit"
            className="btn btn-design"
            value="Search"
            id="search-button"
          />
          <span>
            <Location
              className="coordinates-image"
              alt="current location using a phone"
            />
          </span>
        </div>
      </form>
    </div>
  );
  if (result === true) {
    return (
      <div className="SearchEngine">
        {form}
        {statement}
        <div className="row justify-content-evenly">
          <div className="col-4 time">
            <br />
            <Time date={weather.date} />
          </div>
          <div className="col-4">
            <Weather
              city={weather.city}
              temperature={Math.round(
                weather.temperature
              )}
              description={weather.description}
              icon={weather.icon}
              date={weather.date}
            />
          </div>
          <div className="col-4 other-data">
            <Data
              humidity={weather.humidity}
              wind={Math.round(weather.wind)}
              degreesCurrent={Math.round(
                weather.feels
              )}
              degreesHigh={Math.round(
                weather.max
              )}
              degreesLow={Math.round(weather.min)}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="SearchEngine">
        {form}
        {statement}
      </div>
    );
  }
}
