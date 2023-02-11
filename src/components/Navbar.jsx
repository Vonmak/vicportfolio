import { Link } from "react-router-dom";
// import { Bars3Icon } from "@heroicons/react/24/outline";
import logo from "../assets/vic.png";

const navigation = [
  { name: "About", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Experience", to: "/skills" },
];

export default function Navbar() {
  return (
    <div
      className="flex items-center justify-between  px-24 fixed top-0 w-full z-10"
      aria-label="Global"
    >
      <div className="flex items-center ">
        <Link to="/" className="font-bold text-cyan-900 mr-6">
          <img src={logo} alt="" className="rounded-full w-16 h-16 pt-1" />
        </Link>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item, index) => (
          <Link
            key={item.name + index}
            to={item.to}
            className="text-lg font-bold leading-6 text-cyan-900 cursor-pointer"
          >
            {item.name}
          </Link>
        ))}
      </div>~
      <div className="flex items-center">
        <a
          href="mailto:vonmak2@gmail.com"
          class="bg-cyan-900 text-teal-400 border py-2 px-5 rounded-xl hover:bg-teal-400 hover:text-cyan-900 duration-700"
        >
          Write an Email
        </a>

        <a
          href="tel:+254791665710"
          class="bg-cyan-900 text-teal-400 border py-2 px-5 rounded-xl hover:bg-teal-400 hover:text-cyan-900 duration-700"
        >
          Make a Call
        </a>
      </div>
    </div>
  );
}
