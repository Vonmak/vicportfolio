import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

import logo from "../assets/vic-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-teal-100 via-white to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-10 px-4 mt-16 border-t border-teal-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="logo" className="rounded-full w-14 h-14 shadow-md border-2 border-teal-400" />
            <span className="font-bold text-xl text-teal-500 tracking-tight">Victor</span>
          </Link>
          <p className="mt-2 text-center md:text-left text-gray-600 dark:text-gray-300 text-sm">Balancing the Riches of Life, Love, and Legacy.</p>
        </div>
        <div className="flex gap-5 items-center justify-center">
          <a href="https://www.instagram.com/_sniffer/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-500 dark:text-gray-300 hover:text-teal-500 transition transform hover:scale-125 duration-200"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/victorondari/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-500 dark:text-gray-300 hover:text-teal-500 transition transform hover:scale-125 duration-200"><FaLinkedin /></a>
          <a href="https://github.com/Vonmak/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-500 dark:text-gray-300 hover:text-teal-500 transition transform hover:scale-125 duration-200"><FaGithub /></a>
          <a href="https://twitter.com/SniffRades" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-500 dark:text-gray-300 hover:text-teal-500 transition transform hover:scale-125 duration-200"><FaTwitter /></a>
          <a href="https://www.facebook.com/sniffrades/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-500 dark:text-gray-300 hover:text-teal-500 transition transform hover:scale-125 duration-200"><FaFacebook /></a>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-400 dark:text-gray-500">
        &copy; {new Date().getFullYear()} Victor Ondari. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
