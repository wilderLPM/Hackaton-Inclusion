import Button from "../components/Button";
import "./FormulaireEntr.css";

export default function FormulaireEntr() {
  return (
    <div id="formglobal">
      <h2> FORMULAIRE D'ENTREPRISE</h2>
      <form id="formEntr">
        <label className="labelclass1" htmlFor="poste">
          Que recherchez vous ?
        </label>
        <input className="inputclass" type="text" name="poste" required />
        <label className="labelclass" htmlFor="musique">
          {" "}
          Quelle est votre type de musique ?{" "}
        </label>
        <select className="inputclass" name="musique" required>
          <option value="rock" className="inputclass">
            Rock
          </option>
          <option value="jazz" className="inputclass">
            Jazz
          </option>
          <option value="rap" className="inputclass">
            Rap
          </option>
          <option value="metal" className="inputclass">
            Métal
          </option>
          <option value="funk" className="inputclass">
            Funk
          </option>
        </select>
        <label className="labelclass" htmlFor="artiste">
          Votre artiste préféré ?
        </label>
        <input className="inputclass" type="text" name="poste" required />
        <label className="labelclass" htmlFor="artiste">
          L'instrument que vous jouez ou aimeriez jouer ?
        </label>
        <input className="inputclass" type="text" name="poste" required />
      </form>
      <Button text1="Valider mes réponses" isLink link="/soulphage" />
    </div>
  );
}
