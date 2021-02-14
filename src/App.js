import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchResults from "./components/SearchResults/SearchResults";

import Index from "./pages/index";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route exact path="/search">
            <SearchResults />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
