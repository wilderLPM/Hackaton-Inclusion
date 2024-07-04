import Button from "../components/Button";

export default function FormulaireEntr() {
  return (
    <form id="formEntr">
      <label className="" htmlFor="poste">
        Quel poste recherchez vous ?
      </label>
      <input
        className=""
        type="text"
        name="poste"
        required
      />
      <label className="" htmlFor="musique">
        Quelle est votre type de musique ?
      </label>
      <input
        className=""
        type="text"
        name="poste"
        required
      />
      <label className="" htmlFor="artiste">
        Votre artiste préféré ?
      </label>
      <input
        className=""
        type="text"
        name="poste"
        required
      />
            <label className="" htmlFor="artiste">
        L'instrument que vous jouez ou aimeriez jouer ?
      </label>
      <input
        className=""
        type="text"
        name="poste"
        required
      />
    </form>
  );
}
