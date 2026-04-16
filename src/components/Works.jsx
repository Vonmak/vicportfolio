// import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    image: p3,
    title: "Bondcone",
    description: "Full-stack dating platform designed for connecting people — real-time matching, profile management, and messaging.",
    tags: ["Django", "React", "PostgreSQL", "Docker", "Digital Ocean"],
    status: "Ongoing",
    live: null,
    github: "https://github.com/Vonmak/",
  },
  {
    image: p4,
    title: "Lumo",
    description: "Furnished accommodation booking system with real-time availability, payment integration, and multi-party scheduling.",
    tags: ["Nuxt3", "Django", "PostgreSQL", "AWS"],
    status: null,
    live: null,
    github: "https://github.com/Vonmak/",
  },
  {
    image: p5,
    title: "MayBets",
    description: "Online betting platform with sportsbook integration, virtuals, and casino. Built for scale with cross-browser support.",
    tags: ["Vue.js", "PHP Phalcon", "Docker", "GCP"],
    status: null,
    live: null,
    github: "https://github.com/Vonmak/",
  },
  {
    image: p2,
    title: "PrimeBet Trading",
    description: "Forex-based betting app featuring real-time odds, live game integrations, and a responsive trading interface.",
    tags: ["React", "REST APIs"],
    status: null,
    live: null,
    github: "https://github.com/Vonmak/",
  },
  {
    image: p6,
    title: "StudentKeja",
    description: "Property and hostel management platform for students — browse, book, and manage rental accommodation.",
    tags: ["React", "REST APIs"],
    status: null,
    live: "https://studentkeja.netlify.app/",
    github: null,
  },
  {
    image: p7,
    title: "Q-Wash",
    description: "Car wash booking app — users book spots, get memberships, and carwash owners manage operations end-to-end.",
    tags: ["Vue3", "Django", "REST APIs"],
    status: null,
    live: "https://qwash.netlify.app/",
    github: null,
  },
];

function Works() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((project, i) => (
        <div
          key={project.title}
          className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
        >
          {/* Image */}
          <div className="relative h-40 w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {project.status && (
              <span className="absolute top-2.5 left-2.5 text-xs font-bold px-2.5 py-1 rounded-full bg-sky-500 text-white shadow">
                {project.status}
              </span>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-5 gap-3">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">{project.title}</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed flex-1">{project.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 border border-sky-100 dark:border-sky-800">
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-2 mt-1">
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-full transition">
                  <FaExternalLinkAlt size={10} /> Live Demo
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 px-4 py-2 rounded-full transition">
                  <FaGithub size={12} /> GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Works;
