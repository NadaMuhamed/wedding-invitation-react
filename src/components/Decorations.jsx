import topRight from "../assets/corner-top-right.png";
import bottomLeft from "../assets/corner-bottom-left.png";

export default function Decorations() {
  return (
    <div className="fixed-decorations" aria-hidden="true">
      <img
        className="corner-decoration corner-decoration--top-right"
        src={topRight}
        alt=""
      />
      <img
        className="corner-decoration corner-decoration--bottom-left"
        src={bottomLeft}
        alt=""
      />
    </div>
  );
}
