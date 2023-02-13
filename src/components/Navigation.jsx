import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const navigation = [
  { name: "About", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Experience", to: "/experience" },
  {
    name: "Download my CV",
    to: "https://drive.google.com/file/d/1Lcx1-iZwV_bGCChPxl6CA2qDaphX-l3Y/view?usp=share_link",
  },
];

const Navigation = ({ textClass }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <ul className={`${isVisible ? "" : "hidden"} lg:flex lg:gap-x-12`}>
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
      <button
        className={`block lg:hidden order-last ${textClass}`}
        onClick={() => setIsVisible(!isVisible)}
      >
        <RxHamburgerMenu />
      </button>
    </>
  );
};

export default Navigation;
