import ve from "../assets/mainvic.jpeg";
import Skills from "./Skills";
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaDownload } from "react-icons/fa";

const experiences = [
  {
    role: "Senior Frontend Engineer",
    company: "Touchvas",
    location: "Nairobi",
    period: "Aug 2025 – Present",
    current: true,
    points: [
      "Architects and develops scalable, high-performance UIs for platforms used across multiple markets.",
      "Drives continuous UX improvements through performance optimization and modern frontend best practices.",
      "Owns frontend standards and code quality, ensuring maintainable and scalable interfaces.",
    ],
  },
  {
    role: "Senior Frontend Engineer",
    company: "MayBets Kenya",
    location: "Nairobi",
    period: "Oct 2024 – Jul 2025",
    current: false,
    points: [
      "Integrated third-party APIs into a feature-rich Vue.js frontend, enhancing UX including Opera Mini compatibility.",
      "Conducted cross-browser testing and optimized frontend load times for diverse user environments.",
    ],
  },
  {
    role: "Lead Software Engineer",
    company: "Thrive Waves Solutions",
    location: "Nairobi",
    period: "Jan 2023 – Present",
    current: true,
    points: [
      "Built VAS systems for bulk SMS and surveys using Go and Vue3; payment integrations using Django and Nuxt3.",
      "Designed and developed a full-stack dating platform using Django and React.",
      "Developed RESTful APIs and managed AWS deployments with CI/CD pipelines.",
    ],
  },
  {
    role: "Backend Engineer",
    company: "MoneyBox",
    location: "Nairobi",
    period: "Oct 2021 – Apr 2023",
    current: false,
    points: [
      "Built backend logic and GraphQL APIs in Django for a fintech loan-matching platform.",
      "Integrated with multiple bank APIs and managed deployments via Heroku.",
    ],
  },
  {
    role: "IT Technical Trainer",
    company: "Equip Africa Institute",
    location: "",
    period: "Sept 2022 – Aug 2023",
    current: false,
    points: ["Trained students in software development, networking, and cybersecurity."],
  },
  {
    role: "ICT Attaché",
    company: "Kisii County Government",
    location: "",
    period: "Apr 2019 – Aug 2019",
    current: false,
    points: ["Supported IT infrastructure, installed systems, and optimized county-wide network services."],
  },
];

const education = [
  { degree: "BSc Computer Science", school: "Karatina University", period: "2016 – 2021", icon: "🎓" },
  { degree: "Software Development Certification", school: "Moringa School", period: "Jan 2022 – Jul 2022", icon: "💻" },
];

function About() {
  return (
    <section className="w-full min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 py-24 px-5 sm:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Profile Card */}
        <div className="flex flex-col sm:flex-row items-center gap-8 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-7 sm:p-10 mb-10 animate-fade-in-up">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-sky-400 shadow-lg bg-gradient-to-br from-sky-100 to-blue-100 dark:from-sky-900 dark:to-slate-800">
              <img src={ve} alt="Victor Ondari" className="object-cover object-top w-full h-full" />
            </div>
          </div>
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <span className="text-sky-500 font-semibold text-xs uppercase tracking-widest">About Me</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Victor Ondari</h2>
            <p className="text-slate-500 dark:text-slate-400 flex items-center justify-center sm:justify-start gap-1.5 text-sm">
              <FaMapMarkerAlt className="text-sky-500" /> Nairobi, Kenya · Kenyan National
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
              Senior Software Engineer with 7+ years building scalable backend systems with Python and JavaScript,
              high-performance APIs with Django and FastAPI, and cloud-native apps on AWS and GCP.
            </p>
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start text-sm">
              <a href="mailto:vonmak2@gmail.com" className="flex items-center gap-1.5 text-sky-500 hover:underline font-medium">
                <FaEnvelope /> vonmak2@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/victorondari/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sky-500 hover:underline font-medium">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://drive.google.com/file/d/1Lcx1-iZwV_bGCChPxl6CA2qDaphX-l3Y/view?usp=share_link" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sky-500 hover:underline font-medium">
                <FaDownload /> CV
              </a>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-10 animate-fade-in-up delay-200">
          <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white mb-6">
            <span className="w-7 h-7 flex items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400">
              <FaBriefcase size={13} />
            </span>
            Work Experience
          </h3>
          <div className="relative border-l-2 border-sky-200 dark:border-sky-800 pl-6 flex flex-col gap-6">
            {experiences.map((exp, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[1.85rem] top-2 w-3.5 h-3.5 rounded-full border-2 border-sky-500 bg-white dark:bg-slate-900" />
                <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">{exp.role}</h4>
                      <p className="text-sky-500 dark:text-sky-400 font-semibold text-xs mt-0.5">
                        {exp.company}{exp.location && `, ${exp.location}`}
                      </p>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      exp.current
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400"
                    }`}>
                      {exp.period}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-1">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-xs text-slate-600 dark:text-slate-300 flex gap-1.5">
                        <span className="text-sky-400 flex-shrink-0 mt-0.5">▹</span>{point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-10 animate-fade-in-up delay-300">
          <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white mb-6">
            <span className="w-7 h-7 flex items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400">
              <FaGraduationCap size={14} />
            </span>
            Education
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {education.map((edu, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 flex items-start gap-3">
                <span className="text-2xl">{edu.icon}</span>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                  <p className="text-sky-500 dark:text-sky-400 font-semibold text-xs mt-0.5">{edu.school}</p>
                  <p className="text-xs text-slate-400 mt-1">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-in-up delay-400">
          <Skills />
        </div>
      </div>
    </section>
  );
}

export default About;
