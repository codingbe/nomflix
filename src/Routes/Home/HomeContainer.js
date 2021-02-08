import HomePresenter from "./HomePresenter";
import React from "react";
import { movieApi } from "api";
import Loader from "Components/Loader";

export default class HomeContainer extends React.Component {
  state = {
    popular: null,
    topRated: null,
    nowPlaying: null,
    upcoming: null,
    loading: true,
  };
  async componentDidMount() {
    const popular = await movieApi.popular();
    const topRated = await movieApi.topRated();
    const nowPlaying = await movieApi.nowPlaying();
    const upcoming = await movieApi.upcoming();
    this.setState({ popular, topRated, nowPlaying, upcoming, loading: false });
  }
  render() {
    const { popular, topRated, nowPlaying, upcoming, loading } = this.state;
    return loading ? (
      <Loader />
    ) : (
      <HomePresenter popular={popular} topRated={topRated} nowPlaying={nowPlaying} upcoming={upcoming} />
    );
  }
}
