import CardPage from "../components/card/Card";
import cls from "@/styles/HomePage.module.scss";

export default function HomePage() {
  return (
    <>
      <div className={cls.home_page}>
        <CardPage />
      </div>
    </>
  );
}
