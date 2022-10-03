import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultcity="Kampala"/>
        <footer>
      This project was made by Lyne N and is {" "}
          <a href="https://github.com/Lynesn/ReactWeatherApp" target="blank">open-sourced on Github</a>
        </footer>
      </div>
    </div>
  );
}

