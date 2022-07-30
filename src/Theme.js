import React from "react";

import "./Theme.css";

export default function Theme() {
  return (
    <div className="Theme">
      <div className="theme-title">Theme</div>
      <div className="row">
        <div className="col-6 light-button">
          <button
            type="button"
            className="btn btn-outline-info light mx-auto"
          >
            Light
          </button>
        </div>
        <div className="col-6 dark-button">
          <button
            type="button"
            className="btn btn-outline-dark dark mx-auto"
          >
            Dark
          </button>
        </div>
      </div>
    </div>
  );
}
