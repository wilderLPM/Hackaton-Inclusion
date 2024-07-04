import { useEffect, useState } from "react";

/* eslint-disable import/no-extraneous-dependencies */
import Testimony from "../components/testimony/Testimony";
import Music from "../components/music/Music";
// import "./HomePage.css";
import NavigationArrows from "../components/NavigationArrows";
import "react-h5-audio-player/lib/styles.css";
import "./SoulPhage.css";

export default function SoulPhage() {
  const [visible, setVisible] = useState("");
  const [data, setData] = useState(null); // Set initial state to null
  const handleClick = () => {
    setVisible("visible");
  };
  const [idurl, setIdurl] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3310/api/cv/${idurl}`);
        const allData = await response.json();
        setData(allData);
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    };

    fetchData();
  }, [idurl]);

  return (
    <div>
      {data && (
        <>
          <h2>Votre sélection de CV</h2>
          <main id="mainPage">
            <div className={`non ${visible}`}>
              <Testimony
                nom={data.data.nom}
                mail={data.data.mail}
                experience={data.data.experience}
                formation={data.data.formation}
                skills={data.data.skills}
                profil={data.data.profil}
                age={data.data.age}
              />
            </div>
            <Music id={data.data.id} />
          </main>
          <div id="buttonDiv2">
            <button type="button" className="mainButton" onClick={handleClick}>
              J'aime cette musique ! découvrir le CV
            </button>
          </div>
          <NavigationArrows
            playlistLength={3}
            musicPlayed={idurl}
            setMusicPlayed={setIdurl}
          />
        </>
      )}
      </div>
  );
}
