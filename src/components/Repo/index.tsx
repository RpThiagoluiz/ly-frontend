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
    html_url: string; //Star to
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
        <span>32</span>
      </div>

      <div>
        <LockIcon />
        <UnlockIcon />
      </div>
    </DetailsContent>
  </Container>
);
export default Repo;
