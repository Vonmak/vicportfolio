import ve from "../assets/mainvic.jpeg";
import Skills from "./Skills";

function About() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-teal-50 to-teal-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500 py-24 px-4">
      <div className="max-w-5xl w-full bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-10 p-8 md:p-16 animate-fade-in-up">
        <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-6 md:w-1/3">
          <div className="rounded-full border-4 border-teal-400 shadow-lg overflow-hidden w-48 h-48 md:w-56 md:h-56 bg-white dark:bg-gray-800 animate-scale-in">
            <img src={ve} alt="Victor Ondari main profile" className="object-cover w-full h-full" />
          </div>
          <span className="text-teal-500 text-lg font-semibold animate-fade-in-up">About Me</span>
        </div>
        <div className="flex flex-col gap-6 md:w-2/3 animate-fade-in-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2 animate-fade-in-up">Welcome to my Digital Space!</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 animate-fade-in-up delay-100">
            Victor, a Technical Trainer with over a year of experience teaching IT and Computer Science to college students. Skilled in managing classroom sessions to enhance engagement and learning outcomes.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 animate-fade-in-up delay-200">
            With a 2+ year coding background, I focus on crafting innovative digital experiences and providing reliable, clean code for complex problem-solving.
          </p>
          <div className="flex flex-wrap gap-3 mt-2 animate-fade-in-up delay-300">
            <a href="https://moringaschool.com/" className="text-teal-500 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">Moringa School Alumnus</a>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600 dark:text-gray-400">Passionate about shaping the future of digital innovation.</span>
          </div>
          <div className="mt-4 animate-fade-in-up delay-400">
            <Skills />
          </div>
          <div className="mt-6 text-base text-gray-600 dark:text-gray-400 animate-fade-in-up delay-500">
            <p>
              <span className="font-semibold text-gray-800 dark:text-white">Resume:</span> <a href="https://drive.google.com/file/d/1Lcx1-iZwV_bGCChPxl6CA2qDaphX-l3Y/view?usp=share_link" className="text-teal-500 hover:underline" target="_blank" rel="noopener noreferrer">View CV</a>
            </p>
            <p className="mt-2">
              <span className="font-semibold text-gray-800 dark:text-white">Contact:</span> <a href="mailto:vonmak2@gmail.com" className="text-teal-500 hover:underline">vonmak2@gmail.com</a> | <a href="https://www.linkedin.com/in/victorondari/" className="text-teal-500 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="https://twitter.com/SniffRades" className="text-teal-500 hover:underline" target="_blank" rel="noopener noreferrer">Twitter</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
