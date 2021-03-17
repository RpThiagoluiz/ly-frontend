import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { api } from "../../services/api";

interface GitHubFollowContext {
  gitUserFollow: string;
  dataFollow: User;
  isLoading: Boolean;
  followData(name: string): void;
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

const GitHubFollowContext = createContext<GitHubFollowContext>(
  {} as GitHubFollowContext
);

const GitHubFollowProvider = ({ children }: HandleUserCallProps) => {
  const [gitUserFollow, setGitUserFollow] = useState("");

  const [dataFollow, setDataFollow] = useState<User>({
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

  const followData = (name: string) => {
    setGitUserFollow(name);
  };

  useEffect(() => {
    async function getFollowInfo() {
      setIsLoading(true);
      try {
        await api.get<User>(gitUserFollow).then((response) => {
          setDataFollow(response.data);
          setIsLoading(false);
        });
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
    getFollowInfo();
  }, [gitUserFollow]);

  return (
    <GitHubFollowContext.Provider
      value={{
        followData,
        dataFollow,
        gitUserFollow,
        isLoading,
      }}
    >
      {children}
    </GitHubFollowContext.Provider>
  );
};

const useGitHubFollow = () => {
  const context = useContext(GitHubFollowContext);

  return context;
};

export { GitHubFollowProvider, useGitHubFollow };
