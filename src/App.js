import React from "react";
import Search from "./Search";
import Footer from "./Footer";
import useLocalStorage from "use-local-storage";

import "./App.css";

export default function App() {
  const [theme, setTheme] = useLocalStorage(
    "theme" ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme =
      theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="App" data-theme={theme}>
      <div className="container">
        <Search defaultCity="Madrid" />
        <div className="Theme" data-theme={theme}>
          <div className="theme-title">Theme</div>
          <div className="row">
            <div className="col-6 light-button">
              <button
                type="button"
                className="btn btn-outline-info light mx-auto"
                onClick={switchTheme}
              >
                Light
              </button>
            </div>
            <div className="col-6 dark-button">
              <button
                type="button"
                className="btn btn-outline-dark dark mx-auto"
                onClick={switchTheme}
              >
                Dark
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
