import "./Music.css";
import Note from "../../assets/music.png";

export default function Music() {
  return (
    <div id="musicDiv">
      <img src={Note} alt="note de musique sur fond orange" id="MusicImg" />
    </div>
  );
}
