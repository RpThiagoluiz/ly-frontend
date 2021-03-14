import { createContext, useState, useContext, ReactNode } from "react";
import axios from "axios";

interface GitHubContext {
  gitUser: string;
  dataUser: User;
  repositories: Repository[];
  followersUser: Followers[];
  followingUser: Following[];
  isLoading: Boolean;
  error: Error;
  handleUserCall(): void;
  handleGitUser(name: string): void;
}

interface HandleUserCallProps {
  children: ReactNode;
}

interface User {
  login: string;
  name: string;
  email: string;
  location: string;
  company: string;
  bio: string;
  avatar_url: string;
  followers_url: string;
  following_url: string;
  organizations_url: string;
  starred_url: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  //Not Requeired for test!
  html_url: string;
  repos_url: string;
}

interface Repository {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
}

interface Followers {
  login: string;
  avatar_url: string;
  url: string;
}

interface Following {
  login: string;
  avatar_url: string;
  url: string;
}

interface Error {
  show: boolean;
  message: string;
}

const GitHubContext = createContext<GitHubContext>({} as GitHubContext);

const GitHubProvider = ({ children }: HandleUserCallProps) => {
  const [gitUser, setGitUser] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [followersUser, setFollowersUser] = useState<Followers[]>([]);
  const [followingUser, setFollowingUser] = useState<Following[]>([]);

  const [dataUser, setDataUser] = useState<User>({
    login: "",
    name: "",
    email: "",
    location: "",
    company: "",
    bio: "",
    avatar_url: "",
    followers_url: "",
    following_url: "",
    organizations_url: "",
    starred_url: "",
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    //Not Requeired for test,
    html_url: "",
    repos_url: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, message: "" });

  const handleGitUser = (name: string) => {
    setGitUser(name);
  };

  //Error!
  const toggleError = (show = false, message = "") => {
    setError({ show, message });
  };

  const handleUserCall = async () => {
    setIsLoading(true);
    const userApi = `https://api.github.com/users/${gitUser}`;
    const repoUserApi = `https://api.github.com/users/${gitUser}/repos`;
    const followersApi = `https://api.github.com/users/${gitUser}/followers`;
    const followingApi = `https://api.github.com/users/${gitUser}/following`;

    try {
      const reponse = await axios.get<User>(userApi);
      setDataUser(reponse.data);
      setIsLoading(false);
    } catch (err) {
      toggleError(true, "Usário Inexistente!");
      console.log(err, error);
      setIsLoading(false);
      return;
    }

    const getRepoUserInfo = axios.get<Repository[]>(repoUserApi);
    const getFollowersInfo = axios.get<Followers[]>(followersApi);
    const getFollowingApi = axios.get<Following[]>(followingApi);

    try {
      const [repoData, followerData, followingData] = await Promise.all([
        getRepoUserInfo,
        getFollowersInfo,
        getFollowingApi,
      ]);
      setRepositories(repoData.data);
      setFollowersUser(followerData.data);
      setFollowingUser(followingData.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <GitHubContext.Provider
      value={{
        handleUserCall,
        handleGitUser,
        dataUser,
        gitUser,
        repositories,
        followersUser,
        followingUser,
        isLoading,
        error,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

const useGitHub = () => {
  const context = useContext(GitHubContext);

  return context;
};

export { GitHubProvider, useGitHub };
