import Image from "next/image";
import style from "./page.module.css";
import IntroVideo from "@/components/intro-video";
import Prologue from "@/components/prologue";
import IntroRoom from "@/components/intro-room";
import Reservation from "@/components/reservation";

export default function Home() {
  return (
    // <div className={style.scrollContainer}>
    //   <IntroVideo />
    //   <Prologue />
    //   <IntroRoom />
    //   <Reservation />
    // </div>
    <div className={style.container}>
      <div className={style.part} style={{ backgroundColor: "red" }}>
        1
      </div>
      <div className={style.part} style={{ backgroundColor: "blue" }}>
        2
      </div>
      <div className={style.part} style={{ backgroundColor: "green" }}>
        3
      </div>
      <div className={style.part} style={{ backgroundColor: "purple" }}>
        4
      </div>
    </div>
  );
}
