import mohamedDoaa from "../assets/Doaa&Mohammed.png";

export default function Mohamed_Doaa() {
  return (
    <section className="wedding-section intro-section" aria-labelledby="intro-title">
      <div className="section-inner intro-content">
        <div className="couple-image-card">
          <img
            className="couple-image"
            src={mohamedDoaa}
            alt="Mohammed and Doaa"
          />
        </div>

        <div className="couple-names month-title intro-title" id="intro-title">
          <span>Mohammed</span>
          <span className="ampersand">&amp;</span>
          <span>Doaa</span>
        </div>
      </div>
    </section>
  );
}
