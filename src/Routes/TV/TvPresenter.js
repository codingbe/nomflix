import Section from "Components/Section";
import PropTypes from "prop-types";

const TvPresenter = ({ popular, topRated, airingToday }) => (
  <>
    <Section title="Popular" shows={popular} />
    <Section title="Top Rated" shows={topRated} />
    <Section title="Airing Today" shows={airingToday} />
  </>
);

export default TvPresenter;
