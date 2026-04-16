import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/theme/Theme";
import WhatsApp from "./components/Whatsapp";

const Home = lazy(() => import("./components/Home"));
const Projects = lazy(() => import("./components/Projects"));
const About = lazy(() => import("./components/About"));

function PageSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
      <div className="w-8 h-8 rounded-full border-4 border-sky-200 border-t-sky-500 animate-spin"></div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-900 px-4 text-center">
      <span className="text-7xl font-extrabold text-sky-500">
        404
      </span>
      <h1 className="mt-4 text-2xl font-bold text-slate-800 dark:text-white">Page not found</h1>
      <p className="mt-2 text-slate-500 dark:text-slate-400">
        The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="mt-6 inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2.5 px-7 rounded-full shadow transition"
      >
        Back to Home
      </a>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Suspense fallback={<PageSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <WhatsApp />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
