import Image from "next/image";
import style from "./page.module.css";
import IntroVideo from "@/components/intro-video";
import Prologue from "@/components/prologue";
import IntroRoom from "@/components/intro-room";
import Reservation from "@/components/reservation";

export default function Home() {
  return (
    <div className={style.container}>
      <IntroVideo />
      <Prologue />
      <IntroRoom />
      <Reservation />
    </div>
  );
}
