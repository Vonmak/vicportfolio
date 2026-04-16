import Works from "./Works";
import Github from "./github/Github";

function Projects() {
  return (
    <section className="w-full min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center animate-fade-in-up">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-500">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Featured <span className="text-sky-500">Works</span>
          </h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm">
            Projects built across fintech, betting, accommodation, and social platforms.
          </p>
        </div>

        <Works />

        <div className="mt-16 animate-fade-in-up delay-400">
          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-500">Open Source</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-2">GitHub Activity</h3>
          </div>
          <Github />
        </div>
      </div>
    </section>
  );
}

export default Projects;
