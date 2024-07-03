import AudioPlayer from "react-h5-audio-player";
import Testimony from "../components/testimony/Testimony";
import "react-h5-audio-player/lib/styles.css";
import intro from "../../public/music/intro.mp3";

export default function HomePage() {
  return (
    <>
      <h1>L'histoire de Jean michel</h1>
      <Testimony />
      <div>
        <AudioPlayer
          autoPlay
          src={intro}
          // onPlay={console.log("onPlay")}
          // other props here
        />
      </div>
    </>
  );
}