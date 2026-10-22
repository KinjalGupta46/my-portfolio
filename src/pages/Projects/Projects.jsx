
import { ReactLenis } from "lenis/react";
import {
  useTransform,
  motion,
  useScroll,
} from "framer-motion";
import { useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  Github,
  ExternalLink,
  Code2,
  X,
} from "lucide-react";

const projects = [
  {
    title: "Eco Return",
    subtitle: "AI-Powered Reverse Logistics Platform",
    description:
      "A smart platform that analyzes returned products and recommends resale, refurbishment, recycling, or donation to reduce waste and carbon footprint.",
    src: "/ecoReturn.png",
    color: "#00D4AA",
    categories: ["AI / ML", "Systems"],
    technologies: ["AI", "Reverse Logistics", "Sustainability"],
    status: "Live",
    liveLink: "https://amazonsecondlife.duckdns.org/",
    githubLink: "",
  },
  {
    title: "Mess-Ease",
    subtitle: "Smart Queue Management System",
    description:
      "An AI-powered mess management system that predicts waiting times and monitors crowd density using computer vision and real-time analytics.",
    src: "/messEase.png",
    color: "#00BFFF",
    categories: ["AI / ML", "Computer Vision"],
    technologies: ["Computer Vision", "Analytics", "Queue Management"],
    status: "Project",
    githubLink: "",
    liveLink: "",
  },
  {
    title: "JanSevak",
    subtitle: "Citizen Grievance Management Portal",
    description:
      "A civic technology platform that enables citizens to report local issues, track resolution progress, and improve accountability through structured workflows and administrative dashboards.",
    src: "/janSevak.png",
    color: "#4F9DFF",
    categories: ["Full Stack", "Systems"],
    technologies: ["React.js", "Node.js", "MongoDB", "Twilio", "REST APIs"],
    status: "Source Code",
    githubLink: "",
    liveLink: "",
  },
  {
    title: "FinSight",
    subtitle: "Finance Management Application",
    description:
      "A finance management application that helps users organize expenses, track budgets, and visualize financial activity through dashboards. Internship contributions included data processing and validation, backend and database operations, and REST API testing.",
    src: "/finsight.png",
    color: "#34D399",
    categories: ["Full Stack", "Data Analytics"],
    technologies: [
      "Python",
      "Flask",
      "MySQL",
      "Pandas",
      "NumPy",
      "Chart.js",
    ],
    status: "Live",
    githubLink:
      "https://github.com/KinjalGupta46/FinSight-Expense-Tracker",
    liveLink: "https://finsight-expense-tracker.onrender.com",
  },
  {
    title: "Finance Tracker",
    subtitle: "Personal Finance Management",
    description:
      "A Flask-based web application for managing income and expenses, organizing transactions, and analyzing spending patterns through category-wise and payment-method insights.",
    src: "/financeTracker.png",
    color: "#A78BFA",
    categories: ["Full Stack", "Data Analytics"],
    technologies: ["Python", "Flask", "SQL", "HTML", "CSS", "JavaScript"],
    status: "Live",
    githubLink:
      "https://github.com/KinjalGupta46/FINANCE-TRACKER-MAIN",
    liveLink: "https://finance-tracker-main-fw8i.onrender.com/",
  },
  {
    title: "GRIEVO",
    subtitle: "Grievance Management Platform",
    description:
      "A centralized platform that simplifies grievance management by enabling users to submit complaints, track resolution progress, and manage grievances through a structured workflow.",
    src: "/grievo.png",
    color: "#60A5FA",
    categories: ["Full Stack", "Systems"],
    technologies: ["React.js", "Flask", "Python", "MySQL", "JavaScript"],
    status: "Source Code",
    githubLink: "https://github.com/KinjalGupta46/GRIEVO",
    liveLink: "",
  },
];

const filters = [
  "All",
  "AI / ML",
  "Systems",
  "Full Stack",
  "Data Analytics",
  "Computer Vision",
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(activeFilter)
        );

  return (
    <ReactLenis root>
      <main id="projects" className="bg-[#04081A] text-white min-h-screen">
        <section className="relative w-full bg-[#04081A] overflow-hidden">
          {/* Background grid */}
          <div className="absolute inset-0 pointer-events-none opacity-30 bg-[linear-gradient(rgba(50,80,120,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,80,120,0.15)_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Ambient background glow */}
          <div className="absolute top-40 -left-32 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
          <div className="absolute top-[800px] -right-32 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-6 pt-28 pb-24">
            {/* Section header */}
            <div className="mb-10">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-4">
                Projects
              </p>

              <h1 className="text-4xl md:text-5xl font-bold">
                Things I've{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  built.
                </span>
              </h1>

              <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
                A collection of projects exploring AI, full-stack
                development, data analytics, and practical technology
                solutions.
              </p>
            </div>

            {/* Working category filters */}
            <div className="flex flex-wrap gap-3 mb-10">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                  className={`px-4 py-2 rounded-full border text-sm transition-all duration-300 ${
                    activeFilter === filter
                      ? "border-cyan-400 bg-cyan-400/10 text-cyan-300 shadow-md shadow-cyan-500/10"
                      : "border-gray-700 bg-white/[0.02] text-gray-300 hover:border-cyan-500/60 hover:text-cyan-300"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <p className="text-sm text-gray-500 mb-6">
              Showing {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "project" : "projects"}
            </p>

            {/* Project cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  onViewDetails={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Project details modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-dialog-title"
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-gray-700 bg-[#0B1224] p-6 md:p-8 shadow-2xl shadow-cyan-950/30"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10"
              >
                <X size={20} />
              </button>

              <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 mb-3">
                Project Details
              </p>

              <h2
                id="project-dialog-title"
                className="text-2xl md:text-3xl font-bold pr-8"
              >
                {selectedProject.title}
              </h2>

              <h3
                className="mt-2 font-medium"
                style={{ color: selectedProject.color }}
              >
                {selectedProject.subtitle}
              </h3>

              <p className="text-gray-300 leading-relaxed mt-5">
                {selectedProject.description}
              </p>

              <h4 className="text-sm font-semibold text-gray-200 mt-6 mb-3">
                Technologies
              </h4>

              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="text-xs text-gray-300 border border-gray-700 bg-white/[0.03] rounded-full px-3 py-2"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-7">
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-2.5 text-sm hover:border-cyan-400 hover:text-cyan-300"
                  >
                    <Github size={17} />
                    GitHub
                  </a>
                )}

                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-[#04081A]"
                    style={{ backgroundColor: selectedProject.color }}
                  >
                    <ExternalLink size={17} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </ReactLenis>
  );
}

function ProjectCard({ project, index, onViewDetails }) {
  const {
    title,
    subtitle,
    description,
    src,
    color,
    categories,
    technologies,
    status,
    githubLink,
    liveLink,
  } = project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.06, 0.3) }}
      whileHover={{ y: -5 }}
      className="group relative rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/90 hover:border-cyan-500/50 transition-colors duration-300 shadow-xl shadow-black/20"
    >
      {/* Top accent */}
      <div
        className="h-[2px] w-full opacity-70 group-hover:opacity-100 transition-opacity"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, #3B82F6, transparent)`,
        }}
      />

      {/* Preview image */}
      <div className="relative h-52 md:h-60 bg-[#0B1224] overflow-hidden flex items-center justify-center p-4">
        <img
          src={src}
          alt={`${title} preview`}
          loading="lazy"
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
          onError={(event) => {
            event.currentTarget.style.visibility = "hidden";
          }}
        />

        <span
          className="absolute top-4 left-4 text-xs font-medium px-3 py-1.5 rounded-full border backdrop-blur-md"
          style={{
            color,
            borderColor: `${color}60`,
            backgroundColor: "#04081Acc",
          }}
        >
          {status}
        </span>
      </div>

      {/* Card content */}
      <div className="p-5 md:p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((category) => (
            <span
              key={category}
              className="text-xs px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300"
            >
              {category}
            </span>
          ))}
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-white">
          {title}
        </h2>

        <h3
          className="text-sm md:text-base font-medium mt-1"
          style={{ color }}
        >
          {subtitle}
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed mt-4">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-5">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="text-xs text-gray-300 border border-gray-700/80 bg-white/[0.02] rounded-full px-3 py-1.5"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3 border-t border-gray-800 mt-6 pt-5">
          <button
            type="button"
            onClick={onViewDetails}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-2.5 text-sm font-medium text-gray-200 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <Code2 size={16} />
            View Details
          </button>

          {githubLink && (
            <motion.a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-cyan-300 transition-colors"
              whileHover={{ y: -2 }}
            >
              <Github size={17} />
              GitHub
            </motion.a>
          )}

          {liveLink && (
            <motion.a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color }}
              whileHover={{ y: -2 }}
            >
              <ExternalLink size={16} />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    status: PropTypes.string.isRequired,
    githubLink: PropTypes.string,
    liveLink: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onViewDetails: PropTypes.func.isRequired,
};
