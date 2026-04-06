import { useEffect } from "react";
import Loader from "./components/Loader";
import HeroSection from "./components/HeroSection";
import ProfileSection from "./components/ProfileSection";
import EducationSection from "./components/EducationSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Agentation } from "agentation";

export default function App() {
  useEffect(() => {
    console.log("[App] Resetting hash and scroll position on load");

    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = "manual";
    }

    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="relative min-h-screen text-slate-200">
      {/* Global Background */}
      <div
        className="fixed inset-0 z-[-1]"
        style={{ backgroundColor: "#101010" }}
      />
      <Loader />
      <Navbar />
      <main>
        <HeroSection />
        <ProfileSection />
        <EducationSection />
        <ProjectSection />
        <ContactSection />
        <Footer />
      </main>
      {import.meta.env.DEV && <Agentation />}
    </div>
  );
}
