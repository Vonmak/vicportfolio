import Works from "./Works";
import Github from "./github/Github";

function Projects() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-teal-50 to-teal-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500 py-24 px-4">
      <div className="max-w-7xl w-full">
        <h2 className="text-4xl font-extrabold text-teal-500 mb-10 text-center animate-fade-in-up">Featured Works</h2>
        <Works />
        <div className="mt-16 animate-fade-in-up delay-400">
          <Github />
        </div>
      </div>
    </section>
  );
}

export default Projects;
