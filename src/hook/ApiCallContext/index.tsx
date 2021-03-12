import { createContext, useState, useContext, ReactNode } from "react";
import axios from "axios";

interface UserContext {
  gitUser: string;
  dataUser: User;
  repositories: Repository[];
  followersUser: Followers[];
  handleUserCall(): void;
  handleGitUser(name: string): void;
}

interface HandleUserCallProps {
  children: ReactNode;
}

interface User {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  repos_url: string;
  location: string;
  email: string;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
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

const UserContext = createContext<UserContext>({} as UserContext);

const UserProvider = ({ children }: HandleUserCallProps) => {
  const [gitUser, setGitUser] = useState("RpThiagoluiz");
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [followersUser, setFollowersUser] = useState<Followers[]>([]);

  const [dataUser, setDataUser] = useState<User>({
    login: "",
    name: "",
    avatar_url: "",
    html_url: "",
    repos_url: "",
    location: "",
    email: "",
    bio: "",
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
  });

  const handleGitUser = (name: string) => {
    setGitUser(name);
  };

  const handleUserCall = () => {
    //MultiCalls - axios doc
    const fetchData = () => {
      const userApi = `https://api.github.com/users/${gitUser}`;
      const repoUserApi = `https://api.github.com/users/${gitUser}/repos`;
      const followersApi = `https://api.github.com/users/${gitUser}/followers`;

      const getUserInfo = axios.get(userApi);
      const getRepoUserInfo = axios.get(repoUserApi);
      const getFollowersInfo = axios.get(followersApi);

      axios
        .all([getUserInfo, getRepoUserInfo, getFollowersInfo])
        .then(
          axios.spread((...allData) => {
            const userData = allData[0].data;
            const reposData = allData[1].data;
            const followerData = allData[2].data;
            setDataUser(userData);
            setRepositories(reposData);
            setFollowersUser(followerData);
          })
        )
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  };

  return (
    <UserContext.Provider
      value={{
        handleUserCall,
        handleGitUser,
        dataUser,
        gitUser,
        repositories,
        followersUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);

  return context;
};

export { UserProvider, useUser };