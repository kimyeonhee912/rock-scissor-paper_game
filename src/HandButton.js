import HandIcon from "./HandIcon";
import "./HandIcon.css";

function HandButton({ value, onClick }) {
  const handClick = () => onClick(value);
  return (
    <button className="HandButton" onClick={handClick}>
      <HandIcon value={value} name={false} />
    </button>
  );
}

export default HandButton;
