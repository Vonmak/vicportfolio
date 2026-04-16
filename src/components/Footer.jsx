import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import logo from "../assets/vic-removebg-preview.png";

const socials = [
  { href: "https://www.instagram.com/_sniffer/", icon: <FaInstagram />, label: "Instagram" },
  { href: "https://www.linkedin.com/in/victorondari/", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "https://github.com/Vonmak/", icon: <FaGithub />, label: "GitHub" },
  { href: "https://twitter.com/SniffRades", icon: <FaTwitter />, label: "Twitter" },
  { href: "https://www.facebook.com/sniffrades/", icon: <FaFacebook />, label: "Facebook" },
  { href: "mailto:vonmak2@gmail.com", icon: <FaEnvelope />, label: "Email" },
];

const Footer = () => (
  <footer className="w-full bg-slate-900 dark:bg-slate-950 text-slate-300 py-10 px-5 sm:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start justify-between gap-8 mb-8">
        {/* Brand */}
        <div className="flex flex-col gap-3 max-w-xs">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="logo" className="rounded-full w-10 h-10 border-2 border-sky-500" />
            <span className="font-bold text-lg text-white">Victor Ondari</span>
          </Link>
          <p className="text-xs text-slate-400 leading-relaxed">
            Senior Software Engineer — Nairobi, Kenya. Building scalable systems and clean, reliable code.
          </p>
          <p className="text-xs text-slate-500 italic">"Balancing the riches of life, love, and legacy."</p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Navigation</h4>
          <ul className="flex flex-col gap-2">
            {[{ name: "Home", to: "/" }, { name: "About", to: "/about" }, { name: "Projects", to: "/projects" }].map((l) => (
              <li key={l.name}>
                <Link to={l.to} className="text-xs text-slate-400 hover:text-sky-400 transition">{l.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Contact</h4>
          <div className="flex flex-col gap-1.5 text-xs text-slate-400">
            <a href="mailto:vonmak2@gmail.com" className="hover:text-sky-400 transition">vonmak2@gmail.com</a>
            <a href="tel:+254791665710" className="hover:text-sky-400 transition">+254 791 665 710</a>
            <span>Nairobi, Kenya</span>
          </div>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Follow</h4>
          <div className="flex flex-wrap gap-2">
            {socials.map(({ href, icon, label }) => (
              <a key={label} href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-sky-500 transition text-sm">
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
        <span>&copy; {new Date().getFullYear()} Victor Ondari. All rights reserved.</span>
        <span>Built with React &amp; Tailwind CSS</span>
      </div>
    </div>
  </footer>
);

export default Footer;
