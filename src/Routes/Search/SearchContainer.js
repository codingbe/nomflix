import { movieApi, tvApi } from "api";
import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class SearchContainer extends React.Component {
  state = {
    movies: null,
    tvResults: null,
    term: "",
    loading: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { term } = this.state;
    console.log(term);
    if (term !== "") {
      this.searchByTerm();
    }
  };

  searchByTerm = async () => {
    const { term } = this.state;
    try {
      this.setState({ loading: true });
      const movies = await movieApi.search(term);
      const tvResults = await tvApi.search(term);
      this.setState({ movies, tvResults });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  };

  updateTerm = (event) => {
    const { value: term } = event.target;
    this.setState({ term });
  };

  render() {
    const { movies, tvResults, loading } = this.state;
    return (
      <SearchPresenter
        movies={movies}
        tvResults={tvResults}
        loading={loading}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
