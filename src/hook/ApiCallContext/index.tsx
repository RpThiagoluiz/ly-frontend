import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";
import { errorMonitor } from "node:events";

interface GitHubContext {
  gitUser: string;
  dataUser: User;
  repositories: Repository[];
  followersUser: Followers[];
  isLoading: Boolean;
  error: Error;
  maxRequestsApiCall: number;
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

interface Error {
  show: boolean;
  message: string;
}

const GitHubContext = createContext<GitHubContext>({} as GitHubContext);

const GitHubProvider = ({ children }: HandleUserCallProps) => {
  const [gitUser, setGitUser] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [followersUser, setFollowersUser] = useState<Followers[]>([]);

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
  const [maxRequestsApiCall, setMaxRequestsApiCall] = useState(0);

  const handleGitUser = (name: string) => {
    setGitUser(name);
  };

  const handleUserCall = async () => {
    toggleError();
    setIsLoading(true);
    const userApi = `https://api.github.com/users/${gitUser}`;
    const repoUserApi = `https://api.github.com/users/${gitUser}/repos`;
    const followersApi = `https://api.github.com/users/${gitUser}/followers`;

    try {
      const reponse = await axios.get<User>(userApi);
      setDataUser(reponse.data);
    } catch (err) {
      console.log(err);
      return;
    }

    const getRepoUserInfo = axios.get<Repository[]>(repoUserApi);
    const getFollowersInfo = axios.get<Followers[]>(followersApi);

    try {
      const [repoData, followerData] = await Promise.all([
        getRepoUserInfo,
        getFollowersInfo,
      ]);
      setRepositories(repoData.data);
      setFollowersUser(followerData.data);
    } catch (err) {
      console.log(err);
    }
  };

  //Github Have a max request for hour. If u dont use token!
  const maxGitRequets = () => {
    axios
      .get("https://api.github.com/rate_limit")
      .then(({ data }) => {
        let {
          rate: { remaing },
        } = data;
        setMaxRequestsApiCall(remaing);
        if (remaing === 0) {
          toggleError(true, "Número máximo de req/h excedido!");
        }
      })
      .catch((err) => console.log(err));
  };

  const toggleError = (show = false, message = "") => {
    setError({ show, message });
  };

  useEffect(() => {
    maxGitRequets();
  }, []);

  return (
    <GitHubContext.Provider
      value={{
        handleUserCall,
        handleGitUser,
        dataUser,
        gitUser,
        repositories,
        followersUser,
        isLoading,
        error,
        maxRequestsApiCall,
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
