import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { Theme } from "./theme/Theme";
import { Link } from "react-router-dom";
import logo from "../assets/vic.png";

const navigation = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Projects", to: "/projects" },
  {
    name: "Download my CV",
    to:
      "https://drive.google.com/file/d/1Lcx1-iZwV_bGCChPxl6CA2qDaphX-l3Y/view?usp=share_link",
  },
];

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <nav
      className={`backdrop-blur-md bg-white/70 dark:bg-gray-900/80 fixed top-0 left-0 w-full z-50 shadow transition-all duration-300 ${scrollPosition > 0 ? 'border-b border-gray-200 dark:border-gray-700' : ''}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="rounded-full w-12 h-12 shadow-md border-2 border-teal-400"
          />
          <span className="font-bold text-2xl text-teal-500 tracking-tight">Victor</span>
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          {navigation.map((item, index) => (
            item.to.startsWith('http') ? (
              <a
                href={item.to}
                key={item.name + index}
                className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-teal-500 transition relative group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="inline-block pb-1 border-b-2 border-transparent group-hover:border-teal-500 transition-all duration-300">{item.name}</span>
              </a>
            ) : (
              <Link
                to={item.to}
                key={item.name + index}
                className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-teal-500 transition relative group"
              >
                <span className="inline-block pb-1 border-b-2 border-transparent group-hover:border-teal-500 transition-all duration-300">{item.name}</span>
              </Link>
            )
          ))}
          <Theme />
        </div>
        <div className="md:hidden flex items-center gap-2">
          <Theme />
          <button
            className="text-3xl text-teal-500 focus:outline-none"
            onClick={() => setActive(!active)}
            aria-label="Open menu"
          >
            <AiOutlineMenu />
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-white/90 dark:bg-gray-900/95 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ${active ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{backdropFilter: 'blur(8px)'}}
      >
        <button
          className="absolute top-6 right-6 text-3xl text-gray-700 dark:text-gray-200"
          onClick={() => setActive(false)}
          aria-label="Close menu"
        >
          <RxCross1 />
        </button>
        {navigation.map((item, index) => (
          item.to.startsWith('http') ? (
            <a
              href={item.to}
              key={item.name + index}
              className="text-2xl font-semibold text-gray-700 dark:text-gray-200 hover:text-teal-500 transition"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setActive(false)}
            >
              {item.name}
            </a>
          ) : (
            <Link
              to={item.to}
              key={item.name + index}
              className="text-2xl font-semibold text-gray-700 dark:text-gray-200 hover:text-teal-500 transition"
              onClick={() => setActive(false)}
            >
              {item.name}
            </Link>
          )
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
