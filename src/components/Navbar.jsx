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
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const myName = "Victor";

  return (
    <nav
      className={`flex justify-between py-5 items-center px-2 md:px-5 z-50 fixed top-0 w-full shadow-md ${
        scrollPosition > 0 ? "bg-gray-800 text-white" : ""
      }`}
    >
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          alt="logo"
          className="mr-6 rounded-full w-16 h-16 pt-1"
        />
        <code className="font-semibold text-2xl text-teal-400">{`{ ${myName} }`}</code>
      </Link>

      <div
        className={`flex flex-col absolute top-0 py-5 duration-300 ${
          scrollPosition > 0 ? "bg-gray-800 text-white" : "bg-slate-400"
        }  ${
          active ? "-right-[0%]" : "-right-[100%]"
        } w-full items-center justify-center space-y-5 md:right-0 md:items-center md:opacity-[100%] md:h-max md:space-y-0 md:bg-transparent md:space-x-5 md:relative md:flex-row md:top-0 md:w-max`}
      >
        <div className="block text-2xl md:hidden">
          <RxCross1 onClick={() => setActive(!active)} />
        </div>
        {navigation.map((item, index) => (
          <Link
            to={item.to}
            key={item.name + index}
            className={`text-xl font-extrabold md:text-xl`}
            onClick={() => setActive(!active)}
          >
            {item.name}
          </Link>
        ))}

        <div className="hidden md:block">
          <Theme />
        </div>
      </div>

      <div className="flex flex-row items-center space-x-3 md:hidden">
        <div className="block md:hidden">
          <Theme />
        </div>
        <AiOutlineMenu
          className="text-2xl"
          onClick={() => setActive(!active)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
