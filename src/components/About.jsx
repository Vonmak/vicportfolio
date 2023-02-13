import { Link } from "react-router-dom";
// import about from "../assets/about.svg";

function About() {
  return (
    <div className="container mx-auto pt-20">
      <div className="flex flex-col items-center p-10">
        <h2 className="text-3xl font-bold mb-5">About Me</h2>
        <p className="text-lg  mb-10">
          I am a hands-on software developer with several years of experience
          and a passion for creating exceptional things on the web. I bring a
          wealth of knowledge and expertise to every project I work on, and am
          always eager to learn new technologies and tackle new challenges. I am
          a hardworking, self-motivated individual who is ready to work in a
          challenging environment and learn new skills to improve my
          performance.
        </p>
        <p className="text-lg mb-10">
          As a software developer, I am eager to collaborate with tech-oriented
          stakeholders and clients to find the best solutions. I provide
          reliable, actionable, and clean code that clearly addresses the
          problems at hand.
        </p>
        <p className="text-lg mb-10">
          I am a proud alumnus of{" "}
          <Link to="https://moringaschool.com/" className="text-teal-400">
            Moringa School
          </Link>
          , where I completed a short course in{" "}
          <Link
            to="https://moringaschool.com/courses/software-engineering-course-online/"
            className="text-teal-400"
          >
            Software Development.
          </Link>
          I believe that my drive and determination will enable me to make a
          valuable contribution to any team.
        </p>

        <p className="text-lg mb-8">
          In my free time, I enjoy reading books, hiking, and playing video
          games.
        </p>
      </div>
    </div>
  );
}

export default About;
