import Section from "Components/Section";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const HomePresenter = ({ popular, topRated, nowPlaying, upcoming }) => (
  <>
    <Helmet>
      <title>Movies | Nomflix</title>
    </Helmet>
    <Section movies={popular} title="Popular" />
    <Section movies={topRated} title="Top Rated" />
    <Section movies={nowPlaying} title="Now Playing" />
    <Section movies={upcoming} title="Upcoming" />
  </>
);

HomePresenter.propTypes = {
  popular: PropTypes.array.isRequired,
};

export default HomePresenter;
