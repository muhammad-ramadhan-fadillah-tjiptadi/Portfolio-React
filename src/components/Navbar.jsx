import { useEffect, useRef, useState, memo, useCallback } from "react";

const navItems = [
  { label: "Home", href: "#beranda" },
  { label: "About", href: "#profil" },
  { label: "Education", href: "#pendidikan" },
  { label: "Certificates", href: "#sertifikat" },
  { label: "Projects", href: "#proyek" },
  { label: "Contact", href: "#kontak" },
];

const DesktopNavItem = memo(({ item, isActive, onClick }) => (
  <a
    href={item.href}
    onClick={(e) => onClick(e, item.href)}
    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group inline-flex items-center gap-2 ${
      isActive ? "text-[#8ff0a4]" : "text-slate-300 hover:text-[#8ff0a4]"
    }`}
  >
    <span
      className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
        isActive ? "bg-[#8ff0a4] opacity-100" : "bg-transparent opacity-0"
      }`}
    />
    {item.label}
    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#8ff0a4] group-hover:w-3/4 transition-all duration-300 rounded-full" />
  </a>
));
DesktopNavItem.displayName = "DesktopNavItem";

const MobileNavItem = memo(({ item, isActive, onClick }) => (
  <a
    href={item.href}
    onClick={(e) => onClick(e, item.href)}
    className={`flex min-w-0 flex-1 flex-col items-center justify-center rounded-xl px-2 py-1.5 text-[11px] font-medium transition-all duration-300 ${
      isActive
        ? "text-[#8ff0a4] bg-[#8ff0a4]/12 scale-105"
        : "text-[#BEBEBE] hover:text-[#8ff0a4] hover:bg-white/5 hover:scale-110"
    }`}
  >
    <span
      className={`mb-1 h-1.5 w-1.5 rounded-full ${
        isActive ? "bg-[#8ff0a4]" : "bg-transparent"
      }`}
    />
    <span className="w-full truncate text-center">{item.label}</span>
  </a>
));
MobileNavItem.displayName = "MobileNavItem";

export default memo(function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#beranda");
  const autoScrollLockSectionRef = useRef("");
  const autoScrollLockTargetTopRef = useRef(0);
  const autoScrollLockTimeoutRef = useRef(undefined);

  useEffect(() => {
    const updateNavbarState = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 50);

      const hasAutoScrollLock = Boolean(autoScrollLockSectionRef.current);

      if (hasAutoScrollLock) {
        const distanceToTarget = Math.abs(
          currentScroll - autoScrollLockTargetTopRef.current,
        );

        if (distanceToTarget <= 24) {
          autoScrollLockSectionRef.current = "";
          if (autoScrollLockTimeoutRef.current) {
            clearTimeout(autoScrollLockTimeoutRef.current);
            autoScrollLockTimeoutRef.current = undefined;
          }
        } else {
          setActiveSection(autoScrollLockSectionRef.current);
          return;
        }
      }

      const scrollReference = currentScroll + window.innerHeight * 0.35;
      let nextActiveSection = navItems[0].href;

      navItems.forEach((item) => {
        const sectionElement = document.querySelector(item.href);
        if (sectionElement && sectionElement.offsetTop <= scrollReference) {
          nextActiveSection = item.href;
        }
      });

      setActiveSection((previousSection) => {
        if (previousSection !== nextActiveSection) {
          console.log("[Navbar] Active section changed to", nextActiveSection);
          return nextActiveSection;
        }
        return previousSection;
      });
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateNavbarState();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    updateNavbarState();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (autoScrollLockTimeoutRef.current) {
        clearTimeout(autoScrollLockTimeoutRef.current);
      }
    };
  }, []);

  const handleClick = useCallback((e, href) => {
    e.preventDefault();
    console.log("[Navbar] Clicked nav item", href);
    setActiveSection(href);

    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }

    const target = document.querySelector(href);
    if (target) {
      const targetTop = target.offsetTop;
      const travelDistance = Math.abs(targetTop - window.scrollY);
      const lockDuration = Math.min(1400, Math.max(450, travelDistance * 0.65));

      autoScrollLockSectionRef.current = href;
      autoScrollLockTargetTopRef.current = targetTop;
      if (autoScrollLockTimeoutRef.current) {
        clearTimeout(autoScrollLockTimeoutRef.current);
      }
      autoScrollLockTimeoutRef.current = setTimeout(() => {
        autoScrollLockSectionRef.current = "";
        autoScrollLockTimeoutRef.current = undefined;
      }, lockDuration);

      target.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
        <div
          className={`pointer-events-auto mx-auto flex items-center justify-center h-14 lg:h-16 rounded-full border transition-[max-width,background-color,border-color,backdrop-filter,box-shadow] duration-300 ${
            scrolled
              ? "max-w-4xl border-white/6 bg-surface/45 backdrop-blur-md shadow-md shadow-black/10"
              : "max-w-6xl border-transparent bg-transparent"
          }`}
        >
          {/* Desktop Menu */}
          <div className="flex items-center gap-1 px-2">
            {navItems.map((item) => (
              <DesktopNavItem
                key={item.href}
                item={item}
                isActive={activeSection === item.href}
                onClick={handleClick}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Dock */}
      <div className="lg:hidden pointer-events-auto fixed inset-x-0 bottom-3 z-70 flex justify-center px-3 pb-[env(safe-area-inset-bottom)]">
        <div className="flex w-full max-w-140 items-end gap-1 rounded-2xl border border-white/10 bg-surface/80 px-2 py-2 backdrop-blur-xl shadow-lg shadow-black/20">
          {navItems.map((item) => (
            <MobileNavItem
              key={item.href}
              item={item}
              isActive={activeSection === item.href}
              onClick={handleClick}
            />
          ))}
        </div>
      </div>
    </nav>
  );
});
