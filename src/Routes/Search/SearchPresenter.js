import Loader from "Components/Loader";
import Search from "Components/Search";
import Section from "Components/Section";
import { Helmet } from "react-helmet";

const SearchPresenter = ({ movies, tvResults, loading, handleSubmit, updateTerm, term }) => (
  <>
    <Helmet>
      <title>Search | Nomflix</title>
    </Helmet>
    <Search handleSubmit={handleSubmit} updateTerm={updateTerm} />
    {loading ? (
      <Loader />
    ) : (
      <>
        <Section movies={movies} title="Movies" />
        <Section shows={tvResults} title="TV Shows" />
      </>
    )}
  </>
);

export default SearchPresenter;
