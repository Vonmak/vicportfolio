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
    <footer className="bg-gray-900 text-teal-400 py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Logo and Slogan */}
        <div className="flex flex-col items-center justify-center ">
          <div className="h-24 w-24 rounded-full">
            <Link to="/">
              <img src={logo} alt="logo" className="rounded-full" />
            </Link>
          </div>
          <p className="mt-2 text-center">Balancing the Riches of Life, Love, and Legacy.</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center ">
          <Link
            className="text-teal-400 hover:text-teal-300 mx-2"
            to="https://www.instagram.com/_sniffer/"
          >
            <FaInstagram fontSize={20} />
          </Link>
          <Link
            className="text-teal-400 hover:text-teal-300 mx-2"
            to="https://www.linkedin.com/in/victorondari/"
          >
            <FaLinkedin fontSize={20} />
          </Link>
          <Link
            className="text-teal-400 hover:text-teal-300 mx-2"
            to="https://github.com/Vonmak/"
          >
            <FaGithub fontSize={20} />
          </Link>
          <Link
            className="text-teal-400 hover:text-teal-300 mx-2"
            to="https://twitter.com/SniffRades"
          >
            <FaTwitter fontSize={20} />
          </Link>
          <Link
            className="text-teal-400 hover:text-teal-300 mx-2"
            to="https://www.facebook.com/sniffrades/"
          >
            <FaFacebook fontSize={20} />
          </Link>
        </div>

        {/* Copyright */}
        <div className="flex justify-center items-center py-4 ">
          <p>&copy; 2023 Rades. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
