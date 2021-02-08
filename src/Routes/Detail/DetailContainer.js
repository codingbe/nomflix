import React from "react";
import Loader from "Components/Loader";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "api";

export default class DetailContainer extends React.Component {
  state = {
    results: null,
    loading: true,
  };
  async componentDidMount() {
    const {
      match: { url },
      match: {
        params: { id },
      },
    } = this.props;
    try {
      if (url.includes("movie")) {
        const results = await movieApi.detail(id);
        console.log(results);
        this.setState({ results });
      } else if (url.includes("tv")) {
        const results = await tvApi.detail(id);
        console.log(results);
        this.setState({ results });
      }
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { loading, results } = this.state;
    return loading ? <Loader /> : <DetailPresenter results={results} />;
  }
}
