
import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";

export default function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "education",
        "projects",
        "contact",
      ];

      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const currentSection = document.getElementById(section);

        if (
          currentSection &&
          scrollPosition >= currentSection.offsetTop &&
          scrollPosition <
            currentSection.offsetTop + currentSection.offsetHeight
        ) {
          setActiveLink(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", icon: FaHome, text: "Home" },
    { id: "skills", icon: FaCode, text: "Skills" },
    { id: "experience", icon: FaBriefcase, text: "Experience" },
    { id: "education", icon: FaGraduationCap, text: "Education" },
    { id: "projects", icon: FaLaptopCode, text: "Projects" },
    { id: "contact", icon: FaEnvelope, text: "Contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-gray-900/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
      <div className="w-full md:fixed md:left-1/2 md:top-3 md:w-auto md:-translate-x-1/2 md:transform">
        <div className="animate-gradient-x bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 p-[1.5px] md:rounded-full">
          <nav className="bg-gray-900/95 px-3 py-2 backdrop-blur-md md:rounded-full md:px-4 md:py-1.5">
            {/* Mobile header */}
            <div className="flex items-center justify-between px-2 md:hidden">
              <a
                href="#home"
                className="text-sm font-bold text-white"
              >
                Portfolio
              </a>

              <button
                type="button"
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-sm text-white"
              >
                <FaBars />
              </button>
            </div>

            {/* Navigation links */}
            <div className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
              <div className="flex flex-col gap-1 py-3 md:flex-row md:items-center md:gap-0.5 md:py-0">
                {navLinks.map(({ id, icon: Icon, text }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => {
                      setActiveLink(id);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-medium transition-all duration-300 md:rounded-full md:px-2.5 md:py-1.5 ${
                      activeLink === id
                        ? "bg-white/15 text-white"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Icon
                      className={`shrink-0 text-xs ${
                        activeLink === id ? "scale-110" : ""
                      }`}
                    />
                    <span>{text}</span>
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient-x {
          animation: gradient-x 3s linear infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </header>
  );
}
