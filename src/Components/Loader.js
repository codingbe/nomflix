import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
`;

const Loader = () => (
  <Container>
    <Title>Loading...</Title>
  </Container>
);

export default Loader;
