import React, { Component } from 'react';
import {Router, Route, hashHistory} from 'react-router'
import Portfolio from './components/Portfolio';
// import Infinia from './components/Infinia';
// import Infinia2 from './components/Infinia2';
// import Infinia3 from './components/Infinia3';
// import Infinia4 from './components/Infinia4';
// import Infinia5 from './components/Infinia5';
// import Search from './components/Search';
// import Store from './components/Store';
// import Items from './components/Items';
// import Checkout from './components/Checkout';
// import LoginPage from './components/Login';
// import RegisterPage from './components/Register';
// import Details from './components/details';

export default class App extends Component {
  render() {
    return <Router history={hashHistory}>
      <Route path="/" component={Portfolio} />
      {/* <Route path="/infinia2" component={Infinia2} />
      <Route path="/infinia3" component={Infinia3} />
      <Route path="/infinia4" component={Infinia4} />
      <Route path="/infinia5" component={Infinia5} />
      <Route path="/search" component={Search} />
      <Route path="/store" component={Store} />
      <Route path="/items" component={Items} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/search/:category" component={Search} />
      <Route path="/details" component={Details} /> */}
    </Router>
  }
}
