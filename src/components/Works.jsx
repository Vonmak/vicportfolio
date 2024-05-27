import { Link } from "react-router-dom";
import p1 from "../assets/p1.png";
import p2 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import { RxArrowRight } from "react-icons/rx";

function Works() {
  return (
    <div className="grid grid-cols-1 mt-10 gap-5 md:grid-cols-2 lg:grid-cols-3">
      <div className="cursor-pointer flex flex-col gap-5 p-3 border border-slate-700  rounded  md:gap-3">
        <div className="h-48">
          <img src={p1} alt="" className="w-full h-full object-cover rounded" />
        </div>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Akan Names</h2>
          <p className="text-[15px]">
            This program is used to identify akan names from a given birthday
            and gender input.
          </p>
          <p className=" text-xs">
            html/css
          </p>
          <Link
            to="https://vonmak.github.io/akan_names/"
            className="flex flex-row items-center text-teal-400"
          >
            Learn more <RxArrowRight />
          </Link>
        </div>
      </div>
      <div className="cursor-pointer flex flex-col gap-5 p-3 border border-slate-700  rounded  md:gap-3">
        <div className="h-48">
          <img src={p2} alt="" className="w-full h-full object-cover rounded" />
        </div>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">StudentKeja</h2>
          <p className="text-[15px]">
          Property/hostel management
          </p>
          <p className=" text-xs">
            React
          </p>
          <a
            href="https://studentkeja.netlify.app/"
            className="flex flex-row items-center text-teal-400"
          >
            Learn more <RxArrowRight />
          </a>
        </div>
      </div>
      <div className="cursor-pointer flex flex-col gap-5 p-3 border border-slate-700  rounded  md:gap-3">
        <div className="h-48">
          <img src={p7} alt="" className="w-full h-full object-cover rounded" />
        </div>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Q-Wash</h2>
          <p className="text-[15px]">
            Q-Wash is a web application that helps users to book car washing spots and also get membership on the carwashes that they use. It also helps carwash owners manage their business.
          </p>
          <p className=" text-xs">
            Vue3
          </p>
          <a
            href="https://qwash.netlify.app/"
            className="flex flex-row items-center text-teal-400"
          >
            Learn more <RxArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Works;
