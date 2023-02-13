import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaHome,
} from "react-icons/fa";

import logo from "../assets/vic-removebg-preview.png";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-teal-400 py-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex flex-col text-center sm:text-left sm:mr-10">
          <div className="h-24 w-24 rounded-full mx-auto">
            <Link to="/">
              <img src={logo} alt="logo" className="rounded-full" />
            </Link>
          </div>
          <p className="font-extrabold text-lg mt-5">Useful links</p>
          <Link
            className="text-sky-100 hover:text-teal-400 cursor-pointer mb-2"
            to="/"
          >
            <FaHome fontSize={20} />
          </Link>
          <Link className="text-sky-100 hover:text-teal-400 mb-2" to="/about">
            About
          </Link>
          <Link
            className="text-sky-100 hover:text-teal-400 mb-2"
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className="text-sky-100 hover:text-teal-400 mb-2"
            to="/experience"
          >
            Experience
          </Link>
        </div>
        <div className="flex flex-col text-center sm:text-left sm:mr-10">
          <p className="font-extrabold text-lg">Social Media</p>
          <Link
            className="text-sky-100 hover:text-teal-400 mb-2"
            to="https://www.instagram.com/_sniffer/"
          >
            <FaInstagram fontSize={20} /> Instagram
          </Link>
          <Link
            className="text-sky-100 hover:text-teal-400 mb-2"
            to="https://www.linkedin.com/in/victorondari/"
          >
            <FaLinkedin fontSize={20} /> LinkedIn
          </Link>
          <Link
            className="text-sky-100 hover:text-teal-400 mb-2"
            to="https://github.com/Vonmak/"
          >
            <FaGithub fontSize={20} /> Github
          </Link>
          <Link
            className="text-sky-100 hover:text-teal-400 mb-2"
            to="https://twitter.com/SniffRades"
          >
            <FaTwitter fontSize={20} /> Twitter
          </Link>
          <Link
            className="text-sky-100 hover:text-teal-400 mb-2"
            to="https://www.facebook.com/sniffrades/"
          >
            <FaFacebook fontSize={20} /> Facebook
          </Link>
        </div>
        <div className="flex flex-col">
          <p className="font-extrabold text-lg">Newsletter</p>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2023 Rades. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
