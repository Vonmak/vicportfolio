import ve from "../assets/WhatsApp_Image_2023-12-15_at_15.13.00-removebg-preview.png";
import { FaTwitter, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Works from "./Works";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-400/10 dark:bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Hero */}
      <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10 pt-28 pb-8 px-5 sm:px-8">
        {/* Left: Text */}
        <div className="flex flex-col items-start gap-4 w-full md:w-1/2 animate-fade-in-left">
          <span className="inline-flex items-center gap-2 bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-300 text-sm font-semibold px-4 py-1.5 rounded-full border border-sky-200 dark:border-sky-700">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open to new opportunities
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Hi, I'm{" "}
            <span className="text-sky-500">Victor Ondari</span>
          </h1>

          <h2 className="text-lg sm:text-xl font-semibold text-slate-600 dark:text-slate-300">
            Senior Software Engineer &amp; Technical Trainer
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
            7+ years designing and operating scalable backend systems with Python
            and JavaScript. Specializing in high-performance APIs, cloud-native
            applications on AWS &amp; GCP, and modern frontend with React and Vue.js.
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {["Python", "Django", "FastAPI", "React", "Vue.js", "PostgreSQL", "AWS", "Docker"].map((t) => (
              <span
                key={t}
                className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex gap-3">
            {[
              { href: "https://www.linkedin.com/in/victorondari/", icon: <FaLinkedin size={17} />, label: "LinkedIn" },
              { href: "https://github.com/Vonmak/", icon: <FaGithub size={17} />, label: "GitHub" },
              { href: "https://twitter.com/SniffRades", icon: <FaTwitter size={17} />, label: "Twitter" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-sky-500 hover:border-sky-400 dark:hover:text-sky-400 shadow-sm transition"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:vonmak2@gmail.com"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-7 rounded-full shadow-md shadow-sky-200 dark:shadow-sky-900/30 transition"
            >
              <HiMail size={18} /> Get In Touch
            </a>
            <a
              href="https://drive.google.com/file/d/1Lcx1-iZwV_bGCChPxl6CA2qDaphX-l3Y/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-sky-500 text-sky-600 dark:text-sky-400 dark:border-sky-400 font-semibold py-3 px-7 rounded-full hover:bg-sky-500 hover:text-white dark:hover:bg-sky-500 dark:hover:text-white transition"
            >
              <FaDownload size={14} /> Download CV
            </a>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="flex items-center justify-center w-full md:w-1/2 animate-scale-in">
          <div className="relative inline-block animate-float">
            <div className="absolute inset-0 rounded-full bg-sky-400 blur-3xl opacity-20 scale-110 pointer-events-none" />
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-sky-400 shadow-2xl bg-gradient-to-br from-sky-100 to-blue-100 dark:from-sky-900 dark:to-slate-800">
              <img src={ve} alt="Victor Ondari" className="w-full h-full object-cover object-top" />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg px-3 py-2 flex items-center gap-2">
              <span className="text-xl">🚀</span>
              <div>
                <p className="text-xs text-slate-400 dark:text-slate-500 leading-none">Experience</p>
                <p className="text-sm font-bold text-slate-800 dark:text-white">7+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative w-full max-w-6xl px-5 sm:px-8 mt-4 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "7+", label: "Years of Experience" },
            { value: "50+", label: "GitHub Projects" },
            { value: "3+", label: "Companies" },
            { value: "4+", label: "Tech Stacks" },
          ].map(({ value, label }, i) => (
            <div
              key={label}
              className={`bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-5 flex flex-col items-center animate-fade-in-up delay-${200 + i * 100}`}
            >
              <span className="text-3xl font-extrabold text-sky-500">{value}</span>
              <span className="text-slate-500 dark:text-slate-400 mt-1 text-xs font-medium text-center leading-tight">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Works */}
      <div className="relative w-full max-w-6xl px-5 sm:px-8 mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Featured <span className="text-sky-500">Projects</span>
          </h2>
          <a href="/projects" className="text-sky-500 dark:text-sky-400 text-sm font-semibold hover:underline">
            View all →
          </a>
        </div>
        <Works />
      </div>
    </section>
  );
}
