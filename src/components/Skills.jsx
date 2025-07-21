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

function Skills() {
  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold text-teal-500 mb-6 text-center animate-fade-in-up">Skills & Tools</h3>
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
        <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 hover:scale-105 transition-transform animate-fade-in-up">
          <img src={html} alt="HTML logo" className="h-16 w-16 object-contain mb-2 animate-scale-in"/>
          <span className="font-semibold text-gray-700 dark:text-gray-200">HTML</span>
        </div>
        <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 hover:scale-105 transition-transform animate-fade-in-up delay-100">
          <img src={css} alt="CSS logo" className="h-16 w-16 object-contain mb-2 animate-scale-in"/>
          <span className="font-semibold text-gray-700 dark:text-gray-200">CSS</span>
        </div>
        <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 hover:scale-105 transition-transform animate-fade-in-up delay-200">
          <img src={bootstrap} alt="Bootstrap logo" className="h-16 w-16 object-contain mb-2 animate-scale-in"/>
          <span className="font-semibold text-gray-700 dark:text-gray-200">Bootstrap</span>
        </div>
        <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 hover:scale-105 transition-transform animate-fade-in-up delay-300">
          <img src={tailwind} alt="Tailwind CSS logo" className="h-16 w-16 object-contain mb-2 animate-scale-in"/>
          <span className="font-semibold text-gray-700 dark:text-gray-200">Tailwind</span>
        </div>
        <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 hover:scale-105 transition-transform animate-fade-in-up delay-400">
          <img src={js} alt="JavaScript logo" className="h-16 w-16 object-contain mb-2 animate-scale-in"/>
          <span className="font-semibold text-gray-700 dark:text-gray-200">JavaScript</span>
        </div>
        <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 hover:scale-105 transition-transform animate-fade-in-up delay-500">
          <img src={react} alt="React logo" className="h-16 w-16 object-contain mb-2 animate-scale-in"/>
          <span className="font-semibold text-gray-700 dark:text-gray-200">React</span>
        </div>
        <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 hover:scale-105 transition-transform animate-fade-in-up delay-600">
          <img src={vue} alt="Vue logo" className="h-16 w-16 object-contain mb-2 animate-scale-in"/>
          <span className="font-semibold text-gray-700 dark:text-gray-200">Vue</span>
        </div>
        <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 hover:scale-105 transition-transform animate-fade-in-up delay-700">
          <img src={python} alt="Python logo" className="h-16 w-16 object-contain mb-2 animate-scale-in"/>
          <span className="font-semibold text-gray-700 dark:text-gray-200">Python</span>
        </div>
        <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 hover:scale-105 transition-transform animate-fade-in-up delay-800">
          <img src={flask} alt="Flask logo" className="h-16 w-16 object-contain mb-2 animate-scale-in"/>
          <span className="font-semibold text-gray-700 dark:text-gray-200">Flask</span>
        </div>
        <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 hover:scale-105 transition-transform animate-fade-in-up delay-900">
          <img src={django} alt="Django logo" className="h-16 w-16 object-contain mb-2 animate-scale-in"/>
          <span className="font-semibold text-gray-700 dark:text-gray-200">Django</span>
        </div>
        <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 hover:scale-105 transition-transform animate-fade-in-up delay-1000">
          <img src={php} alt="PHP logo" className="h-16 w-16 object-contain mb-2 animate-scale-in"/>
          <span className="font-semibold text-gray-700 dark:text-gray-200">PHP</span>
        </div>
        <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 hover:scale-105 transition-transform animate-fade-in-up delay-1100">
          <img src={laravel} alt="Laravel logo" className="h-16 w-16 object-contain mb-2 animate-scale-in"/>
          <span className="font-semibold text-gray-700 dark:text-gray-200">Laravel</span>
        </div>
        <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 hover:scale-105 transition-transform animate-fade-in-up delay-1200">
          <img src={git} alt="Git logo" className="h-16 w-16 object-contain mb-2 animate-scale-in"/>
          <span className="font-semibold text-gray-700 dark:text-gray-200">Git</span>
        </div>
        <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 hover:scale-105 transition-transform animate-fade-in-up delay-1300">
          <img src={github} alt="GitHub logo" className="h-16 w-16 object-contain mb-2 animate-scale-in"/>
          <span className="font-semibold text-gray-700 dark:text-gray-200">GitHub</span>
        </div>
        <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 hover:scale-105 transition-transform animate-fade-in-up delay-1400">
          <img src={figma} alt="Figma logo" className="h-16 w-16 object-contain mb-2 animate-scale-in"/>
          <span className="font-semibold text-gray-700 dark:text-gray-200">Figma</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;