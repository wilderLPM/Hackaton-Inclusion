import AudioPlayer from "react-h5-audio-player";
import "./Music.css";
import Note from "../../assets/music.png";
import intro from "../../../public/music/intro.mp3";

export default function Music() {
  return (
    <div id="musicDiv">
      <img src={Note} alt="note de musique sur fond orange" id="MusicImg" />
      <AudioPlayer
          autoPlay
          src={intro}
          // onPlay={console.log("onPlay")}
          // other props here
        />
    </div>
  );
}
