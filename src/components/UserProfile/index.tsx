import { useAuth } from "../../hook/auth";

//styles
import {
  Container,
  Header,
  Content,
  ExitIcon,
  UserInfo,
  UserFollowInfo,
  UserBioInfo,
} from "./styles";

interface UserInfoProps {
  user: {
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
  };
}

const UserProfile = ({ user }: UserInfoProps) => {
  const { singOut } = useAuth();
  return (
    <Container>
      <Header>
        <span># {user.login}</span>
        <img src={user.avatar_url} alt="Avatar pessoal" />
        <div>
          <small>Sair</small>
          <ExitIcon onClick={singOut} />
        </div>
      </Header>
      <Content>
        <UserInfo>
          <h2>{user.name}</h2>
          <span>{user?.email ?? "Email: Nao Informado"}</span>
          <span>{user?.location ?? "Local Nao infromado"}</span>
        </UserInfo>
        <UserFollowInfo>
          <div>
            <h1>{user.followers}</h1>
            <span>Seguidores</span>
          </div>
          <div>
            <h1>{user.following}</h1>
            <span>Seguindo</span>
          </div>
          <div>
            <h1>{user.public_repos}</h1>
            <span>Repos</span>
          </div>
        </UserFollowInfo>
        <UserBioInfo>
          <h2>BIO</h2>
          <p>{user.bio}</p>
        </UserBioInfo>
      </Content>
    </Container>
  );
};
export default UserProfile;
