import {
  Container,
  Content,
  DetailsContent,
  StarIcon,
  LockIcon,
  UnlockIcon,
} from "./styles";

interface RepoDataProps {
  repository: {
    name: string;
    description: string;
    stargazers_count: number;
    //Not required!
    html_url: string;
  };
}

const Repo = ({ repository }: RepoDataProps) => (
  <Container>
    <Content>
      <h2>{repository.name}</h2>
      <p>{repository.description}</p>
    </Content>
    <DetailsContent>
      <div>
        <StarIcon />
        <span>{repository.stargazers_count}</span>
      </div>

      <div>
        <UnlockIcon />
        <LockIcon />
      </div>
    </DetailsContent>
  </Container>
);
export default Repo;
