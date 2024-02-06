import Image from "next/image";
import { SearchIcon } from "@/app/components/card/index";
import cls from "./Card.module.scss";

export default function CardPage() {
  return (
    <>
      <div className={cls.card}>
        <div className={cls.search}>
          <form>
            <input type="text" />
            <Image src={SearchIcon} alt="search icon" />
          </form>
        </div>
      </div>
    </>
  );
}
