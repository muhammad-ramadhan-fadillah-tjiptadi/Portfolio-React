import { useState, useEffect, memo } from "react";

// Import Assets
import imgDicoding2 from "../assets/2.svg";
import imgDicoding3 from "../assets/3.svg";
import imgDicoding4 from "../assets/4.svg";
import imgDicoding5 from "../assets/5.svg";
import imgDicoding6 from "../assets/6.svg";
import imgDicoding7 from "../assets/7.svg";
import imgDicoding8 from "../assets/8.svg";
import imgDicoding9 from "../assets/9.svg";
import imgDicoding10 from "../assets/10.svg";
import imgDicoding11 from "../assets/11.svg";

import imgDBS1 from "../assets/0001.svg";
import imgDBS2 from "../assets/dicodingxdbs1_110.svg";

import imgDevcoach from "../assets/devcoach-185-machine-learning-supervised-learning-klasifikasi-sentimen-certificate.svg";

import imgElevaite from "../assets/elevaite-x-dicoding-live-2-copilot-hacks-rahasia-prompt-engineering-biar-ai-kerja-maksimal-certificate.svg";

import imgK3 from "../assets/Sertifikat E-Learning K3 Muhammad Ramadhan Fadillah Tjiptadi.svg";

const certificateData = [
  {
    category: "Dicoding",
    items: [
      { id: "dicoding-2", src: imgDicoding2, alt: "Dicoding Certificate 2" },
      { id: "dicoding-3", src: imgDicoding3, alt: "Dicoding Certificate 3" },
      { id: "dicoding-4", src: imgDicoding4, alt: "Dicoding Certificate 4" },
      { id: "dicoding-5", src: imgDicoding5, alt: "Dicoding Certificate 5" },
      { id: "dicoding-6", src: imgDicoding6, alt: "Dicoding Certificate 6" },
      { id: "dicoding-7", src: imgDicoding7, alt: "Dicoding Certificate 7" },
      { id: "dicoding-8", src: imgDicoding8, alt: "Dicoding Certificate 8" },
      { id: "dicoding-9", src: imgDicoding9, alt: "Dicoding Certificate 9" },
      { id: "dicoding-10", src: imgDicoding10, alt: "Dicoding Certificate 10" },
      { id: "devcoach-1", src: imgDevcoach, alt: "DevCoach Certificate" },
      {
        id: "elevaite-1",
        src: imgElevaite,
        alt: "Elevaite x Dicoding Certificate",
      },
    ],
  },
  {
    category: "Dicoding x DBS",
    items: [
      { id: "dbs-1", src: imgDBS1, alt: "Dicoding x DBS Certificate 1" },
      { id: "dbs-2", src: imgDBS2, alt: "Dicoding x DBS Certificate 2" },
    ],
  },
  {
    category: "Komdigi",
    items: [
      { id: "komdigi-1", src: imgDicoding11, alt: "Komdigi Certificate" },
    ],
  },
  {
    category: "K3",
    items: [{ id: "k3-1", src: imgK3, alt: "Sertifikat E-Learning K3" }],
  },
];

export default memo(function CertificateSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;
  const currentCategoryData = certificateData[activeCategory];
  const totalPages = Math.ceil(currentCategoryData.items.length / itemsPerPage);

  const paginatedItems = currentCategoryData.items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleTabChange = (index) => {
    setActiveCategory(index);
    setCurrentPage(1); // Reset pagination on tab change
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const openModal = (cert) => {
    setSelectedCertificate(cert);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedCertificate) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    if (selectedCertificate) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("overflow-hidden");
    };
  }, [selectedCertificate]);

  return (
    <section
      id="sertifikat"
      className="relative py-16 sm:py-20 overflow-hidden"
    >
      <div className="absolute top-0 left-12 sm:left-16 lg:left-24 right-12 sm:right-16 lg:right-24 h-px bg-white/5" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-6 items-start mt-4 mb-12">
          <div className="pr-6 sm:pr-8">
            <div className="flex items-center gap-4 mb-4">
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{
                  color: "#F3F3F398",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                02 CERTIFICATES
              </span>
              <div className="h-px w-12 bg-white/20" />
            </div>

            <h2
              className="leading-tight tracking-tight text-3xl sm:text-4xl"
              style={{
                color: "#DFDFDF",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
              }}
            >
              Licenses & Certifications
            </h2>
          </div>

          <div className="md:pt-9">
            <p
              className="text-base leading-relaxed text-left max-w-105"
              style={{
                color: "#F3F3F398",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              A collection of certifications I have achieved to validate my
              technical skills and continuous learning journey in Web Developer
              and related fields.
            </p>
          </div>
        </div>

        {/* Tab & Content Layout */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 min-h-[400px]">
          {/* Left Side: Tabs */}
          <div className="md:w-1/4 flex-shrink-0">
            <div
              className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 hide-scrollbar"
              role="tablist"
              aria-label="Certificate Categories"
            >
              {certificateData.map((category, index) => {
                const isActive = activeCategory === index;
                return (
                  <button
                    key={category.category}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`tabpanel-${index}`}
                    id={`tab-${index}`}
                    onClick={() => handleTabChange(index)}
                    className={`relative flex-shrink-0 text-left px-5 py-3 rounded-xl transition-all duration-300 text-sm font-medium whitespace-nowrap md:whitespace-normal group overflow-hidden ${
                      isActive
                        ? "text-[#8ff0a4] bg-[#8ff0a4]/10 border border-[#8ff0a4]/20 shadow-[0_0_15px_rgba(143,240,164,0.05)]"
                        : "text-slate-400 bg-white/[0.02] border border-white/5 hover:text-[#DFDFDF] hover:bg-white/5"
                    }`}
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {isActive && (
                      <span className="absolute inset-y-0 left-0 w-1 bg-[#8ff0a4] rounded-l-xl" />
                    )}
                    <span className="relative z-10">{category.category}</span>
                    <span className="ml-2 text-xs opacity-60">
                      ({category.items.length})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side: Certificate Grid & Pagination */}
          <div className="md:w-3/4 flex-grow flex flex-col gap-6">
            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center gap-2">
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1,
                ).map((page) => {
                  const isActive = page === currentPage;

                  return (
                    <button
                      key={page}
                      type="button"
                      onClick={() => handlePageChange(page)}
                      className={`h-8 min-w-8 px-2 rounded-md border text-xs font-semibold transition-colors duration-200 ${
                        isActive
                          ? "border-[#8ff0a466] text-[#8ff0a4] bg-[#8ff0a414]"
                          : "border-white/15 text-[#989898] hover:border-[#8ff0a4]/40 hover:text-[#8ff0a4] hover:bg-[#8ff0a4]/10"
                      }`}
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                      aria-label={`Page ${page}`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {String(page).padStart(2, "0")}
                    </button>
                  );
                })}
              </div>
            )}

            <div
              id={`tabpanel-${activeCategory}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeCategory}`}
              className="w-full"
            >
              {/* Grid 2 Columns for larger items */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
                {paginatedItems.map((cert) => (
                  <button
                    key={cert.id}
                    onClick={() => openModal(cert)}
                    className="group relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-black/40 hover:border-[#8ff0a4]/40 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8ff0a4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101010]"
                    aria-label={`View ${cert.alt} in fullscreen`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-5">
                      <span className="text-[#8ff0a4] text-sm font-medium flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                        Click to zoom
                      </span>
                    </div>
                    <img
                      src={cert.src}
                      alt={cert.alt}
                      loading="lazy"
                      className="w-full h-full object-cover sm:object-contain p-3 group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center bg-[#121212] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black/80 to-transparent z-10 flex justify-between items-center px-6">
              <h3
                id="modal-title"
                className="text-white/80 font-medium text-sm"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {selectedCertificate.alt}
              </h3>
              <button
                onClick={closeModal}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-black/40 text-white/70 hover:text-[#8ff0a4] hover:bg-white/10 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8ff0a4]"
                aria-label="Close modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="w-full h-full p-4 sm:p-8 overflow-auto flex items-center justify-center hide-scrollbar">
              <img
                src={selectedCertificate.src}
                alt={selectedCertificate.alt}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
});
