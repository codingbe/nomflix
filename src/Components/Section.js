import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const Poster = styled.img`
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease-in-out;
  border-radius: 5px;
`;
const Rating = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  font-weight: 600;
  font-size: 14px;
  padding: 5px;
  opacity: 0;
`;

const Postercontainer = styled.div`
  height: 100%;
  width: 100%;
  &:hover {
    ${Poster} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
  padding: 15px 10px;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  padding-left: 10px;
`;

const Detail = styled(Link)`
  position: relative;
`;

const Section = ({ movies, shows, title }) => (
  <>
    <Helmet>
      <title>{movies ? `Movies | Nomflix` : `Shows | Nomflix`}</title>
    </Helmet>
    {title ? <Title>{title}</Title> : null}
    {console.log(shows)}
    <Container>
      {movies && movies.length > 0
        ? movies.map((movie) => (
            <Detail key={movie.id} to={`movie/${movie.id}`}>
              {movie.poster_path ? (
                <Postercontainer>
                  <Poster src={`${process.env.REACT_APP_IMAGE_URL}${movie.poster_path}`} />
                  <Rating>⭐{movie.vote_average} / 10</Rating>
                </Postercontainer>
              ) : (
                <Postercontainer>
                  <Poster src={process.env.REACT_APP_404_URL} />
                  <Rating>⭐{movie.vote_average} / 10</Rating>
                </Postercontainer>
              )}
            </Detail>
          ))
        : null}
      {shows && shows.length > 0
        ? shows.map((show) => (
            <Detail key={show.id} to={`tv/${show.id}`}>
              {show.poster_path ? (
                <Postercontainer>
                  <Poster src={`${process.env.REACT_APP_IMAGE_URL}${show.poster_path}`} />
                  <Rating>⭐{show.vote_average} / 10</Rating>
                </Postercontainer>
              ) : (
                <Postercontainer>
                  <Poster src={process.env.REACT_APP_404_URL} />
                  <Rating>⭐{show.vote_average} / 10</Rating>
                </Postercontainer>
              )}
            </Detail>
          ))
        : null}
    </Container>
  </>
);

Section.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    })
  ),
  shows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
};

export default Section;
