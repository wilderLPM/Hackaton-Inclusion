/* eslint-disable import/no-extraneous-dependencies */
import Testimony from "../components/testimony/Testimony";
import Music from "../components/music/Music";
import "./HomePage.css";
import Button from "../components/Button";
import NavigationArrows from "../components/NavigationArrows";
import "react-h5-audio-player/lib/styles.css";

export default function HomePage() {
  const name = "Jean Michel";
  return (
    <>
      <h1>L'histoire de {name}</h1>
      <main id="mainPage">
        <Testimony />
        <Music />
      </main>
      <Button text="Histoire interactive" isLink />
      <NavigationArrows />
    </>
  );
}
