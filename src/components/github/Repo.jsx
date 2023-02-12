import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";

function Repo({ repo }) {
  return (
    repo.description && (
      <div className="bg-white p-4 rounded shadow mb-6 text-cyan-900">
        <h3 className="text-lg font-bold">{repo.name}</h3>
        <p className="text-gray-700">{repo.description}</p>
        <div className="flex justify-around items-center mt-3">
          <div className="flex">
            <span className="flex">
              <BiGitRepoForked fontSize={20} />
              {repo.forks}
            </span>
            <span className="flex ">
              <AiFillStar fontSize={20} />
              {repo.stargazers_count}
            </span>
          </div>
          {repo.language && (
            <div className="rounded shadow p-1"> {repo.language}</div>
          )}

          <div className="rounded shadow p-1 bg-cyan-900 text-teal-400">
            {repo.visibility}
          </div>
        </div>
      </div>
    )
  );
}

export default Repo;
