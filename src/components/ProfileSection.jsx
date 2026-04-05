import FaultyTerminal from "./FaultyTerminal";

export default function ProfilSection() {
  console.log("[ProfilSection] Rendering About Me section");

  return (
    <section id="profil" className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute top-0 left-12 sm:left-16 lg:left-24 right-12 sm:right-16 lg:right-24 h-[1px] bg-white/[0.05]"></div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-0 items-stretch">
          {/* Left Side — About Me */}
          <div className="pr-6 sm:pr-8">
            <div className="flex items-center gap-4 mb-4">
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "#F3F3F398" }}
              >
                00 ABOUT
              </span>
              <div className="h-[1px] w-12 bg-white/20"></div>
            </div>

            <h2
              className="leading-tight tracking-tight text-3xl sm:text-4xl mb-6"
              style={{
                color: "#DFDFDF",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
              }}
            >
              About Me
            </h2>

            <p
              className="text-base leading-relaxed max-w-[420px] text-justify"
              style={{
                color: "#F3F3F398",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              I am a{" "}
              <span className="font-medium" style={{ color: "#8ff0a4" }}>
                React.js & Laravel
              </span>{" "}
              web developer dedicated to building modern and efficient digital
              solutions. I am experienced in{" "}
              <span className="font-medium" style={{ color: "#8ff0a4" }}>
                database design
              </span>{" "}
              and writing{" "}
              <span className="font-medium" style={{ color: "#8ff0a4" }}>
                clean code
              </span>
              , while actively utilizing{" "}
              <span className="font-medium" style={{ color: "#8ff0a4" }}>
                Linux
              </span>{" "}
              to broaden my understanding of systems and servers. Technical
              skills aside, I pride myself on being a{" "}
              <span className="font-medium" style={{ color: "#8ff0a4" }}>
                strong communicator
              </span>{" "}
              and a{" "}
              <span className="font-medium" style={{ color: "#8ff0a4" }}>
                collaborative team player
              </span>
              . I approach development with sharp{" "}
              <span className="font-medium" style={{ color: "#8ff0a4" }}>
                problem-solving
              </span>{" "}
              instincts,{" "}
              <span className="font-medium" style={{ color: "#8ff0a4" }}>
                disciplined time management
              </span>
              , and the{" "}
              <span className="font-medium" style={{ color: "#8ff0a4" }}>
                leadership capabilities
              </span>{" "}
              needed to drive projects forward successfully.
            </p>
          </div>

          {/* Right Side — FaultyTerminal */}
          <div className="w-full max-w-[420px] flex justify-center pr-6 sm:pr-8 md:pr-0 mt-6 md:mt-0 md:max-w-none md:w-full ml-3 sm:ml-4 md:ml-0">
            <div
              className="relative overflow-hidden w-[280px] sm:w-[320px] aspect-square md:w-full md:aspect-auto md:h-full md:flex-1 md:min-h-0"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 15%, black 85%, transparent), linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 15%, black 85%, transparent), linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
                maskComposite: "intersect",
                WebkitMaskComposite: "destination-in",
              }}
            >
              <div className="absolute inset-0">
                <FaultyTerminal
                  tint="#8ff0a4"
                  scale={1}
                  noiseAmp={1}
                  curvature={0}
                  scanlineIntensity={0}
                  glitchAmount={0}
                  flickerAmount={0}
                  brightness={1.2}
                  mouseReact={true}
                  mouseStrength={0.2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
