import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Landing from "./components/Landing";
import CourseContainer from "./components/CourseContainer";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/search" component={CourseContainer} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
