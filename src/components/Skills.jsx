import html from "../assets/html.png";
import bootstrap from "../assets/bootstrap.png";
import js from "../assets/js.png";
import figma from "../assets/figma.png";
import css from "../assets/css.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import python from "../assets/python.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import vue from "../assets/vue.png";
import php from "../assets/php.png";
import laravel from "../assets/laravel.png";
import flask from "../assets/flask.png";
import django from "../assets/django.png";

const categories = [
  {
    label: "Languages",
    bg: "bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300",
    skills: ["Python", "JavaScript", "TypeScript", "Go"],
  },
  {
    label: "Frontend",
    bg: "bg-sky-50 dark:bg-sky-900/20 border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300",
    skills: ["React", "Vue.js", "Nuxt3", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    label: "Backend",
    bg: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300",
    skills: ["Django", "FastAPI", "Flask", "PHP", "Laravel"],
  },
  {
    label: "Databases",
    bg: "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300",
    skills: ["PostgreSQL", "GraphQL", "REST APIs"],
  },
  {
    label: "Cloud & DevOps",
    bg: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300",
    skills: ["AWS (EC2, S3, RDS)", "GCP", "Digital Ocean", "Docker", "GitHub Actions", "GitLab CI"],
  },
  {
    label: "Tools",
    bg: "bg-slate-100 dark:bg-slate-700/40 border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300",
    skills: ["Git", "GitHub", "Figma"],
  },
];

const toolLogos = [
  { src: python, name: "Python" },
  { src: django, name: "Django" },
  { src: flask, name: "Flask" },
  { src: react, name: "React" },
  { src: vue, name: "Vue.js" },
  { src: js, name: "JavaScript" },
  { src: html, name: "HTML" },
  { src: css, name: "CSS" },
  { src: tailwind, name: "Tailwind" },
  { src: bootstrap, name: "Bootstrap" },
  { src: php, name: "PHP" },
  { src: laravel, name: "Laravel" },
  { src: git, name: "Git" },
  { src: github, name: "GitHub" },
  { src: figma, name: "Figma" },
];

function Skills() {
  return (
    <div className="w-full">
      <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white mb-6">
        <span className="text-base">⚡</span> Skills &amp; Tech Stack
      </h3>

      {/* Category rows */}
      <div className="flex flex-col gap-3 mb-8">
        {categories.map((cat) => (
          <div key={cat.label} className="flex flex-wrap sm:flex-nowrap items-start gap-3">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest w-24 flex-shrink-0 pt-1">
              {cat.label}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <span key={skill} className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${cat.bg}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Logo grid */}
      <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">
        Tools &amp; Frameworks
      </h4>
      <div className="grid gap-3 grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
        {toolLogos.map(({ src, name }) => (
          <div
            key={name}
            className="flex flex-col items-center bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 hover:border-sky-300 dark:hover:border-sky-600 hover:-translate-y-0.5 transition-all duration-200"
          >
            <img src={src} alt={`${name} logo`} className="h-8 w-8 object-contain mb-1" />
            <span className="text-[10px] font-medium text-slate-600 dark:text-slate-400 text-center leading-tight">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
