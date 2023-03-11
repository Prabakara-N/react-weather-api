import React, { useState, useEffect } from "react";
import "./styles/App.css";
import "./styles/normalize.css";
import Weather from "./components/Weather";
import { FaCloudSunRain, FaSearch } from "react-icons/fa";

const App = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  let url = `http://api.weatherapi.com/v1/current.json?key=74cfee985da04864bd390458230802&q=${value}`;

  const getWeather = async () => {
    await fetch(url)
      .then((response) => {
        // if (!response.ok) {
        //   alert("No weather found !!!");
        //   throw new Error("No weather found !!!");
        // }
        return response.json();
      })
      .then((data) => setData([data]));
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <>
      {/* input container */}
      <div className="input-container">
        <h2 className="title">
          Weather <span>APP </span> <FaCloudSunRain />
        </h2>
      </div>

      {/*  input */}
      <div className="btn-cont">
        <input
          type="text"
          name="city"
          placeholder="Enter a city name..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoComplete="off"
        />
        <div className="search-icon">
          <FaSearch />
        </div>

        {/* btn animation */}
        <button type="button" onClick={getWeather}>
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>Search</span>
        </button>
      </div>

      {/* output container */}
      <Weather data={data} />
    </>
  );
};

export default App;
