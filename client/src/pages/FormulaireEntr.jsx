import Button from "../components/Button";
import "./FormulaireEntr.css";

export default function FormulaireEntr() {
  return (
    <div id="formglobal">
      <h1> FORMULAIRE D'ENTREPRISE</h1>
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
          <option value="rock" className="inputclass">
            Jazz
          </option>
          <option value="rock" className="inputclass">
            Rap
          </option>
          <option value="rock" className="inputclass">
            Métal
          </option>
          <option value="rock" className="inputclass">
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
      <Button text="Valider mes réponses" isLink link="/" />
    </div>
  );
}
