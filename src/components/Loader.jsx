import { useState, useEffect } from "react";

export default function Loader() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  const [isLoaderExiting, setIsLoaderExiting] = useState(false);

  useEffect(() => {
    if (!isLoaderVisible || isLoaderExiting) {
      return undefined;
    }

    console.log("[Loader] Memulai animasi hitung loading");
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
        console.log("[Loader] Loading mencapai 100, menyiapkan animasi exit");
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

    console.log("[Loader] Menjalankan transisi exit loader");
    const hideTimeout = setTimeout(() => {
      console.log("[Loader] Menyembunyikan overlay loader sepenuhnya");
      setIsLoaderVisible(false);
    }, 760);

    return () => clearTimeout(hideTimeout);
  }, [isLoaderExiting]);

  if (!isLoaderVisible) return null;

  return (
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
  );
}
