import React from "react";
import GlobalStyles from "./GlobalStyles";
import Router from "./Router";

export default class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Router />
      </>
    );
  }
}
