import rockImg from "./assets/rock.svg";
import scissorImg from "./assets/scissor.svg";
import paperImg from "./assets/paper.svg";
import "./HandIcon.css";

const IMAGES = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

function HandIcon({ className, value }) {
  const src = IMAGES[value];
  return (
    <div className="Hand">
      <img className={`HandButton-icon ${className}`} src={src} alt={value} />
    </div>
  );
}

export default HandIcon;
