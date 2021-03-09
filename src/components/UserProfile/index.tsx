import {
  Container,
  Header,
  Content,
  ExitIcon,
  UserInfo,
  UserFollowInfo,
  UserBioInfo,
} from "./styles";

const UserProfile = () => (
  <Container>
    <Header>
      <span>#NomeNoGithub</span>
      <img src="https://github.com/RpThiagoluiz.png" alt="Avatar pessoal" />
      <div>
        <small>Sair</small>
        <ExitIcon />
      </div>
    </Header>
    <Content>
      <UserInfo>
        <h2>Nome SobreNome</h2>
        <span>Email@exemplo.com</span>
        <span>Cidade/Estado</span>
      </UserInfo>
      <UserFollowInfo>
        <div>
          <h1>320</h1>
          <span>Seguidores</span>
        </div>
        <div>
          <h1>120</h1>
          <span>Seguindo</span>
        </div>
        <div>
          <h1>10</h1>
          <span>Repos</span>
        </div>
      </UserFollowInfo>
      <UserBioInfo>
        <h2>BIO</h2>
        <p>
          t is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </UserBioInfo>
    </Content>
  </Container>
);
export default UserProfile;
