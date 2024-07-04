/* eslint-disable import/no-extraneous-dependencies */
// import Form1
// import Form2
import Button from "../components/Button";

export default function HomePage() {
  return (
    <>
      <h1>Échos d'ailleurs</h1>
      <div id="buttonDiv">
        <Button text={`S'inscrire en tant que candidat`} isLink />
        <Button text={`S'inscrire en tant que recruteur`} isLink />
      </div>
      {/* <Button text="Histoire interactive" isLink /> */}
    </>
  );
}
