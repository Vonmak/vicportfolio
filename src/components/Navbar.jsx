import React, { useEffect, useRef, useState } from "react";
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
    name: "Download CV",
    to: "https://drive.google.com/file/d/1Lcx1-iZwV_bGCChPxl6CA2qDaphX-l3Y/view?usp=share_link",
    highlight: true,
  },
];

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeButtonRef = useRef(null);
  const openButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!active) return;
    const handleKeyDown = (e) => { if (e.key === "Escape") closeMenu(); };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [active]);

  useEffect(() => {
    if (active) closeButtonRef.current?.focus();
    else openButtonRef.current?.focus();
  }, [active]);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  const closeMenu = () => setActive(false);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-800"
          : "bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm"
      }`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 py-3">
          <Link to="/" className="flex items-center gap-2.5 group">
            <img src={logo} alt="Victor logo" className="rounded-full w-9 h-9 border-2 border-sky-400 shadow" />
            <span className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-sky-500 transition">
              Victor<span className="text-sky-500">.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-6 items-center">
            {navigation.map((item) =>
              item.to.startsWith("http") ? (
                item.highlight ? (
                  <a key={item.name} href={item.to} target="_blank" rel="noopener noreferrer"
                    className="text-sm font-semibold text-white bg-sky-500 hover:bg-sky-600 px-5 py-2 rounded-full shadow transition">
                    {item.name}
                  </a>
                ) : (
                  <a key={item.name} href={item.to} target="_blank" rel="noopener noreferrer"
                    className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-sky-500 transition">
                    {item.name}
                  </a>
                )
              ) : (
                <Link key={item.name} to={item.to}
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-sky-500 relative group transition">
                  {item.name}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-sky-500 group-hover:w-full transition-all duration-300 rounded-full" />
                </Link>
              )
            )}
            <Theme />
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <Theme />
            <button
              ref={openButtonRef}
              onClick={() => setActive(true)}
              aria-label="Open navigation menu"
              aria-expanded={active}
              aria-controls="mobile-nav"
              className="text-xl text-slate-700 dark:text-slate-200 p-1.5 rounded focus-visible:ring-2 focus-visible:ring-sky-500 outline-none"
            >
              <AiOutlineMenu />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`md:hidden fixed inset-0 bg-white dark:bg-slate-900 z-[60] flex flex-col items-center justify-center gap-7 transition-all duration-300 ${
          active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          ref={closeButtonRef}
          onClick={closeMenu}
          aria-label="Close navigation menu"
          className="absolute top-5 right-5 text-xl text-slate-600 dark:text-slate-300 hover:text-sky-500 p-1.5 rounded focus-visible:ring-2 focus-visible:ring-sky-500 outline-none"
        >
          <RxCross1 />
        </button>
        {navigation.map((item) =>
          item.to.startsWith("http") ? (
            <a key={item.name} href={item.to} target="_blank" rel="noopener noreferrer"
              className={`text-xl font-bold transition ${item.highlight ? "text-sky-500" : "text-slate-800 dark:text-white hover:text-sky-500"}`}
              onClick={closeMenu}>
              {item.name}
            </a>
          ) : (
            <Link key={item.name} to={item.to}
              className="text-xl font-bold text-slate-800 dark:text-white hover:text-sky-500 transition"
              onClick={closeMenu}>
              {item.name}
            </Link>
          )
        )}
      </div>
    </>
  );
};

export default Navbar;
