import styled from "styled-components";
import PropTypes from "prop-types";
import InfoHeader from "./InfoHeader";
import { Helmet } from "react-helmet";

const Container = styled.div`
  position: relative;
`;

const Background = styled.div`
  background-image: url(${({ back }) => back});
  height: 92.5vh;
  background-position: center center;
  background-size: cover;
  opacity: 0.4;
`;

const ContainerColumn = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  height: 100%;
  align-items: center;
  width: 100%;
`;

const Column = styled.div`
  height: 90%;
  padding: 10px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Poster = styled.img`
  height: 90%;
  margin-left: 10px;
`;

const Ul = styled.ul`
  display: flex;
`;
const Li = styled.li`
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

const Runtime = styled.span``;

const Content = styled.div`
  display: flex;
  margin-bottom: 10px;
  height: 30px;
  align-items: center;
`;

const Release = styled.span``;

const Overview = styled.p`
  margin-bottom: 10px;
  line-height: 1.2;
`;

const OriginContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
`;

const OriginSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 40px;
  background-color: rgba(20, 20, 20, 0.7);
  border-radius: 2px;
  margin-right: 5px;
`;

const ImdbSpan = styled.a`
  background-color: rgba(226, 182, 22, 0.9);
  border-radius: 2px;
  padding: 3px;
  margin-right: 5px;
`;

const HomeSpan = styled.a`
  background-color: rgba(226, 182, 22, 0.9);
  border-radius: 2px;
  padding: 3px;
`;

const Detail = ({
  results: {
    backdrop_path,
    poster_path,
    release_date,
    videos: { results },
    genres,
    production_companies,
    production_countries,
    imdb_id,
    original_language,
    origin_country,
    title,
    name,
    overview,
    runtime,
    episode_run_time,
    first_air_date,
    created_by,
    homepage,
    id,
  },
}) => (
  <Container>
    <Helmet>
      <title>{title ? `${title} | Nomflix` : `${name} | Nomflix`}</title>
    </Helmet>
    <Background
      back={backdrop_path ? `${process.env.REACT_APP_IMAGE_URL}${backdrop_path}` : process.env.REACT_APP_404_URL}
    ></Background>
    <ContainerColumn>
      <Poster src={poster_path ? `${process.env.REACT_APP_IMAGE_URL}${poster_path}` : process.env.REACT_APP_404_URL} />
      <Column>
        <Title>{title ? title : name}</Title>
        <Content>
          {release_date ? (
            <Release>{release_date.slice(0, 4)}</Release>
          ) : first_air_date ? (
            <Release>{first_air_date.slice(0, 4)}</Release>
          ) : null}
          {runtime ? (
            <Runtime>🔵{runtime}분</Runtime>
          ) : episode_run_time && episode_run_time.length > 0 ? (
            <Runtime>🔵{episode_run_time[0]}분</Runtime>
          ) : null}
          {genres && genres.length > 0 ? (
            <Ul>
              🔵
              {genres.map((genre) => (
                <Li key={genre.name}>{genre.name}</Li>
              ))}
            </Ul>
          ) : null}
          {imdb_id && imdb_id !== null && homepage && homepage !== "" ? (
            <>
              🔵
              <ImdbSpan href={`${process.env.REACT_APP_IMDB_URL}/${imdb_id}`}>IMDB</ImdbSpan>
              <HomeSpan href={homepage} target="_blank">
                HOME
              </HomeSpan>
            </>
          ) : imdb_id && imdb_id !== null ? (
            <>
              🔵
              <ImdbSpan href={`${process.env.REACT_APP_IMDB_URL}/${imdb_id}`} target="_blank">
                IMDB
              </ImdbSpan>
            </>
          ) : homepage && homepage !== "" ? (
            <>
              🔵
              <HomeSpan href={homepage} target="_blank">
                HOME
              </HomeSpan>
            </>
          ) : null}
        </Content>
        {origin_country && origin_country.length > 0 ? (
          <OriginContainer>
            {origin_country.map((country) => (
              <OriginSpan key={country}>{country}</OriginSpan>
            ))}
            {original_language ? <OriginSpan>{original_language}</OriginSpan> : null}
          </OriginContainer>
        ) : original_language ? (
          <OriginContainer>
            <OriginSpan>{original_language}</OriginSpan>
          </OriginContainer>
        ) : null}
        <Overview>{overview}</Overview>
        <InfoHeader
          videos={results}
          companies={production_companies}
          countries={production_countries}
          creators={created_by}
        />
      </Column>
    </ContainerColumn>
  </Container>
);

Detail.propTypes = {
  results: PropTypes.shape({
    backdrop_path: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    results: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        name: PropTypes.string,
      })
    ),
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    production_companies: PropTypes.arrayOf(
      PropTypes.shape({
        logo_path: PropTypes.string,
        name: PropTypes.string,
      })
    ),
    production_countries: PropTypes.arrayOf(
      PropTypes.shape({
        iso_3166_1: PropTypes.string,
      })
    ),
    imdb_id: PropTypes.string,
    original_language: PropTypes.string,
    origin_country: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    name: PropTypes.string,
    overview: PropTypes.string,
    runtime: PropTypes.number,
    episode_run_time: PropTypes.arrayOf(PropTypes.number),
    first_air_date: PropTypes.string,
    created_by: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        profile_path: PropTypes.string,
      })
    ),
    homepage: PropTypes.string,
  }),
};

export default Detail;
