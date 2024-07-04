import { useState } from "react";

/* eslint-disable import/no-extraneous-dependencies */
import Testimony from "../components/testimony/Testimony";
import Music from "../components/music/Music";
// import "./HomePage.css";
import NavigationArrows from "../components/NavigationArrows";
import "react-h5-audio-player/lib/styles.css";
import "./SoulPhage.css"

export default function SoulPhage() {
  const [visible, setVisible] = useState("");
  const handleClick = () => {
    setVisible("visible");
  };
  return (
    <>
      <h2 >Votre sélection de CV</h2>
      <main id="mainPage">
        <div className={`non ${visible}`}>
          <Testimony />
        </div>
        <Music />
      </main>
      <div id="buttonDiv2">
        <button type="button" className="mainButton" onClick={handleClick}>
          J'aime cette musique ! découvrir le CV
        </button>
      </div>
      <NavigationArrows />
    </>
  );
}
