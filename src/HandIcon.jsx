import rockImg from "./assets/rock.svg";
import scissorImg from "./assets/scissor.svg";
import paperImg from "./assets/paper.svg";
import "./HandIcon.css";

const IMAGES = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

function HandIcon({ name, value }) {
  const src = IMAGES[value];
  let className = "";

  if (name === true) {
    className = "icon";
  }
  return (
    <>
      <img className={`HandButton-icon ${className}`} src={src} alt={value} />
    </>
  );
}

export default HandIcon;
