import Testimony from "../components/testimony/Testimony";
import Button from "../components/Button";

export default function HomePage() {
  return (
    <>
      <h1>L'histoire de Jean michel</h1>
      <Testimony />
      <Button text="Histoire interactive" isLink />
    </>
  );
}
