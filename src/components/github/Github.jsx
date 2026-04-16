import { useEffect, useState } from "react";
import Repos from "./Repos";
import { Dna } from "react-loader-spinner";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdOutlineFollowTheSigns, MdLocationOn } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const USERNAME = process.env.REACT_APP_GITHUB_USERNAME || "Vonmak";

function formatJoinDate(iso) {
  try {
    return new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(new Date(iso));
  } catch {
    return "";
  }
}

function Github() {
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [reposRes, userRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}/repos?sort=created&direction=desc`),
          fetch(`https://api.github.com/users/${USERNAME}`),
        ]);
        if (!reposRes.ok) throw new Error(`Repos: ${reposRes.status} ${reposRes.statusText}`);
        if (!userRes.ok) throw new Error(`User: ${userRes.status} ${userRes.statusText}`);
        const [reposData, userData] = await Promise.all([reposRes.json(), userRes.json()]);
        setRepos(Array.isArray(reposData) ? reposData : []);
        setUser(userData);
      } catch (err) {
        setError(err.message || "Failed to load GitHub data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-3">
        <Dna visible height="60" width="60" ariaLabel="loading GitHub data" />
        <p className="text-sm text-slate-400">Loading GitHub data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-sm">
        <p className="text-red-400 font-medium">Could not load GitHub data</p>
        <p className="text-slate-400 mt-1">{error}</p>
      </div>
    );
  }

  return (
    <div>
      {/* Profile card */}
      <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 mb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div className="flex items-center gap-4">
          <img src={user.avatar_url} alt={`${user.login} avatar`}
            className="rounded-full w-14 h-14 border-2 border-sky-400 shadow flex-shrink-0" />
          <div>
            <div className="flex items-center gap-2">
              <FaGithub className="text-slate-500 dark:text-slate-400" />
              <span className="font-bold text-slate-900 dark:text-white text-sm">{user.login}</span>
            </div>
            {user.bio && <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 max-w-xs">{user.bio}</p>}
            {user.created_at && <p className="text-xs text-slate-400 mt-0.5">Joined {formatJoinDate(user.created_at)}</p>}
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-xs text-slate-600 dark:text-slate-300">
          <span className="flex items-center gap-1"><BsFillPeopleFill className="text-sky-500" /><b className="text-slate-800 dark:text-white">{user.followers}</b> Followers</span>
          <span className="flex items-center gap-1"><MdOutlineFollowTheSigns className="text-sky-500" /><b className="text-slate-800 dark:text-white">{user.following}</b> Following</span>
          {user.location && <span className="flex items-center gap-1"><MdLocationOn className="text-sky-500" />{user.location}</span>}
          <span><b className="text-slate-800 dark:text-white">{user.public_repos}</b> Repos</span>
        </div>
      </div>

      {repos.length > 0
        ? <Repos repos={repos} />
        : <p className="text-center text-sm text-slate-400 py-6">No public repositories found.</p>
      }
    </div>
  );
}

export default Github;
