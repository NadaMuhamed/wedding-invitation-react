export default function HeroSection() {
  return (
    <section className="wedding-section hero-section" aria-labelledby="hero-title">
      <div className="section-inner hero-content">
        <p className="eyebrow wedding-text">TOGETHER WITH THEIR FAMILIES</p>

        <div className="couple-names month-title" id="hero-title">
          <span>Mohammed</span>
          <span className="ampersand">&amp;</span>
          <span>Doaa</span>
        </div>

        <p className="invitation-copy wedding-text">
          REQUEST THE HONOUR OF YOUR PRESENCE AT THEIR WEDDING CELEBRATION
        </p>

        <div className="date-card wedding-text" aria-label="Wedding date: Tuesday, September 29, 2026 at 6 PM">
          <div className="date-side">
            <span>TUESDAY</span>
          </div>

          <div className="date-center">
            <span className="date-month">SEPTEMBER</span>
            <span className="date-day">29</span>
            <span className="date-year">2026</span>
          </div>

          <div className="date-side">
            <span>AT 6:00 PM</span>
          </div>
        </div>

        <div className="venue-intro wedding-text">
          <p>AL A'ALI AL A'AZEEM MOSQUE</p>
          <span>CELEBRATION TO FOLLOW</span>
        </div>

        <div className="scroll-hint wedding-text" aria-hidden="true">
          <span>SCROLL</span>
          <span className="scroll-line" />
        </div>
      </div>
    </section>
  );
}
