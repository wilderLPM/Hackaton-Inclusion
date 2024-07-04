import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import styles from "./CandidatForm.module.css";

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
    fetch("http://localhost:3310/api/cv/created", {
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
      <form className={styles.registerContainer}>
        <label className={styles.label} htmlFor="prénom">
          Nom et Prénom
        </label>
        <input
          className={styles.input}
          id="nom"
          name="nom"
          value={nom}
          onChange={handleNom}
        />
        <label className={styles.label} htmlFor="age">
          Age
        </label>
        <input
          className={styles.input}
          id="age"
          name="age"
          value={age}
          onChange={handleChangAge}
        />
        <label className={styles.label} htmlFor="adresse">
          Adresse
        </label>
        <input
          className={styles.input}
          id="adresse"
          name="adresse"
          value={adresse}
          onChange={handleChangeAdresse}
        />
        <label className={styles.label} htmlFor="tel">
          Numéro de Téléphone
        </label>
        <input
          className={styles.input}
          id="tel"
          name="tel"
          value={tel}
          onChange={handleChangeTel}
        />
        <label className={styles.label} htmlFor="mail">
          Email
        </label>
        <input
          className={styles.input}
          id="mail"
          name="mail"
          value={mail}
          onChange={handleChangeMail}
        />
        <label className={styles.label} htmlFor="experience">
          Expériences
        </label>
        <input
          className={styles.input}
          id="experience"
          name="experience"
          value={experience}
          onChange={handleChangExperience}
        />
        <label className={styles.label} htmlFor="formation">
          Formations
        </label>
        <input
          className={styles.input}
          id="formation"
          name="formation"
          value={formation}
          onChange={handleChangFormation}
        />
        <label className={styles.label} htmlFor="skills">
          Compétences
        </label>
        <input
          className={styles.input}
          id="skills"
          name="skills"
          value={skills}
          onChange={handleChangSkills}
        />
        <label className={styles.label} htmlFor="profil">
          Quelques mots pour vous décrire
        </label>
        <input
          className={styles.input}
          id="profil"
          name="profil"
          value={profil}
          onChange={handleChangProfil}
        />

        <label className={styles.label} htmlFor="musique">
          Votre musique
        </label>
        <input
          className={styles.input}
          id="musique"
          name="musique"
          value={musique}
          onChange={handleChangMusique}
        />
      </form>

      <Button
        text1="Ajouter votre CV"
        isLink
        link="/soulphage"
        handleButton={handleSubmit}
      />
    </section>
  );
}
