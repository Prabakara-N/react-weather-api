import React from "react";
import { FaTemperatureHigh } from "react-icons/fa";

const Weather = ({ weather }) => {
  // to get respective time for every country
  function getTime(timeNow) {
    // to get time & date in string format
    let d = new Date(timeNow.location.localtime);
    let weekday = d.toLocaleString("default", { weekday: "short" });
    let month = d.toLocaleString("default", { month: "short" });
    let date = d.getDate();
    let hour = d.getHours();
    let mins = d.getMinutes();

    let period = "AM";

    let h = hour > 12 ? hour - 12 : hour;
    let hr = h < 10 ? `0${h}` : h;
    let m = mins < 10 ? `0${mins}` : mins;
    period = hour >= 12 ? "PM" : "AM";

    return `${weekday}, ${month} ${date} - ${hr} : ${m} ${period}`;
  }

  return (
    <>
      <div className="output-container">
        <h2 className="city">{weather.location.name}</h2>
        <p className="country">{`${weather.location.country}`}</p>
        <p className="region">{`${weather.location.region}`}</p>
        <p className="date">{getTime(weather)}</p>
        <h1 className="celcius">{`${weather.current.temp_c}°C`}</h1>
        <div className="icon-contaoner">
          <p className="type">{`${weather.current.condition.text}`}</p>
          <div className="weather-icons">
            <img
              src={weather.current.condition.icon}
              className="weather-icon"
              alt="icon"
            />
          </div>
        </div>
        <p className="range">
          {`${weather.current.feelslike_c}°C / ${weather.current.temp_c}°C`}{" "}
          <FaTemperatureHigh />
        </p>
      </div>
    </>
  );
};

export default Weather;
