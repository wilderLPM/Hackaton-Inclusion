import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CandidatForm.css";

export default function CandidatForm() {
  const [nom, setNom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [tel, setTel] = useState("");
  const [mail, setMail] = useState("");
  const [experience, setExperience] = useState("");
  const [formation, setFormation] = useState("");
  const [skills, setSkills] = useState("");
  const [profil, setProfil] = useState("");
  const [age, setAge] = useState("");
  const [musique, setMusique] = useState("");

  const navigate = useNavigate();

  const handleNom = (e) => {
    setNom(e.target.value);
  };

  const handleChangeAdresse = (e) => {
    setAdresse(e.target.value);
  };

  const handleChangeTel = (e) => {
    setTel(e.target.value);
  };

  const handleChangeMail = (e) => {
    setMail(e.target.value);
  };

  const handleChangExperience = (e) => {
    setExperience(e.target.value);
  };

  const handleChangFormation = (e) => {
    setFormation(e.target.value);
  };

  const handleChangSkills = (e) => {
    setSkills(e.target.value);
  };

  const handleChangProfil = (e) => {
    setProfil(e.target.value);
  };

  const handleChangAge = (e) => {
    setAge(e.target.value);
  };

  const handleChangMusique = (e) => {
    setMusique(e.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8500/user", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nom,
        adresse,
        tel,
        mail,
        experience,
        formation,
        skills,
        profil,
        age,
        musique,
      }),
    })
      .then((response) => {
        if (response.status === 201) {
          navigate("/");
        } else {
          response.json().then((data) => {
            console.info(data);
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section className={styles.generalContainer}>
      <h2>Parlez nous de vous</h2>
      <div className={styles.registerContainer}>
        <label htmlFor="prénom">
          Nom et Prénom
          <input
            id="nom"
            name="nom"
            value={nom}
            onChange={handleNom}
          />
        </label>
        <label htmlFor="adresse">
          adresse
          <input
            id="adresse"
            name="adresse"
            value={adresse}
            onChange={handleChangeAdresse}
          />
        </label>
        <label htmlFor="tel">
          tel
          <input
            id="tel"
            name="tel"
            value={tel}
            onChange={handleChangeTel}
          />
        </label>
        <label htmlFor="mail">
          Adresse Email
          <input
            id="mail"
            name="mail"
            value={mail}
            onChange={handleChangeMail}
          />
        </label>
        <label htmlFor="experience">
          Expériences
          <input
            id="experience"
            name="experience"
            value={experience}
            onChange={handleChangExperience}
          />
        </label>
        <label htmlFor="formation">
          Formations
          <input
            id="formation"
            name="formation"
            value={mail}
            onChange={handleChangFormation}
          />
        </label>
        <label htmlFor="skills">
          Compétences
          <input
            id="skills"
            name="skills"
            value={skills}
            onChange={handleChangSkills}
          />
        </label>
        <label htmlFor="profil">
          Quelques mots pour vous décrire
          <input
            id="profil"
            name="profil"
            value={profil}
            onChange={handleChangProfil}
          />
        </label>
        <label htmlFor="age">
          Age
          <input
            id="age"
            name="age"
            value={profil}
            onChange={handleChangAge}
          />
        </label>
        <label htmlFor="musique">
          Votre musique
          <input
            id="musique"
            name="musique"
            value={musique}
            onChange={handleChangMusique}
          />
        </label>

        <button type="button" onClick={handleSubmit}>
          Ajouter votre CV
        </button>
      </div>
    </section>
  );
}
