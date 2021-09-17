import React, { Fragment } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export default () => {
  return (
    <Fragment>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
            <Route />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </Fragment>
  );
};
