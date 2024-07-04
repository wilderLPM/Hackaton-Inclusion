import AudioPlayer from "react-h5-audio-player";
import "./Music.css";
import Note from "../../assets/music.png";

export default function Music({id}) {
  let musique = (`/music/music${id}.mp3`) 
  return (
    <div id="musicDiv">
      <div id="backgroundmusic">
        <img src={Note} alt="note de musique sur fond orange" id="MusicImg" />
      </div>
      <AudioPlayer
        autoPlay
        src={musique}
      />
    </div>
  );
}
