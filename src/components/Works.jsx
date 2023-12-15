import { Link } from "react-router-dom";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
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
          <Link
            to="vonmak.github.io/akan_names/"
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
          <h2 className="text-xl font-semibold">Qejani</h2>
          <p className="text-[15px]">
            This project is mean't to help landlords manage their apartments and
            tenants make payment to the landlord easily.
          </p>
          <a
            href="https://apartmentlandlord.herokuapp.com/"
            className="flex flex-row items-center text-teal-400"
          >
            Learn more <RxArrowRight />
          </a>
        </div>
      </div>
      <div className="cursor-pointer flex flex-col gap-5 p-3 border border-slate-700  rounded  md:gap-3">
        <div className="h-48">
          <img src={p3} alt="" className="w-full h-full object-cover rounded" />
        </div>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Megga Dalla</h2>
          <p className="text-[15px]">
            Mega Dalla is on a mission to make shopping well effortless for
            everyone, everywhere. Our service is connect vendors with customers
            around the globe and enable vendors to reach more customers and
            biuld their business.
          </p>
          <a
            href="https://mega-dalla-frontend.herokuapp.com/"
            className="flex flex-row items-center text-teal-400"
          >
            Learn more <RxArrowRight />
          </a>
        </div>
      </div>

      <p className="text-sm text-center">
        To see more projects navigate into my{" "}
        <Link to="https://github.com/Vonmak/" className="hover:text-teal-400">
          Github
        </Link>
      </p>
    </div>
  );
}

export default Works;
