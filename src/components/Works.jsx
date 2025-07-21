import p1 from "../assets/p1.png";
import p2 from "../assets/p6.png";
import p7 from "../assets/p7.png";

function Works() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Akan Names */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow p-6 flex flex-col gap-4 animate-fade-in-up hover:scale-105 hover:-translate-y-2 duration-300 cursor-pointer">
        <div className="h-48 w-full rounded-xl overflow-hidden mb-2 animate-scale-in">
          <img src={p1} alt="Akan Names project screenshot" className="w-full h-full object-cover" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Akan Names</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm flex-1">This program is used to identify Akan names from a given birthday and gender input.</p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-200 px-2 py-1 rounded text-xs font-semibold">HTML</span>
          <span className="bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-200 px-2 py-1 rounded text-xs font-semibold">CSS</span>
        </div>
        <a href="https://vonmak.github.io/akan_names/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full shadow transition">Learn more</a>
      </div>
      {/* StudentKeja */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow p-6 flex flex-col gap-4 animate-fade-in-up delay-100 hover:scale-105 hover:-translate-y-2 duration-300 cursor-pointer">
        <div className="h-48 w-full rounded-xl overflow-hidden mb-2 animate-scale-in">
          <img src={p2} alt="StudentKeja project screenshot" className="w-full h-full object-cover" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">StudentKeja</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm flex-1">Property/hostel management</p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-200 px-2 py-1 rounded text-xs font-semibold">React</span>
        </div>
        <a href="https://studentkeja.netlify.app/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full shadow transition">Learn more</a>
      </div>
      {/* Q-Wash */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow p-6 flex flex-col gap-4 animate-fade-in-up delay-200 hover:scale-105 hover:-translate-y-2 duration-300 cursor-pointer">
        <div className="h-48 w-full rounded-xl overflow-hidden mb-2 animate-scale-in">
          <img src={p7} alt="Q-Wash project screenshot" className="w-full h-full object-cover" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Q-Wash</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm flex-1">Q-Wash is a web application that helps users to book car washing spots and also get membership on the carwashes that they use. It also helps carwash owners manage their business.</p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-200 px-2 py-1 rounded text-xs font-semibold">Vue3</span>
        </div>
        <a href="https://qwash.netlify.app/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full shadow transition">Learn more</a>
      </div>
    </div>
  );
}

export default Works;
