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
    <div>
      <div className="bg-gray-900 text-teal-400 flex flex-col justify-between items-center  mx-auto sm:flex-row md:px-24 md:h-44 ">
        <div className="flex flex-col">
          <div className="h-24 w-24 rounded-full">
            <Link to="/">
              <img src={logo} alt="logo" className="rounded-full" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-extrabold text-lg">Useful links</p>
          <Link
            className="text-sky-100 hover:text-teal-400 cursor-pointer"
            to="/"
          >
            <FaHome fontSize={20} />
          </Link>
          <Link className="text-sky-100 hover:text-teal-400" to="/about">
            About
          </Link>
          <Link className="text-sky-100 hover:text-teal-400" to="/projects">
            Projects
          </Link>
          <Link className="text-sky-100 hover:text-teal-400" to="/experience">
            Experience
          </Link>
        </div>
        <div className="flex flex-col justify-evenly">
          <p className="font-extrabold text-lg">Social Media</p>
          <Link
            className="text-sky-100 hover:text-teal-400 flex"
            to="https://www.instagram.com/_sniffer/"
          >
            <FaInstagram fontSize={20} /> Instagram
          </Link>
          <Link
            className="text-sky-100 hover:text-teal-400 flex"
            to="https://www.linkedin.com/in/victorondari/"
          >
            <FaLinkedin fontSize={20} /> LinkedIn
          </Link>
          <Link
            className="text-sky-100 hover:text-teal-400 flex"
            to="https://github.com/Vonmak/"
          >
            <FaGithub fontSize={20} /> Github
          </Link>
          <Link
            className="text-sky-100 hover:text-teal-400 flex"
            to="https://twitter.com/SniffRades"
          >
            <FaTwitter fontSize={20} /> Twitter
          </Link>
          <Link
            className="text-sky-100 hover:text-teal-400 flex"
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
