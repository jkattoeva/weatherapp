import Image from "next/image";
import { SearchIcon } from "@/app/components/card/index";
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
        <div className={cls.weather}></div>
      </div>
    </>
  );
}
