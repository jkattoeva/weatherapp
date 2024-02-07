import Image from "next/image";
import {
  SearchIcon,
  HumidityIcon,
  WindIcon,
  rain,
} from "@/app/components/card/index";
import cls from "./Card.module.scss";

export default function CardPage() {
  return (
    <>
      <div className={cls.card}>
        <div className={cls.search}>
          <input
            className={cls.input_field}
            type="text"
            placeholder="type city name"
            spellCheck="false"
          />
          <button className={cls.search_button}>
            <Image src={SearchIcon} alt="search icon" />
          </button>
        </div>
        <div className={cls.weather}>
          <Image src={rain} alt="weather icon" className={cls.weather_icon} />
          <h1 className={cls.temp}>−6°</h1>
          <h2 className={cls.city}>New York</h2>

          <div className={cls.details}>
            <div className={cls.col}>
              <Image src={HumidityIcon} alt="humidity" width={30} />
              <div>
                <p className={cls.humidity}>50%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className={cls.col}>
              <Image src={WindIcon} alt="wind" width={30} />
              <div>
                <p className={cls.wind}>15 km/h</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
