import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import ProfileSection from "./components/ProfileSection";
import EducationSection from "./components/EducationSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Agentation } from "agentation";

export default function App() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  const [isLoaderExiting, setIsLoaderExiting] = useState(false);

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

  useEffect(() => {
    if (!isLoaderVisible || isLoaderExiting) {
      return undefined;
    }

    console.log("[App] Starting loading count-up animation");
    const durationInMilliseconds = 1600;
    const animationStart = performance.now();
    let animationFrameId;

    const animate = (timestamp) => {
      const elapsed = timestamp - animationStart;
      const progress = Math.min(elapsed / durationInMilliseconds, 1);
      const nextValue = Math.floor(progress * 100);

      setLoadingProgress(nextValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        console.log("[App] Loading reached 100, preparing exit animation");
        setTimeout(() => setIsLoaderExiting(true), 220);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isLoaderVisible, isLoaderExiting]);

  useEffect(() => {
    if (!isLoaderExiting) {
      return undefined;
    }

    console.log("[App] Running loader exit transition");
    const hideTimeout = setTimeout(() => {
      console.log("[App] Hiding loader overlay");
      setIsLoaderVisible(false);
    }, 760);

    return () => clearTimeout(hideTimeout);
  }, [isLoaderExiting]);

  return (
    <div className="relative min-h-screen text-slate-200">
      {/* Global Background */}
      <div
        className="fixed inset-0 z-[-1]"
        style={{ backgroundColor: "#101010" }}
      />
      {isLoaderVisible && (
        <div
          className={`fixed inset-0 z-100 flex items-center justify-center bg-surface transition-transform duration-700 ease-in-out ${isLoaderExiting ? "-translate-y-full" : "translate-y-0"
            }`}
        >
          <div className="text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <p className="text-sm tracking-[0.25em] uppercase text-[#7f7f7f] mb-3">Loading</p>
            <p className="text-6xl sm:text-7xl font-medium text-[#8ff0a4]">
              {String(loadingProgress).padStart(2, "0")}
            </p>
          </div>
        </div>
      )}
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
