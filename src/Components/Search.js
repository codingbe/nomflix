import styled from "styled-components";

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
    <Form onSubmit={handleSubmit}>
      <Input placeholder="Search Movies or TV..." onChange={updateTerm} />
    </Form>
  </Container>
);

export default Search;
