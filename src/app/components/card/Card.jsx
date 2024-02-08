"use client";

import Image from "next/image";
import {
  SearchIcon,
  HumidityIcon,
  WindIcon,
  rain,
  clear,
  clouds,
  drizzle,
  mist,
  snow,
} from "@/app/components/card/index";
import { useState } from "react";
import axios from "axios";
import cls from "./Card.module.scss";

export default function CardPage() {
  const [city, setCity] = useState("");
  const [weatherIcon, setWeatherIcon] = useState(clear);
  const [weatherData, setWeatherData] = useState({});

  const handleSearch = async () => {
    if (!city.trim()) return;

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a89004c9b5712dc99895447b0c7ee4e3`
      );

      setWeatherData(response.data);

      const iconCode = response.data.weather[0].icon;

      if (iconCode === "01d" || iconCode === "01n") {
        setWeatherIcon(clear);
      } else if (iconCode === "02d" || iconCode === "02n") {
        setWeatherIcon(clouds);
      } else if (iconCode === "03d" || iconCode === "03n") {
        setWeatherIcon(drizzle);
      } else if (iconCode === "04d" || iconCode === "04n") {
        setWeatherIcon(drizzle);
      } else if (iconCode === "09d" || iconCode === "09n") {
        setWeatherIcon(rain);
      } else if (iconCode === "10d" || iconCode === "10n") {
        setWeatherIcon(rain);
      } else if (iconCode === "13d" || iconCode === "13n") {
        setWeatherIcon(snow);
      } else {
        setWeatherIcon(clear);
      }
    } catch (error) {
      console.error("There was an error:", error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className={cls.card}>
        <div className={cls.search}>
          <input
            className={cls.input_field}
            type="text"
            placeholder="Type city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            spellCheck="false"
            onKeyDown={handleKeyPress}
          />
          <button className={cls.search_button} onClick={handleSearch}>
            <Image src={SearchIcon} alt="search icon" width={20} height={20} />
          </button>
        </div>
        {weatherData && (
          <div className={cls.weather}>
            <Image
              src={weatherIcon}
              alt="weather icon"
              className={cls.weather_icon}
            />
            <h1 className={cls.temp}>
              {weatherData.main && weatherData.main.temp}°
            </h1>
            <h2 className={cls.city}>{weatherData.name}</h2>

            <div className={cls.details}>
              <div className={cls.col}>
                <Image src={HumidityIcon} alt="humidity" width={30} />
                <div>
                  <p className={cls.humidity}>
                    {weatherData.main && weatherData.main.humidity}%
                  </p>
                  <p>Humidity</p>
                </div>
              </div>
              <div className={cls.col}>
                <Image src={WindIcon} alt="wind" width={30} />
                <div>
                  <p className={cls.wind}>
                    {weatherData.wind && weatherData.wind.speed} km/h
                  </p>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
