import { useGitHub } from "../../hook/ApiCallContext";
//styles
import { Container, Content, RightArrowIcon, NoFollowIcon } from "./styles";
const NoFollower = () => {
  const { dataUser } = useGitHub();
  return (
    <Container>
      <NoFollowIcon />
      <Content>
        <p>
          O usuário {dataUser.login}, não possuí Seguidores, seja o primeiro!
        </p>
        <a href={dataUser.html_url} target="_blank" rel="noreferrer noopener">
          <RightArrowIcon />
        </a>
      </Content>
    </Container>
  );
};
export default NoFollower;
