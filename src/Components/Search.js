import styled from "styled-components";
import { Helmet } from "react-helmet";

const Container = styled.div`
  margin-bottom: 20px;
  margin-left: 10px;
`;
const Form = styled.form``;
const Input = styled.input`
  all: unset;
  width: 250px;
  height: 40px;
  font-size: 24px;
`;

const Search = ({ handleSubmit, updateTerm }) => (
  <Container>
    <Helmet>
      <title>Search | Nomflix</title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      <Input placeholder="Search Movies or TV..." onChange={updateTerm} />
    </Form>
  </Container>
);

export default Search;
