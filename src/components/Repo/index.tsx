import {
  Container,
  Content,
  DetailsContent,
  StarIcon,
  LockIcon,
  UnlockIcon,
} from "./styles";

interface RepoProps {
  name: string;
  description: string;
  stars?: number;
}

const Repo = () => (
  <Container>
    <Content>
      <h2>Repo repo - react repo Alfa</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type Lorem Ipsum is simply dummy text of the
        printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type Lorem Ipsum is simply
        dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type Lorem Ipsum is simply dummy text of the
        printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type Lorem Ipsum is simply
        dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type Lorem Ipsum is simply dummy text of the
        printing and typesetting industry.
      </p>
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
