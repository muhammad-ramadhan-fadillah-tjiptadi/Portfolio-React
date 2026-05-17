import { useState, memo } from 'react'

const projects = [
  {
    title: 'Server Security Configuration',
    details:
      'Server security hardening using iptables to mitigate DDoS attacks, combined with network traffic monitoring and rule tuning.',
    stack: ['Linux', 'iptables', 'Bash'],
    dmy: '28/02/26',
    link: 'https://1drv.ms/w/c/9dd2324c4c677b59/IQB4jzDARDRvSo2x3ZzD1DDSAXLS9Cba14wII66WB2mz-do?e=hazD8S',
  },
  {
    title: 'Project Company Otomotif',
    details:
      'Automotive-themed company profile application developed using core PHP, with custom server-side rendering and modular page structure.',
    stack: ['PHP'],
    dmy: '12/06/25',
    github:
      'https://github.com/muhammad-ramadhan-fadillah-tjiptadi/Project-company-otomotif',
  },
  {
    title: 'Portal Berita',
    details:
      'Laravel-based news portal that uses Blade for dynamic views and supports data export through the Laravel Excel package.',
    stack: ['Laravel', 'PHP', 'Blade', 'MySQL', 'Laravel Excel'],
    dmy: '12/12/25',
    github: 'https://github.com/muhammad-ramadhan-fadillah-tjiptadi/Portal-Berita',
  },
  {
    title: 'Health Scope',
    details:
      'Health-focused React + Vite frontend application with client-side routing and modern UI components powered by Tailwind and Flowbite.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Flowbite', 'React Router'],
    dmy: '09/03/26',
    github: 'https://github.com/muhammad-ramadhan-fadillah-tjiptadi/Health-Scope',
  },
  {
    title: 'Projek Pipas Website',
    details:
      'Multi-page website themed around Taman Safari Bogor, featuring animal pages, attractions, contact, and ticket booking with a responsive layout.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    dmy: '04/06/25',
    github:
      'https://github.com/muhammad-ramadhan-fadillah-tjiptadi/Projek-Pipas-Website',
    link: 'https://muhammad-ramadhan-fadillah-tjiptadi.github.io/Projek-Pipas-Website/',
  },
  {
    title: 'Echolearn',
    details:
      'Learning web platform with a separated frontend-backend structure, Webpack build pipeline, and GitHub Pages deployment.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Webpack'],
    dmy: '19/04/25',
    github: 'https://github.com/muhammad-ramadhan-fadillah-tjiptadi/Echolearn',
    link: 'https://muhammad-ramadhan-fadillah-tjiptadi.github.io/Echolearn/',
  },
]

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const LinkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 6H7.5C5 6 3 8 3 10.5v3C3 16 5 18 7.5 18H9" />
    <path d="M15 6h1.5C19 6 21 8 21 10.5v3C21 16 19 18 16.5 18H15" />
    <path d="M9 12h6" />
  </svg>
)

const splitTitleByTwoWords = (title) => {
  const words = title.trim().split(/\s+/)
  const lines = []

  for (let index = 0; index < words.length; index += 2) {
    lines.push(words.slice(index, index + 2).join(' '))
  }

  return lines
}

export default memo(function ProyekSection() {
  const itemsPerPage = 3
  const totalPages = Math.ceil(projects.length / itemsPerPage)
  const [currentPage, setCurrentPage] = useState(1)

  const paginatedProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handlePageChange = (page) => {
    console.log('[ProyekSection] Switching to page', page)
    setCurrentPage(page)
  }

  console.log('[ProyekSection] Rendering page', currentPage)

  return (
    <section id="proyek" className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute top-0 left-12 sm:left-16 lg:left-24 right-12 sm:right-16 lg:right-24 h-px bg-white/5" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-6 items-start mt-4 mb-12">
          <div className="pr-6 sm:pr-8">
            <div className="flex items-center gap-4 mb-4">
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: '#F3F3F398', fontFamily: "'Montserrat', sans-serif" }}
              >
                03 Featured Projects
              </span>
              <div className="h-px w-12 bg-white/20" />
            </div>

            <h2
              className="leading-tight tracking-tight text-3xl sm:text-4xl"
              style={{
                color: '#DFDFDF',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
              }}
            >
              Projects
            </h2>

            {totalPages > 1 && (
              <div className="mt-5 flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => {
                  const isActive = page === currentPage

                  return (
                    <button
                      key={page}
                      type="button"
                      onClick={() => handlePageChange(page)}
                      className={`h-8 min-w-8 px-2 rounded-md border text-xs font-semibold transition-colors duration-200 ${isActive
                        ? 'border-[#8ff0a466] text-[#8ff0a4] bg-[#8ff0a414]'
                        : 'border-white/15 text-[#989898] hover:border-[#8ff0a4]/40 hover:text-[#8ff0a4] hover:bg-[#8ff0a4]/10'
                        }`}
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      {String(page).padStart(2, '0')}
                    </button>
                  )
                })}
              </div>
            )}
          </div>

          <div className="md:pt-9">
            <p
              className="text-base leading-relaxed text-left max-w-105"
              style={{
                color: '#F3F3F398',
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              A curated list of core projects, presented clearly to highlight outcomes, implementation details, and primary stack.
            </p>
          </div>
        </div>

        <div className="border border-white/10 rounded-2xl overflow-hidden bg-[#121212]">
          <div
            className="hidden md:grid md:grid-cols-[1.2fr_1.6fr_1fr_auto] gap-4 px-5 sm:px-7 py-3 border-b border-white/10 text-xs uppercase tracking-[0.16em] text-[#7f7f7f]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>Projects</span>
            <span>Details</span>
            <span>Stack</span>
            <span className="justify-self-end text-right">DMY</span>
          </div>

          {paginatedProjects.map((project) => (
            <div
              key={project.title}
              className="group px-5 sm:px-7 py-5 border-b border-white/10 last:border-b-0 hover:bg-white/3 transition-colors duration-300"
            >
              <div className="space-y-5 md:hidden">
                <div className="space-y-2">
                  <span
                    className="text-[10px] uppercase tracking-[0.16em] text-[#7f7f7f]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Projects
                  </span>
                  <h3
                    className="text-base font-medium text-[#DFDFDF] group-hover:text-[#8ff0a4] transition-colors duration-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {splitTitleByTwoWords(project.title).map((line, lineIndex) => (
                      <span key={`${project.title}-${lineIndex}`} className="block">
                        {line}
                      </span>
                    ))}
                  </h3>
                </div>

                <div className="space-y-2">
                  <span
                    className="text-[10px] uppercase tracking-[0.16em] text-[#7f7f7f]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Details
                  </span>
                  <p
                    className="text-sm leading-relaxed text-justify text-[#F3F3F398]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {project.details}
                  </p>
                </div>

                <div className="space-y-2">
                  <span
                    className="text-[10px] uppercase tracking-[0.16em] text-[#7f7f7f]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Stack
                  </span>
                  <div className="self-start flex flex-wrap content-start gap-2 mt-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 text-[11px] rounded-full border border-[#8ff0a4]/20 bg-[#8ff0a4]/10 text-[#8ff0a4]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <span
                    className="block text-[10px] uppercase tracking-[0.16em] text-[#7f7f7f]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    DMY
                  </span>
                  <div className="flex min-w-0 flex-col items-start gap-2">
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/15 text-[#989898] group-hover:border-[#8ff0a4]/40 group-hover:text-[#8ff0a4] transition-colors duration-300"
                          aria-label={`GitHub project ${project.title}`}
                        >
                          <GitHubIcon />
                        </a>
                      )}

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/15 text-[#989898] group-hover:border-[#8ff0a4]/40 group-hover:text-[#8ff0a4] transition-colors duration-300"
                          aria-label={`Project link ${project.title}`}
                        >
                          <LinkIcon />
                        </a>
                      )}
                    </div>

                    <span
                      className="whitespace-nowrap text-sm text-[#989898]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {project.dmy}
                    </span>
                  </div>
                </div>
              </div>

              <div className="hidden md:grid md:grid-cols-[1.2fr_1.6fr_1fr_auto] md:gap-4 md:items-start">
                <h3
                  className="text-base sm:text-lg font-medium text-[#DFDFDF] group-hover:text-[#8ff0a4] transition-colors duration-300"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {splitTitleByTwoWords(project.title).map((line, lineIndex) => (
                    <span key={`${project.title}-${lineIndex}`} className="block">
                      {line}
                    </span>
                  ))}
                </h3>

                <p
                  className="self-start text-sm leading-relaxed text-justify text-[#F3F3F398]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {project.details}
                </p>

                <div className="self-start flex flex-wrap content-start gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-[11px] rounded-full border border-[#8ff0a4]/20 bg-[#8ff0a4]/10 text-[#8ff0a4]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-1 flex min-w-0 flex-col items-end gap-2">
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/15 text-[#989898] group-hover:border-[#8ff0a4]/40 group-hover:text-[#8ff0a4] transition-colors duration-300"
                        aria-label={`GitHub project ${project.title}`}
                      >
                        <GitHubIcon />
                      </a>
                    )}

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/15 text-[#989898] group-hover:border-[#8ff0a4]/40 group-hover:text-[#8ff0a4] transition-colors duration-300"
                        aria-label={`Project link ${project.title}`}
                      >
                        <LinkIcon />
                      </a>
                    )}
                  </div>

                  <span
                    className="whitespace-nowrap text-sm text-[#989898]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {project.dmy}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
});
