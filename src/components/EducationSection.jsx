import { useState, memo, useEffect } from 'react';

const educationData = [
  {
    period: "2024 — Now",
    degree: "Web Programming",
    institution: "Wikrama Bogor Vocational High School",
    description:
      "As a Software and Game Development (PPLG) student, I have a strong interest in designing and building efficient digital solutions. With practical experience in full-stack development using Laravel and React.js, as well as UI/UX design, I am accustomed to translating ideas into functional applications. I have a strong commitment to continuous development, supported by strong problem-solving skills, effective time management, and a readiness to collaborate and lead in a professional work environment.",
    status: "Active",
  },
];

export default memo(function EducationSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    console.log(`[EducationSection] Toggling accordion index ${index}`);
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  useEffect(() => {
    console.log("[EducationSection] Rendering education section");
  }, []);

  return (
    <section
      id="pendidikan"
      className="relative py-16 sm:py-20 overflow-hidden"
    >
      <div className="absolute top-0 left-12 sm:left-16 lg:left-24 right-12 sm:right-16 lg:right-24 h-[1px] bg-white/[0.05]"></div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 grid md:grid-cols-2 gap-6 items-start mt-4 mb-16">
        {/* Left Side: Header */}
        <div className="pr-6 sm:pr-8">
          <div className="flex items-center gap-4 mb-4">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#F3F3F398" }}
            >
              01 EDUCATION
            </span>
            <div className="h-[1px] w-12 bg-white/20"></div>
          </div>

          <h2
            className="leading-tight tracking-tight text-3xl sm:text-4xl"
            style={{
              color: "#DFDFDF",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
            }}
          >
            Educational Background
          </h2>
        </div>

        {/* Right Side: Description */}
        <div className="md:pt-9">
          <p
            className="text-base leading-relaxed text-left"
            style={{
              color: "#F3F3F398",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            An academic journey that shaped my skills and perspective in
            Web Developer
          </p>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 sm:left-12 top-0 bottom-0 w-[1px] bg-white/[0.05]" />

          {educationData.map((item, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={index}
                className="relative pl-12 sm:pl-20 py-8 border-b border-white/[0.05] last:border-b-0 cursor-pointer group"
                onClick={() => toggleAccordion(index)}
              >
                {/* Timeline dot marker */}
                <div
                  className="absolute left-[21px] sm:left-[45px] top-[40px] w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-sm bg-[#555] group-hover:bg-[#8ff0a4] transition-colors duration-300"
                  style={
                    isExpanded
                      ? {
                          backgroundColor: "#8ff0a4",
                          transform: "rotate(45deg)",
                        }
                      : { transform: "rotate(45deg)" }
                  }
                ></div>

                {/* Header row */}
                <div className="w-full flex items-start sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3
                      className="text-xl sm:text-2xl font-medium flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2"
                      style={{
                        color: "#DFDFDF",
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      {item.degree}
                      <span
                        className="italic text-sm sm:text-base font-normal uppercase"
                        style={{ color: "#8ff0a4" }}
                      >
                        @ {item.institution}
                      </span>
                    </h3>
                    <p
                      className="text-xs sm:text-sm font-mono mt-2"
                      style={{ color: "#777" }}
                    >
                      {item.period}
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-[#777] group-hover:text-white transition-colors duration-300 mt-2 sm:mt-0">
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Accordion content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isExpanded
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className="pt-6 text-base leading-relaxed"
                      style={{
                        color: "#F3F3F398",
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      {item.description}
                    </p>
                    <div className="mt-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full ${
                          item.status === "Active"
                            ? "bg-emerald-500/10 text-[#8ff0a4] border border-[#8ff0a4]/20"
                            : "bg-slate-500/10 text-slate-400 border border-slate-500/20"
                        }`}
                      >
                        {item.status === "Active" && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8ff0a4] animate-pulse" />
                        )}
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});
