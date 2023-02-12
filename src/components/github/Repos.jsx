import Repo from "./Repo";

function Repos({ repos }) {
  return (
    <div className="grid grid-cols-1 mt-10 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo) => (
        <Repo key={repo.id} repo={repo} />
      ))}
    </div>
  );
}

export default Repos;
