import Loader from "Components/Loader";
import Search from "Components/Search";
import Section from "Components/Section";
import PropTypes from "prop-types";

const SearchPresenter = ({ movies, tvResults, loading, handleSubmit, updateTerm }) => (
  <>
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
