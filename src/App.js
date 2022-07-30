import React from "react";
import Search from "./Search";
import Time from "./Time";
import Weather from "./Weather";
import Data from "./Data";
import Theme from "./Theme";
import Footer from "./Footer";

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
          <div className="col-4 other-data">
            <Data />
          </div>
          <Theme />
        </div>
        <Footer />
      </div>
    </div>
  );
}
