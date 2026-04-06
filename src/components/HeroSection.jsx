import { memo, useEffect } from "react";
import LogoLoop from "./LogoLoop";
import htmlIcon from "../assets/html-5-svgrepo-com.svg";
import cssIcon from "../assets/css-3-svgrepo-com.svg";
import jsIcon from "../assets/js-svgrepo-com.svg";
import reactIcon from "../assets/react-svgrepo-com.svg";
import tailwindIcon from "../assets/tailwind-svgrepo-com.svg";
import laravelIcon from "../assets/laravel-svgrepo-com.svg";
import mysqlIcon from "../assets/mysql-svgrepo-com.svg";
import gitIcon from "../assets/git-svgrepo-com.svg";
import bashIcon from "../assets/bash-icon-svgrepo-com.svg";
import bootstrapIcon from "../assets/bootstrap-svgrepo-com.svg";
import figmaIcon from "../assets/figma-svgrepo-com.svg";
import mongoIcon from "../assets/mongo-svgrepo-com.svg";
import postmanIcon from "../assets/postman-icon-svgrepo-com.svg";
import githubIcon from "../assets/github-142-svgrepo-com.svg";
import phpIcon from "../assets/php-svgrepo-com.svg";

// Social icon components
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
  </svg>
);

// Tech stack items using local image assets
const techItems1 = [
  <span
    key="html5"
    className="flex items-center gap-3 text-[#F3F3F398] text-base font-medium"
  >
    <img src={htmlIcon} alt="HTML5" width="40" height="40" /> HTML5
  </span>,
  <span
    key="css3"
    className="flex items-center gap-3 text-[#F3F3F398] text-base font-medium"
  >
    <img src={cssIcon} alt="CSS3" width="40" height="40" /> CSS3
  </span>,
  <span
    key="js"
    className="flex items-center gap-3 text-[#F3F3F398] text-base font-medium"
  >
    <img src={jsIcon} alt="JavaScript" width="40" height="40" /> JavaScript
  </span>,
  <span
    key="react"
    className="flex items-center gap-3 text-[#F3F3F398] text-base font-medium"
  >
    <img src={reactIcon} alt="React" width="40" height="40" /> React
  </span>,
  <span
    key="tailwind"
    className="flex items-center gap-3 text-[#F3F3F398] text-base font-medium"
  >
    <img src={tailwindIcon} alt="Tailwind CSS" width="40" height="40" />{" "}
    Tailwind
  </span>,
  <span
    key="bootstrap"
    className="flex items-center gap-3 text-[#F3F3F398] text-base font-medium"
  >
    <img src={bootstrapIcon} alt="Bootstrap" width="40" height="40" />{" "}
    Bootstrap
  </span>,
  <span
    key="figma"
    className="flex items-center gap-3 text-[#F3F3F398] text-base font-medium"
  >
    <img src={figmaIcon} alt="Figma" width="40" height="40" /> Figma
  </span>,
];

const techItems2 = [
  <span
    key="laravel"
    className="flex items-center gap-3 text-[#F3F3F398] text-base font-medium"
  >
    <img src={laravelIcon} alt="Laravel" width="40" height="40" /> Laravel
  </span>,
  <span
    key="mysql"
    className="flex items-center gap-3 text-[#F3F3F398] text-base font-medium"
  >
    <img src={mysqlIcon} alt="MySQL" width="40" height="40" /> MySQL
  </span>,
  <span
    key="mongo"
    className="flex items-center gap-3 text-[#F3F3F398] text-base font-medium"
  >
    <img src={mongoIcon} alt="MongoDB" width="40" height="40" /> MongoDB
  </span>,
  <span
    key="git"
    className="flex items-center gap-3 text-[#F3F3F398] text-base font-medium"
  >
    <img src={gitIcon} alt="Git" width="40" height="40" /> Git
  </span>,
  <span
    key="github"
    className="flex items-center gap-3 text-[#F3F3F398] text-base font-medium"
  >
    <img src={githubIcon} alt="GitHub" width="40" height="40" /> GitHub
  </span>,
  <span
    key="bash"
    className="flex items-center gap-3 text-[#F3F3F398] text-base font-medium"
  >
    <img src={bashIcon} alt="Bash" width="40" height="40" /> Bash
  </span>,
  <span
    key="postman"
    className="flex items-center gap-3 text-[#F3F3F398] text-base font-medium"
  >
    <img src={postmanIcon} alt="Postman" width="40" height="40" /> Postman
  </span>,
  <span
    key="php"
    className="flex items-center gap-3 text-[#F3F3F398] text-base font-medium"
  >
    <img src={phpIcon} alt="PHP" width="40" height="40" /> PHP
  </span>,
];

export default memo(function HeroSection() {
  useEffect(() => {
    console.log("[HeroSection] Rendering HeroSection");
  }, []);

  return (
    <section
      id="beranda"
      className="relative flex flex-col justify-start lg:justify-center overflow-hidden"
    >
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-12 sm:pt-28 pb-16 w-full">
        {/* Subtitle */}
        <p
          className="text-sm sm:text-base sm:text-lg"
          style={{
            color: "#979797",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400,
          }}
        >
          Hi, I'm Muhammad Ramadhan Fadillah Tjiptadi
        </p>

        {/* Heading + Description */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-12 items-start lg:items-center">
          {/* Heading */}
          <h1
            className="leading-[0.95] tracking-tight text-[50px] sm:text-[48px] lg:text-[60px]"
            style={{
              color: "#DFDFDF",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
              marginTop: "16px",
            }}
          >
            Web
            <br />
            Developer
          </h1>

          {/* Description */}
          <p
            className="leading-relaxed lg:pt-6 max-w-lg text-[16px] sm:text-[20px] lg:text-[24px]"
            style={{
              color: "#F3F3F398",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 400,
            }}
          >
            Transforming ideas into interactive and seamless digital experiences
            with cutting-edge{" "}
            <span
              className="text-primary-light font-medium"
              style={{
                color: "#8ff0a4",
              }}
            >
              frontend
            </span>{" "}
            development.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3 mt-6 mb-12">
          <a
            href="https://github.com/muhammad-ramadhan-fadillah-tjiptadi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#121212] border border-white/[0.08] text-[#989898] hover:text-white hover:bg-white/[0.12] hover:border-white/[0.15] transition-all duration-300"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-ramadhan-fadillah-tjiptadi-970520330/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#121212] border border-white/[0.08] text-[#989898] hover:text-white hover:bg-white/[0.12] hover:border-white/[0.15] transition-all duration-300"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto:rmafdllhcptd@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#121212] border border-white/[0.08] text-[#989898] hover:text-white hover:bg-white/[0.12] hover:border-white/[0.15] transition-all duration-300"
            aria-label="Email"
          >
            <MailIcon />
          </a>
        </div>

        {/* Tech Stack Bar — close to social icons */}
        <div className="w-full flex flex-col gap-2">
          <LogoLoop items={techItems1} speed={30} direction="left" />
          <LogoLoop items={techItems2} speed={30} direction="right" />
        </div>
      </div>
    </section>
  );
});
