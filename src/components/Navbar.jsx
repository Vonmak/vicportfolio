import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/vic.png";
import { Theme } from "./theme/Theme";

const navigation = [
  { name: "About", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Experience", to: "/experience" },
  {
    name: "Download my CV",
    to: "https://drive.google.com/file/d/1Lcx1-iZwV_bGCChPxl6CA2qDaphX-l3Y/view?usp=share_link",
  },
];

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
      className={`flex items-center justify-between px-24 fixed top-0 w-full z-10 ${navbarClass}`}
      aria-label="Global"
    >
      <div className="flex items-center">
        <Link to="/" className="mr-6">
          <img src={logo} alt="logo" className="rounded-full w-16 h-16 pt-1" />
        </Link>
      </div>
      <ul className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item, index) => (
          <li key={item.name + index}>
            <Link
              to={item.to}
              className={`text-lg font-bold leading-6 cursor-pointer ${textClass}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className={textClass}>
        <Theme />
      </div>
    </nav>
  );
};

export default Navbar;
