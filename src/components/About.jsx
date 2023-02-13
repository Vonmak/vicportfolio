import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container mx-auto pt-20">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-5">About Me</h1>
        <p className="text-lg  mb-10">
          Hi, I'm a software developer with a passion for building amazing
          things on the web. With several years of experience, I have honed my
          skills and now bring a wealth of knowledge and expertise to every
          project I work on.
        </p>
        <p className="text-lg  mb-10">
          I'm always eager to learn new technologies and take on new challenges,
          and I believe that my drive and determination will allow me to make a
          valuable contribution to any team.
        </p>
        <p className="text-lg ">
          When I'm not coding, you can usually find me reading a book, hiking,
          or playing video games.
        </p>
        <p className="text-lg  mb-10">
          I am an Alumni of
          <Link to="https://moringaschool.com/">Moringa School</Link> pursuing a
          short course in
          <Link to="https://moringaschool.com/courses/software-engineering-course-online/">
            Software Development.
          </Link>
        </p>
        <p className="text-lg  mb-10">
          I'm a hardworking, self-motivated individual ready to work in a
          challenging environment and learn tangible skills in pursuit of
          bettering my output.
        </p>
        <p className="text-lg  mb-10">
          Hands-on Software Developer, eager to collaborate with tech-oriented
          stakeholders and also clients to find optimal solutions. Provides
          reliably, actionable and clean code, that has clarity on problem
          tackling.
        </p>
      </div>
    </div>
  );
}

export default About;
