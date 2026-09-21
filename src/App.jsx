import Mohamed_Doaa from "./components/Mohamed_Doaa";
import HeroSection from "./components/HeroSection";
import CalendarSection from "./components/CalendarSection";
import LocationSection from "./components/LocationSection";
import Decorations from "./components/Decorations";

export default function App() {
  return (
    <div className="app-shell">
      <Decorations />

      <main className="wedding-page" aria-label="Wedding invitation">
        <Mohamed_Doaa />
        <HeroSection />
        <CalendarSection />
        <LocationSection />
      </main>
    </div>
  );
}
