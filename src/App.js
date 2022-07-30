import React from "react";
import Search from "./Search";
import Time from "./Time";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <div className="row justify-content-evenly">
          <div className="col-4 time">
            <br />
            <Time />
          </div>
          <div className="col-4">
            <Weather />
          </div>
          <div className="col-4 other-data"></div>
        </div>
      </div>
    </div>
  );
}
