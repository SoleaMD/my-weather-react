import React from "react";
import "./Forecast.css";

export default function Forecast() {
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
