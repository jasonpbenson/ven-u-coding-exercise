import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { globalHistory } from "@reach/router";

import "./App.css";

import LoginForm from "./Pages/LoginForm";
import Layout from "./Components/Layout";
import TopStoriesResults from "./Pages/TopStories";
import SavedStories from "./Pages/SavedStories";

function App() {
  const [location, setLocation] = useState("/");

  useEffect(() => {
    globalHistory.listen(({ location }) => {
      return setLocation(location.pathname);
    });
  }, [location]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Layout location={location}>
            <Route exact path="/search-results" component={TopStoriesResults} />
            <Route exact path="/saved-stories" component={SavedStories} />
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
