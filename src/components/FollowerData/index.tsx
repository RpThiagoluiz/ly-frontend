//styles
import {
  Container,
  Header,
  Content,
  SaveIcon,
  UserInfo,
  UserFollowInfo,
  UserBioInfo,
} from "./styles";

interface FollowerInfosProps {
  followerInfos: {
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

const FollowerData = ({ followerInfos }: FollowerInfosProps) => {
  return (
    <Container>
      <Header>
        <span># {followerInfos.login}</span>
        <img src={followerInfos.avatar_url} alt="Avatar pessoal" />
        <div>
          <small>Salvar</small>
          <SaveIcon />
        </div>
      </Header>
      <Content>
        <UserInfo>
          <h2>{followerInfos.name}</h2>
          <span>{followerInfos?.email ?? "Email: Nao Informado"}</span>
          <span>{followerInfos?.location ?? "Local Nao infromado"}</span>
        </UserInfo>
        <UserFollowInfo>
          <div>
            <h1>{followerInfos.followers}</h1>
            <span>Seguidores</span>
          </div>
          <div>
            <h1>{followerInfos.following}</h1>
            <span>Seguindo</span>
          </div>
          <div>
            <h1>{followerInfos.public_repos}</h1>
            <span>Repos</span>
          </div>
        </UserFollowInfo>
        <UserBioInfo>
          <h2>BIO</h2>
          <p>{followerInfos.bio}</p>
        </UserBioInfo>
      </Content>
    </Container>
  );
};
export default FollowerData;
