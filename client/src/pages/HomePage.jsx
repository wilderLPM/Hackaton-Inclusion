/* eslint-disable import/no-extraneous-dependencies */
// import Form1
// import Form2
import Button from "../components/Button";
import "./HomePage.css";
import bg from "/bg.mp4";

export default function HomePage() {
  return (
    <div id="homeDiv">
      <video id="background-video" loop autoPlay>
        <source
          src={bg}
          type="video/mp4"
        />
      </video>
      <h1 id="title">Écho</h1>
      <div id="buttonDiv">
        <Button
          text1="S'inscrire en tant que"
          text2="Candidat"
          isLink
          link="/candidat"
        />
        <Button
          text1="S'inscrire en tant que"
          text2="Recruteur"
          isLink
          link="/entreprise"
        />
      </div>
    </div>
  );
}
