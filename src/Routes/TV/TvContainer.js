import { tvApi } from "api";
import Loader from "Components/Loader";
import React from "react";
import TvPresenter from "./TvPresenter";

export default class TvContainer extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
  };
  async componentDidMount() {
    try {
      const topRated = await tvApi.topRated();
      const popular = await tvApi.popular();
      const airingToday = await tvApi.airingToday();
      this.setState({ topRated, popular, airingToday });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { topRated, popular, airingToday, loading } = this.state;
    return loading ? <Loader /> : <TvPresenter topRated={topRated} popular={popular} airingToday={airingToday} />;
  }
}
