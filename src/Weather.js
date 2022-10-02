import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
                    <input type="search" placeholder="Enter a city" className="form-control"/>
                </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary"/>
                </div>
            </div>
        </form>
        <h1>Kampala</h1>
        <ul>
            <li>Wed 07:00</li>
            <li>Mostly Cloudy</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy"/>
                6°C
            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation: 2%</li>
                    <li>Humidity: 84%</li>
                    <li>Wind: 9 km/h</li>
                </ul>
            </div>
        </div>
    </div>
  );
}

