
import { ReactLenis } from "lenis/react";
import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";
import {
  Github,
  ExternalLink,
  Code2,
  X,
  ArrowUpRight,
} from "lucide-react";

const projects = [
  {
    title: "Eco Return",
    subtitle: "AI-Powered Reverse Logistics Platform",
    description:
      "An AI-powered platform focused on analyzing returned products and improving reverse logistics for a more sustainable e-commerce ecosystem.",
    color: "#00D4AA",
    categories: ["AI / ML", "Systems"],
    technologies: [
      "AI",
      "Reverse Logistics",
      "Sustainability",
    ],
    status: "Live",
    liveLink: "https://amazonsecondlife.duckdns.org/",
    githubLink: "https://github.com/KinjalGupta46/Amazonhackon",
  },
  {
    title: "Mess-Ease",
    subtitle: "Smart Queue Management System",
    description:
      "Mess-Ease is a smart queue management application designed to improve mess operations and help users manage queues more efficiently.",
    color: "#00BFFF",
    categories: ["AI / ML", "Computer Vision"],
    technologies: [
      "Computer Vision",
      "Analytics",
      "Queue Management",
    ],
    status: "Source Code",
    githubLink: "https://github.com/KinjalGupta46/Mess-Ease-App",
    liveLink: "",
  },
  {
    title: "JanSevak",
    subtitle: "Citizen Grievance Management Portal",
    description:
      "A civic technology platform that enables citizens to report local issues, track resolution progress, and improve accountability through structured workflows and administrative dashboards.",
    color: "#4F9DFF",
    categories: ["Full Stack", "Systems"],
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Twilio",
      "REST APIs",
    ],
    status: "Source Code",
    githubLink: "",
    liveLink: "",
  },
  {
    title: "FinSight",
    subtitle: "Finance Management Application",
    description:
      "A finance management application that helps users organize expenses, track budgets, and visualize financial activity through dashboards. Internship contributions included data processing and validation, backend and database operations, and REST API testing.",
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
    color: "#A78BFA",
    categories: ["Full Stack", "Data Analytics"],
    technologies: [
      "Python",
      "Flask",
      "SQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
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
    color: "#60A5FA",
    categories: ["Full Stack", "Systems"],
    technologies: [
      "React.js",
      "Flask",
      "Python",
      "MySQL",
      "JavaScript",
    ],
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
      <main
        id="projects"
        className="min-h-screen bg-[#04081A] text-white"
      >
        <section className="relative w-full overflow-hidden bg-[#04081A]">
          {/* Background grid */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(50,80,120,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,80,120,0.15)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

          {/* Ambient glow */}
          <div className="pointer-events-none absolute -left-32 top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-32 top-[800px] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-6xl px-5 pb-24 pt-28 md:px-6">
            {/* Section heading */}
            <div className="mb-10">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan-400">
                Projects
              </p>

              <h1 className="text-4xl font-bold md:text-5xl">
                Things I've{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  built.
                </span>
              </h1>

              <p className="mt-4 max-w-2xl leading-relaxed text-gray-400">
                A collection of projects exploring AI, full-stack
                development, data analytics, and practical technology
                solutions.
              </p>
            </div>

            {/* Category filters */}
            <div className="mb-8 flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                  className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                    activeFilter === filter
                      ? "border-cyan-400 bg-cyan-400/10 text-cyan-300 shadow-md shadow-cyan-500/10"
                      : "border-gray-700 bg-white/[0.02] text-gray-300 hover:border-cyan-500/60 hover:text-cyan-300"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <p className="mb-5 text-sm text-gray-500">
              Showing {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "project" : "projects"}
            </p>

            {/* Image-free project cards */}
            <div className="grid grid-cols-1 gap-5">
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-dialog-title"
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-gray-700 bg-[#0B1224] p-6 shadow-2xl shadow-cyan-950/30 md:p-8"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="absolute right-4 top-4 rounded-full p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
              >
                <X size={20} />
              </button>

              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-cyan-400">
                Project Details
              </p>

              <h2
                id="project-dialog-title"
                className="pr-8 text-2xl font-bold md:text-3xl"
              >
                {selectedProject.title}
              </h2>

              <h3
                className="mt-2 font-medium"
                style={{ color: selectedProject.color }}
              >
                {selectedProject.subtitle}
              </h3>

              {/* Description appears only in the modal */}
              <p className="mt-5 leading-relaxed text-gray-300">
                {selectedProject.description}
              </p>

              {/* Technologies appear only in the modal */}
              <h4 className="mb-3 mt-6 text-sm font-semibold text-gray-200">
                Technologies
              </h4>

              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-gray-700 bg-white/[0.03] px-3 py-2 text-xs text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Project links */}
              <div className="mt-7 flex flex-wrap gap-3">
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-2.5 text-sm transition hover:border-cyan-400 hover:text-cyan-300"
                  >
                    <Github size={17} />
                    GitHub
                    <ArrowUpRight size={15} />
                  </a>
                )}

                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-[#04081A] transition hover:brightness-110"
                    style={{
                      backgroundColor: selectedProject.color,
                    }}
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
  const { title, subtitle, color, categories, status } = project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: Math.min(index * 0.06, 0.3),
      }}
      whileHover={{ y: -3 }}
      className="group rounded-2xl border border-gray-800 bg-gray-900/70 p-5 shadow-lg shadow-black/10 transition-all duration-300 hover:border-cyan-500/50 md:p-6"
    >
      {/* Title, categories and status */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-xl font-bold text-white md:text-2xl">
            {title}
          </h2>

          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-xs text-blue-300"
            >
              {category}
            </span>
          ))}
        </div>

        <span
          className="shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium"
          style={{
            color,
            borderColor: `${color}60`,
            backgroundColor: `${color}0D`,
          }}
        >
          {status}
        </span>
      </div>

      {/* Subtitle */}
      <h3
        className="mt-3 text-sm font-medium md:text-base"
        style={{ color }}
      >
        {subtitle}
      </h3>

      {/* Only the View Details button is shown on the card */}
      <div className="mt-5 flex items-center justify-between border-t border-gray-800 pt-5">
        <span className="text-sm text-gray-500">
          Explore project
        </span>

        <button
          type="button"
          onClick={onViewDetails}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-2.5 text-sm font-medium text-gray-200 transition hover:border-cyan-400 hover:text-cyan-300"
        >
          <Code2 size={16} />
          View Details
          <ArrowUpRight size={15} />
        </button>
      </div>
    </motion.article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
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
