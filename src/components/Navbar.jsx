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
  { name: "Experience", to: "/experience" },
  {
    name: "Download my CV",
    to: "https://drive.google.com/file/d/1Lcx1-iZwV_bGCChPxl6CA2qDaphX-l3Y/view?usp=share_link",
  },
];

const Navbar = () => {
  const [active, setActive] = useState(false);
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

  const myName = "{ Victor }";

  return (
    <nav
      className={`flex flex-row justify-between py-5 items-center px-2 md:px-5 z-50 fixed top-0 w-full ${navbarClass}`}
    >
      <Link to="/" className="flex items-center ">
        <img
          src={logo}
          alt="logo"
          className=" mr-6 rounded-full w-16 h-16 pt-1"
        />
        <code className="font-semibold text-2xl text-teal-400">{myName}</code>
      </Link>

      <div
        className={`flex flex-col absolute bg-black opacity-[95%]  top-0 duration-300  ${textClass} ${
          active ? `-right-[0%]` : `-right-[100%]`
        }  h-screen w-full items-start pl-[25%] justify-center space-y-5 md:right-0 md:items-center md:pl-0 md:opacity-[100%] md:h-max md:space-y-0 md:bg-transparent  md:space-x-5 md:relative md:flex-row md:top-0 md:w-max`}
      >
        <div className="block absolute text-2xl font-black top-10 right-10 md:hidden">
          <RxCross1 onClick={() => setActive(!active)} />
        </div>
        {navigation.map((item, index) => (
          <Link
            to={item.to}
            key={item.name + index}
            className={`text-xl font-extrabold md:text-xl ${textClass}`}
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
          className={`text-2xl ${textClass}`}
          onClick={() => setActive(!active)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
