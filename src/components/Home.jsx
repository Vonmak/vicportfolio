import ve from "../assets/WhatsApp_Image_2023-12-15_at_15.13.00-removebg-preview.png";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Works from "./Works";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white via-teal-50 to-teal-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10 pt-32 pb-10 px-4">
        <div className="flex flex-col items-start gap-6 md:w-1/2 animate-fade-in-left">
          <span className="text-teal-500 text-lg font-semibold animate-bounce">👋🏾 Hello there...</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight animate-fade-in-up">
            I'm <span className="text-teal-500">Victor Ondari</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300 animate-fade-in-up delay-100">Software Engineer & Technical Trainer</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl animate-fade-in-up delay-200">
            Welcome to my digital space! I craft innovative digital experiences and deliver clean, reliable code for complex problem-solving. Let's build something amazing together.
          </p>
          <div className="flex gap-4 mt-2 animate-fade-in-up delay-300">
            <a href="https://www.linkedin.com/in/victorondari/" target="_blank" rel="noopener noreferrer" className="text-2xl text-teal-500 hover:text-teal-700 transition"><FaLinkedin /></a>
            <a href="https://github.com/Vonmak/" target="_blank" rel="noopener noreferrer" className="text-2xl text-teal-500 hover:text-teal-700 transition"><FaGithub /></a>
            <a href="https://twitter.com/SniffRades" target="_blank" rel="noopener noreferrer" className="text-2xl text-teal-500 hover:text-teal-700 transition"><FaTwitter /></a>
          </div>
          <a href="mailto:vonmak2@gmail.com" className="mt-6 inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition animate-fade-in-up delay-400">Contact Me</a>
        </div>
        <div className="flex flex-col items-center md:w-1/2 animate-scale-in">
          <div className="rounded-full shadow-2xl border-4 border-teal-400 overflow-hidden w-64 h-64 md:w-80 md:h-80 bg-white dark:bg-gray-800">
            <img src={ve} alt="Victor Ondari profile" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl px-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center animate-fade-in-up delay-200">
            <span className="text-3xl font-bold text-teal-500">4+</span>
            <span className="text-gray-700 dark:text-gray-200 mt-2">Years as a Developer</span>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center animate-fade-in-up delay-300">
            <span className="text-3xl font-bold text-teal-500">30+</span>
            <span className="text-gray-700 dark:text-gray-200 mt-2">Projects on GitHub</span>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center animate-fade-in-up delay-400">
            <span className="text-3xl font-bold text-teal-500">4+</span>
            <span className="text-gray-700 dark:text-gray-200 mt-2">Years Work Experience</span>
          </div>
        </div>
      </div>
      <Works />
    </section>
  );
}
