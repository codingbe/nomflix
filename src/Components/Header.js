import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #2d2827;
  z-index: 10;
`;
const List = styled.ul`
  display: flex;
`;
const Li = styled.li`
  width: 100px;
  border-bottom: 3px solid ${(props) => (props.current ? "#0875f9" : "transparent")};
  transition: border-bottom 0.5s linear;
  height: 63px;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
const Slink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-weight: 600;
`;

const Header = ({ location: { pathname } }) => (
  <Container>
    <List>
      <Li current={pathname === "/"}>
        <Slink to="/">Movies</Slink>
      </Li>
      <Li current={pathname === "/tv"}>
        <Slink to="/tv">TV</Slink>
      </Li>
      <Li current={pathname === "/search"}>
        <Slink to="/search">Search</Slink>
      </Li>
    </List>
  </Container>
);

export default withRouter(Header);
