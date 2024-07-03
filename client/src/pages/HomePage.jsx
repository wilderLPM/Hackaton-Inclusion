import Testimony from "../components/testimony/Testimony";
import Music from "../components/music/Music";
import "./HomePage.css";

export default function HomePage() {
  const name = "Jean Michel";
  return (
    <>
      <h1>L'histoire de {name}</h1>
      <main id="mainPage">
        <Testimony />
        <Music />
      </main>
    </>
  );
}
