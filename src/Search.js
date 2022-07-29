import React from "react";

import "./Search.css";
import { ReactComponent as Location } from "./img/my_location_dark.svg";

export default function Search() {
  return (
    <div className="Search">
      <form id="city-form">
        <br />
        <div className="mb-3">
          <input
            type="search"
            className="form-control"
            placeholder="Enter a city"
            id="city-selected"
            autoComplete="off"
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
}
