import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/Header";
import Landing from "./components/Landing";
import CourseContainer from "./components/CourseContainer";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/search" component={CourseContainer} />
            <Route component={NotFound} />
          </Switch>
        </Router>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
