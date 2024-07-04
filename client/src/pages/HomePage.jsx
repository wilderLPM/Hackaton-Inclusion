/* eslint-disable import/no-extraneous-dependencies */
// import Form1
// import Form2
import Button from "../components/Button";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div id="homeDiv">
      <h1>Échos d'ailleurs</h1>
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
