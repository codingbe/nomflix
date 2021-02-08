import { HashRouter, Link, Route, withRouter } from "react-router-dom";
import Info from "./Info";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  margin-bottom: 5px;
`;
const Li = styled.li`
  height: 40px;
  margin-right: 5px;
  border-radius: 2px;
  background-color: ${(props) => (props.current ? "rgba(210,210,210,0.6)" : "transparent")};
  padding: 0px 10px;
`;
const Slink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  font-size: 18px;
  font-weight: 600;
`;

const InfoHeader = ({ videos, companies, countries, creators, location: { pathname }, match: { url } }) => (
  <>
    <Ul>
      {creators && creators.length > 0 ? (
        <Li current={pathname === `${url}/creator`}>
          <Slink to={`${url}/creator`}>Creator</Slink>
        </Li>
      ) : null}
      {companies && companies.length > 0 ? (
        <Li current={pathname === `${url}/companies`}>
          <Slink to={`${url}/companies`}>Companies</Slink>
        </Li>
      ) : null}
      {countries && countries.length > 0 ? (
        <Li current={pathname === `${url}/countries`}>
          <Slink to={`${url}/countries`}>Countries</Slink>
        </Li>
      ) : null}
      {videos && videos.length > 0 ? (
        <Li current={pathname === `${url}/videos`}>
          <Slink to={`${url}/videos`}>Videos</Slink>
        </Li>
      ) : null}
    </Ul>

    <HashRouter>
      <Route path={`${url}/creator`} render={() => <Info creators={creators} />} />
      <Route path={`${url}/companies`} render={() => <Info companies={companies} />} />
      <Route path={`${url}/countries`} render={() => <Info countries={countries} />} />
      <Route path={`${url}/videos`} render={() => <Info videos={videos} />} />
    </HashRouter>
  </>
);

export default withRouter(InfoHeader);
