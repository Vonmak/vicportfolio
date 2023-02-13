import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/vic.png";
import Navigation from "./Navigation";
import { Theme } from "./theme/Theme";

const Navbar = () => {
  const [navbarClass, setNavbarClass] = useState("");
  const [textClass, setTextClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarClass("bg-gray-800");
        setTextClass("text-white");
      } else {
        setNavbarClass("");
        setTextClass("");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex items-center justify-between mx-auto px-6 md:px-24 fixed top-0 w-full z-10 ${navbarClass}`}
      aria-label="Global"
    >
      <div className="flex items-center">
        <Link to="/" className="mr-6">
          <img src={logo} alt="logo" className="rounded-full w-16 h-16 pt-1" />
        </Link>
      </div>
      <Navigation textClass={textClass} />

      <Theme textClass={textClass} />
    </nav>
  );
};

export default Navbar;
