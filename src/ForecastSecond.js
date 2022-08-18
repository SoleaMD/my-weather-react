import React, {
  useState,
  useEffect,
} from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function ForecastSecond(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState("");

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function obtainForecast(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="ForecastSecond">
        <div className="row">
          {forecast.map(function (
            dailyForecast,
            index
          ) {
            if (index < 6 && index > 3) {
              return (
                <div className="col-6 forecast-day">
                  <div className="card-days mx-auto">
                    <div
                      className="card-body"
                      key={index}
                    >
                      <ForecastDay
                        data={dailyForecast}
                      />
                    </div>{" "}
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey =
      "31494f01ec42e369b1839339e1ef40bd";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(obtainForecast);

    return null;
  }
}
