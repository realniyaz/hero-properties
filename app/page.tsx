import Amenities from "./components/Amenities";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Location from "./components/location";
import Overview from "./components/Overview";
import Price from "./components/Price";

export default function MainPage() {
  return (
    <main className="min-h-screen bg-maroon-900 text-cream-100 selection:bg-gold-500 selection:text-maroon-950 font-sans">
      <Hero/>
      <Overview/>
      <Highlights/>
      <Amenities/>
      <Price/>
      <Location/>
    </main>
  );
}