import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';

const Dashboard = () => <h2>Dashboard</h2>;
const SuerveyNew = () => <h2>SuerveyNew</h2>;

class App extends PureComponent {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

  componentDidMount() {
    const { fetchUser } = this.props;

    fetchUser();
  }
}

const mapDispatch = {
  fetchUser: actions.fetchUser
};

export default connect(
  null,
  mapDispatch
)(App);