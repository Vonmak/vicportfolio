import html from "../assets/html.png";
import bootstrap from "../assets/bootstrap.png";
import js from "../assets/js.png";
import figma from "../assets/figma.png";
import css from "../assets/css.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import python from "../assets/python.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import vue from "../assets/vue.png";
import php from "../assets/php.png";
import laravel from "../assets/laravel.png";
import flask from "../assets/flask.png";
import django from "../assets/django.png";

function Skills() {
  return (
      <>
        <p className="text-lg text-center">
          During my years of professional development, I've been able to gain
          professional and practical knowledge of the following programming
          languages, frameworks and tools.
        </p>

        <div className="grid gap-4 grid-cols-4 md:grid-cols-8 my-8 text-center">
          <div className="space-y-1 w-[35%] min-w-[40%] md:w-1/7 md:min-w-max">
            <div className=" rounded">
              <img src={html} alt="HTML logo" className="h-20 w-full object-contain"/>
            </div>
            <h2 className="font-semibold">`HTML`</h2>
          </div>
          <div className="space-y-1 w-[35%] min-w-[40%] md:w-1/7 md:min-w-max">
            <div className=" rounded">
              <img src={css} alt="CSS logo" className="h-20 w-full object-contain"/>
            </div>
            <h2 className="font-semibold">`CSS`</h2>
          </div>
          <div className="space-y-1 w-[35%] min-w-[40%] md:w-1/7 md:min-w-max">
            <div className=" rounded">
              <img
                  src={bootstrap}
                  alt="Bootstrap logo"
                  className="h-20 w-full object-contain"
              />
            </div>
            <h2 className="font-semibold">`Bootstrap`</h2>
          </div>
          <div className="space-y-1 w-[35%] min-w-[40%] md:w-1/7 md:min-w-max">
            <div className=" rounded">
              <img src={tailwind} alt="Tailwind CSS logo" className="h-20 w-full object-contain"/>
            </div>
            <h2 className="font-semibold">`Tailwind`</h2>
          </div>
          <div className="space-y-1 w-[35%] min-w-[40%] md:w-1/7 md:min-w-max">
            <div className=" rounded">
              <img src={js} alt="JavaScript logo" className="h-20 w-full object-contain"/>
            </div>
            <h2 className="font-semibold">`Javascript`</h2>
          </div>
          <div className="space-y-1 w-[35%] min-w-[40%] md:w-1/7 md:min-w-max">
            <div className=" rounded">
              <img src={react} alt="React logo" className="h-20 w-full object-contain"/>
            </div>
            <h2 className="font-semibold">`React`</h2>
          </div>
          <div className="space-y-1 w-[35%] min-w-[40%] md:w-1/7 md:min-w-max">
            <div className=" rounded">
              <img src={vue} alt="Vue logo" className="h-20 w-full object-contain"/>
            </div>
            <h2 className="font-semibold">`Vue`</h2>
          </div>
          <div className="space-y-1 w-[35%] min-w-[40%] md:w-1/7 md:min-w-max">
            <div className=" rounded">
              <img src={python} alt="Python logo" className="h-20 w-full object-contain"/>
            </div>
            <h2 className="font-semibold">`Python`</h2>
          </div>
          <div className="space-y-1 w-[35%] min-w-[40%] md:w-1/7 md:min-w-max">
            <div className=" rounded">
              <img src={flask} alt="Flask logo" className="h-20 w-full object-contain"/>
            </div>
            <h2 className="font-semibold">`Flask`</h2>
          </div>
          <div className="space-y-1 w-[35%] min-w-[40%] md:w-1/7 md:min-w-max">
            <div className=" rounded">
              <img src={django} alt="Django logo" className="h-20 w-full object-contain"/>
            </div>
            <h2 className="font-semibold">`Django`</h2>
          </div>
          <div className="space-y-1 w-[35%] min-w-[40%] md:w-1/7 md:min-w-max">
            <div className=" rounded">
              <img src={php} alt="PHP logo" className="h-20 w-full object-contain"/>
            </div>
            <h2 className="font-semibold">`PHP`</h2>
          </div>
          <div className="space-y-1 w-[35%] min-w-[40%] md:w-1/7 md:min-w-max">
            <div className=" rounded">
              <img src={laravel} alt="Laravel logo" className="h-20 w-full object-contain"/>
            </div>
            <h2 className="font-semibold">`Laravel`</h2>
          </div>

          <div className="space-y-1 w-[35%] min-w-[40%] md:w-1/7 md:min-w-max">
            <div className=" rounded">
              <img src={git} alt="Git logo" className="h-20 w-full object-contain"/>
            </div>
            <h2 className="font-semibold">`Git`</h2>
          </div>
          <div className="space-y-1 w-[35%] min-w-[40%] md:w-1/7 md:min-w-max">
            <div className=" rounded">
              <img src={github} alt="GitHub logo" className="h-20 w-full object-contain"/>
            </div>
            <h2 className="font-semibold">`Github`</h2>
          </div>
          <div className="space-y-1 w-[35%] min-w-[40%] md:w-1/7 md:min-w-max">
            <div className=" rounded">
              <img src={figma} alt="Figma logo" className="h-20 w-full object-contain"/>
            </div>
            <h2 className="font-semibold">`Figma`</h2>
          </div>
        </div>
      </>
  );
}

export default Skills;