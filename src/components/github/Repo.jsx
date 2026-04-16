import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";

function Repo({ repo }) {
  return (
    repo.description && (
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 flex flex-col gap-2 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xs font-bold text-slate-900 dark:text-white truncate">{repo.name}</h3>
          {repo.visibility && (
            <span className="flex-shrink-0 text-xs font-medium px-2 py-0.5 rounded-full bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-800">
              {repo.visibility}
            </span>
          )}
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed flex-1">{repo.description}</p>
        <div className="flex items-center justify-between gap-2 mt-auto">
          <div className="flex items-center gap-3 text-xs text-slate-400">
            {repo.language && (
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-sky-400 inline-block" />{repo.language}
              </span>
            )}
            <span className="flex items-center gap-0.5"><BiGitRepoForked size={12} />{repo.forks}</span>
            <span className="flex items-center gap-0.5"><AiFillStar size={12} className="text-amber-400" />{repo.stargazers_count}</span>
          </div>
          {repo.homepage && (
            <a href={repo.homepage} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-sky-500 hover:underline">
              <FaExternalLinkAlt size={9} /> Live
            </a>
          )}
        </div>
      </div>
    )
  );
}

export default Repo;
