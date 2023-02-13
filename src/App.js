import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { ThemeProvider } from "./components/theme/Theme";
import WhatsApp from "./components/Whatsapp";

function App() {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <WhatsApp />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
