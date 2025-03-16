import style from "./intro-video.module.css";

export default function IntroVideo() {
  return (
    <div className={style.container}>
      <video className={style.content} preload="auto" muted autoPlay loop>
        <source src="/media/demo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
