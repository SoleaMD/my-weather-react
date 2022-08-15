import React from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  function obtainForecast(response) {
    console.log(response.data);
  }

  let apiKey = "31494f01ec42e369b1839339e1ef40bd";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(obtainForecast);

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-4 forecast-day">
          <div className="card-days mx-auto">
            <div className="card-body">
              <h6 className="card-subtitle mb-2">
                Monday
              </h6>
              <h3 className="card-text">
                <img
                  src="https://openweathermap.org/img/wn/02d@2x.png"
                  className="current-weather-emoji"
                  alt=""
                />{" "}
                <div>
                  <span className="degrees">
                    27º / 20º
                  </span>
                </div>
              </h3>
              <h6 className="card-subtitle mb-2 weather-description">
                Few Clouds
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
