import Section from "Components/Section";
import { Helmet } from "react-helmet";

const TvPresenter = ({ popular, topRated, airingToday }) => (
  <>
    <Helmet>
      <title>Shows | Nomflix</title>
    </Helmet>
    <Section title="Popular" shows={popular} />
    <Section title="Top Rated" shows={topRated} />
    <Section title="Airing Today" shows={airingToday} />
  </>
);

export default TvPresenter;
