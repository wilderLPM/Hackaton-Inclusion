import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import intro from "../../public/music/intro.mp3";

export default function HomePage() {
  return (
    <div>
      <h1>Inclusion</h1>
      <div>
        <AudioPlayer
          autoPlay
          src={intro}
          // onPlay={console.log("onPlay")}
          // other props here
        />
      </div>
    </div>
  );
}
