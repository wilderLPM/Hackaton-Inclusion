import "./Testimony.css";

export default function Testimony({
  nom,
  mail,
  experience,
  formation,
  skills,
  profil,
  age,
}) {
  return (
    <div id="testominyDiv">
      <p id="testimonyText">
        <h3 id="testimonyname">Nom {nom}</h3>
        
        <h3>profil</h3>
        {profil}
        <h3>Mail</h3>
        {mail}
        <h3>Expérience(s)</h3>
        {experience}
        <h3>Formation(s)</h3>
        {formation}
        <h3>Compétences</h3>
        {skills}
        <h3>Age</h3>
        {age} ans
      </p>
    </div>
  );
}
