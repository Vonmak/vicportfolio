import { Link } from "react-router-dom";
import ve from "../assets/ve.png";
import { FaTwitter, FaLinkedin, FaGithub, FaBuilding } from "react-icons/fa";
import Mail from "./Mail";
import Phone from "./phone";

export default function Home() {
  return (
    <div className="flex flex-col justify-evenly mx-auto px-24 lg:h-screen">
      <div className="relative mt-20 border-dashed border-b border-cyan-900 pb-5 flex flex-col items-center md:pb-0 xl:pb-16 md:flex-row">
        <div className="space-y-1 mt-10 w-full md:space-y-10 md:mt-0 md:w-1/3 p-2">
          <button className="py-2 px-6 border rounded-md">
            👋🏾 Hello there...
          </button>

          <div className="">
            <div className="text-xl font-extrabold">I'm</div>
            <div className=" text-5xl font-extrabold">Victor Ondari.</div>
            <div className="text-xl font-extrabold">Software Engineer</div>
          </div>
          <div className="flex flex-row space-x-2 text-2xl pt-3 md:pt-0">
            <Link
              className="px-2"
              to="https://www.linkedin.com/in/victorondari/"
            >
              <FaLinkedin fontSize={20} />
            </Link>
            <Link className="px-2" to="https://github.com/Vonmak/">
              <FaGithub fontSize={20} />
            </Link>
            <Link className="px-2" to="https://twitter.com/SniffRades">
              <FaTwitter fontSize={20} />
            </Link>
          </div>
        </div>
        <div class="bg-gray-600 h-[18rem] w-[18rem] rounded-full order-first md:w-1/3 md:order-none md:h-[16rem] lg:h-[19rem] xl:h-[24rem]">
          <img src={ve} alt="" class="h-full w-full  object-cover" />
        </div>
        <div className="flex flex-row w-full mt-3 justify-between md:flex-col md:mt-0 md:space-y-5 md:justify-end  md:items-end md:w-1/3">
          <div className="flex ">
            <div className="mr-2 py-2 px-6 border rounded-md text-lg font-bold">
              <Mail />
            </div>
            <div className=" py-2 px-6 border rounded-md text-lg font-bold">
              <Phone />
            </div>
          </div>
          <p className="mt-2 py-2 px-6 border rounded-md text-lg font-bold">
            Technical Trainer
          </p>
          <Link
            to="http://eai.ac.ke/"
            className="flex py-2 px-6 border rounded-md text-xl font-extrabold mt-2"
          >
            <FaBuilding fontSize={20} />
            Equip Africa Institute
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-5 p-8 text-center md:px-0 md:py-10 md:flex-row ">
        <div className="border flex flex-col items-center space-y-5 justify-center border-slate-700 h-48 rounded md:w-1/3 ">
          <p>1 Year as a</p>
          <p className="block text-3xl font-bold">Developer</p>
        </div>
        <div className="border flex flex-col items-center space-y-5 justify-center border-slate-700 h-48 rounded md:w-1/3 ">
          <p className="block text-3xl font-bold">30+ Projects</p>
          <p>
            on Github <span>`Big & Small`</span>
          </p>
        </div>
        <div className="border flex flex-col items-center space-y-5 justify-center border-slate-700 h-48 rounded md:w-1/3 ">
          <p>2 Years</p>
          <p className="block text-3xl font-bold">Work Experience</p>
        </div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
