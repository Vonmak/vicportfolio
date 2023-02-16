import { useEffect, useState } from "react";
import Repos from "./Repos";
import { Dna } from "react-loader-spinner";
import moment from "moment";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdOutlineFollowTheSigns, MdLocationOn } from "react-icons/md";

function Github() {
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const username = "Vonmak";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const reposRes = await fetch(
          `https://api.github.com/users/${username}/repos?sort=created&direction=desc`
        );
        const reposData = await reposRes.json();
        console.log(reposData);
        setRepos(reposData);

        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userRes.json();

        setUser(userData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [username]);

  if (loading) {
    return <div>{Dna}Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="rounded m-3 p-4 shadow flex justify-between bg-gray-900 text-white">
        <div className="flex">
          <img
            src={user.avatar_url}
            alt=""
            className="rounded-full w-16 h-16 mx-2"
          />
          <div className="flex flex-col justify-center ">
            <div>{user.login}</div>
            <div>Joined: {moment(user.created_at).format("MMMM Do YYYY")}</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex pr-2">
            <BsFillPeopleFill fontSize={20} className='pr-1'/> 
            Followers {user.followers}
          </div>
          |
          <div className="flex pl-2">
            <MdOutlineFollowTheSigns fontSize={20} className='pr-1' /> Following {user.following}
          </div>
        </div>
      </div>
      <div className="border rounded text-white mb-10 p-2 bg-gray-800">
        <div className="m-3 p-4 flex justify-between">
          <div>
            <p>Profile Bio</p>
            <p>{user.bio}</p>
          </div>
          <div>{user.public_repos} Repositories</div>
          <div className="flex pl-1">
            <MdLocationOn fontSize={20} />
            {user.location}
          </div>
        </div>
        <Repos repos={repos} />
      </div>
    </div>
  );
}

export default Github;
