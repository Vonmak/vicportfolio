import Works from "./Works";
import Github from "./github/Github";

function Projects() {
  return (
    <div className="pt-24 px-4 lg:px-24">
      <h2 className="text-3xl font-bold mb-5">Featured Works</h2>
      <Works />
      <Github />
    </div>
  );
}

export default Projects;
