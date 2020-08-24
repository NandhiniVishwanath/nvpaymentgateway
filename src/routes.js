import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from "./history";
import Home from './Components/Home/home';
import PaymentHome from './Components/PaymentHome/paymentHome';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <div className="container">
            <Route exact path="/" component={PaymentHome} />
            <Route path="/PaymentHome" component={PaymentHome} />
          </div>
        </Switch>
      </Router>
    )
  }
}