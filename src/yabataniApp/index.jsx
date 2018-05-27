import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Top from './components/Top.jsx';
import Check from './components/Check.jsx';
import Result from './components/Result.jsx';

export default class App extends React.Component {
  render() {
    return (
      <article>
        <Router>
          <Switch>
            <Route exact path="/" component={Top} />
            <Route exact path="/check" component={Check} />
            <Route exact path="/result" component={Result} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </article>
    );
  }
}
