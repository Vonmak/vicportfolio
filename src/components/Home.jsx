import { Link } from "react-router-dom";
import ve from "../assets/WhatsApp_Image_2023-12-15_at_15.13.00-removebg-preview.png";
import vic from "../assets/mainvic.jpeg";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Works from "./Works";

export default function Home() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col justify-evenly lg:h-screen">
        <div className="mt-20 border-dashed border-b border-cyan-900 pb-5 flex flex-col items-center md:pb-0 xl:pb-16 md:flex-row">
          <div className="flex flex-col items-center space-y-1 mt-10 w-full p-2 sm:space-y-10 md:mt-0 md:w-1/3">
            <button className="py-2 px-6 border rounded-md">
              👋🏾 Hello there...
            </button>
            <p className="text-teal-500 shadow-lg shadow-teal-500 p-2">
              {" "}
              <span className="font-bold">Welcome</span> to my Digital space!!
            </p>

            <div className="">
              <div className="text-xl font-extrabold">I'm</div>
              <div className=" text-5xl font-extrabold">Victor Ondari.</div>
              <div className="text-xl font-extrabold">a Software Engineer</div>
            </div>
          </div>
          <div className=" h-[18rem] w-[18rem] rounded-full order-first md:w-1/3 md:order-none md:h-[16rem] lg:h-[19rem] xl:h-[24rem]">
            <img src={ve} alt="" className="h-full w-full  object-cover" />
          </div>
          <div className="flex flex-col w-full mt-3 justify-between items-center md:mt-0 md:space-y-5 md:justify-end  md:items-end md:w-1/3">
            <p className="mt-2 py-2 px-6 rounded-md text-lg font-bold">
              Technical Trainer
            </p>
            <Link
              to="http://eai.ac.ke/"
              className="flex py-2 px-6 rounded-md text-xl font-extrabold mt-2"
            >
              Equip Africa Institute
            </Link>
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
        </div>
        <div className="flex flex-col gap-5 p-8 text-center md:px-0 md:py-10 md:flex-row ">
          <div className="border flex flex-col items-center space-y-5 justify-center border-slate-700 h-48 rounded md:w-1/3 ">
            <p>2 Years as a</p>
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
      <div>
        <h2 className="font-bold text-3xl text-center md:text-start">About</h2>
        <div
          className="bg-gray-800 text-white text-xl text-center p-10 leading-loose"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0), rgba(255,255,255,1)), url(${vic})`,
            backgroundSize: "cover",
            backgroundPosition: "right",
            backgroundBlendMode: "multiply",
          }}
        >
          <p className="">
            Victor, a Technical Trainer with teaching experience in IT and
            Computer Science, adept at enhancing engagement and learning
            outcomes in classroom settings.
            <br />
            With a 2+ year coding background, I specialize in crafting
            innovative digital experiences and delivering reliable, clean code
            for complex problem-solving. Eager to collaborate on tech projects
            and dedicated to finding optimal solutions.
            
          </p>
          <p className="text-sm">For more {" "}{">>"}{" "}
            <Link
              to="/about"
              className="text-sm text-teal-400 hover:text-teal-300 mx-2"
            >
              Click here!!
            </Link></p>
        </div>
      </div>

      <div className="my-10 mx-10 md:mx-0">
        <h2 className="font-bold text-3xl my-8 text-center md:text-start">
          Sample projects
        </h2>
        <Works />

        <p className="text-sm">
          To see more projects {">>"}
          <Link
            to="/projects"
            className="text-teal-400 hover:text-teal-300 mx-2"
          >
            Click here!!
          </Link>
        </p>
      </div>
      <div className="text-lg mb-10 text-center mx-10 md:mx-0">
          <p>
            For my Education details and more on my Experience, refer to my CV:{" "}
            <a
              href="https://drive.google.com/file/d/1qxWfZEo1Zvgg0UKyMcU1ZIDStjdOUsv9/view?usp=sharing"
              className="text-teal-400"
            >
              Resume Link
            </a>
          </p>
          <p>
            Contact: Email -{" "}
            <a href="mailto:vonmak2@gmail.com" className="text-teal-400">
              vonmak2@gmail.com
            </a>{" "}
            | LinkedIn -{" "}
            <a
              href="https://www.linkedin.com/in/victorondari/"
              className="text-teal-400"
            >
              victorondari
            </a>{" "}
            | Twitter -{" "}
            <a href="https://twitter.com/SniffRades" className="text-teal-400">
              @SniffRades
            </a>
          </p>
        </div>
    </section>
  );
}
