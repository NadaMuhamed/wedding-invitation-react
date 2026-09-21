import mosqueImage from "../assets/mosque.png";

const MAP_URL = "https://maps.app.goo.gl/Nd2Fc4nQTcVweSmHA?g_st=iw";

export default function LocationSection() {
  return (
    <section className="wedding-section location-section" aria-labelledby="location-title">
      <div className="section-inner location-content">
        <p className="eyebrow wedding-text">THE VENUE</p>
        <h2 className="location-heading month-title" id="location-title">
          Meet Us There
        </h2>

        <div className="venue-image-card">
          <img
            className="venue-image"
            src={mosqueImage}
            alt="Illustration of Al A'ali Al A'azeem Mosque"
          />
        </div>

        <div className="location-copy wedding-text">
          <p className="location-name">AL A'ALI AL A'AZEEM MOSQUE</p>
          <p className="location-note">
            We would be honoured to celebrate this beautiful day with you.
          </p>
        </div>

        <a
          className="map-button wedding-text"
          href={MAP_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Open Al A'ali Al A'azeem Mosque in Google Maps"
        >
          OPEN IN GOOGLE MAPS
        </a>
      </div>
    </section>
  );
}
