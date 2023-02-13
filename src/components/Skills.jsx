import html from "../assets/html.png";
import bootstrap from "../assets/bootstrap.png";
import js from "../assets/js.png";
import figma from "../assets/figma.png";
import css from "../assets/css.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import python from "../assets/python.png";
function Skills() {
  return (
    <div className="pt-20 py-10">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold mb-5">Skills</h1>
        <p className="text-base mt-5">
          During my years of professional development, I've been able to gain
          professional and practical knowledge of the following programming
          languages and tools.
        </p>
      </div>

      <div className="flex flex-row gap-5 mt-5 overflow-auto md:mt-10">
        <div className="space-y-1 w-[35%] min-w-[40%] md:w-1/7 md:min-w-max">
          <div className="w-full p-2 border border-gray-500 rounded">
            <img src={html} alt="" className="h-20 w-full object-contain" />
          </div>
          <h2 className="font-semibold">`HTML`</h2>
        </div>
        <div className="space-y-1 w-[35%] min-w-[40%] md:w-1/7 md:min-w-max">
          <div className="w-full p-2 border border-gray-500 rounded">
            <img src={css} alt="" className="h-20 w-full object-contain" />
          </div>
          <h2 className="font-semibold">`CSS`</h2>
        </div>
        <div className="space-y-1 w-[35%] min-w-[40%] md:w-1/7 md:min-w-max">
          <div className="w-full p-2 border border-gray-500 rounded">
            <img
              src={bootstrap}
              alt=""
              className="h-20 w-full object-contain"
            />
          </div>
          <h2 className="font-semibold">`Bootstrap`</h2>
        </div>
        <div className="space-y-1 w-[35%] min-w-[40%] md:w-1/7 md:min-w-max">
          <div className="w-full p-2 border border-gray-500 rounded">
            <img src={js} alt="" className="h-20 w-full object-contain" />
          </div>
          <h2 className="font-semibold">`Javascript`</h2>
        </div>
        <div className="space-y-1 w-[35%] min-w-[40%] md:w-1/7 md:min-w-max">
          <div className="w-full p-2 border border-gray-500 rounded">
            <img src={git} alt="" className="h-20 w-full object-contain" />
          </div>
          <h2 className="font-semibold">`Git`</h2>
        </div>
        <div className="space-y-1 w-[35%] min-w-[40%] md:w-1/7 md:min-w-max">
          <div className="w-full p-2 border border-gray-500 rounded">
            <img src={github} alt="" className="h-20 w-full object-contain" />
          </div>
          <h2 className="font-semibold">`Github`</h2>
        </div>
        <div className="space-y-1 w-[35%] min-w-[40%] md:w-1/7 md:min-w-max">
          <div className="w-full p-2 border border-gray-500 rounded">
            <img src={figma} alt="" className="h-20 w-full object-contain" />
          </div>
          <h2 className="font-semibold">`Figma`</h2>
        </div>
        <div className="space-y-1 w-[35%] min-w-[40%] md:w-1/7 md:min-w-max">
          <div className="w-full p-2 border border-gray-500 rounded">
            <img src={python} alt="" className="h-20 w-full object-contain" />
          </div>
          <h2 className="font-semibold">`Python`</h2>
        </div>
      </div>
    </div>
  );
}

export default Skills;
