import React, { Component } from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import { connect } from 'react-redux';
import Infinia from './components/Infinia';
import Infinia2 from './components/Infinia2';
import Infinia3 from './components/Infinia3';
import Infinia4 from './components/Infinia4';
import Infinia5 from './components/Infinia5';
import Search from './components/Search';
import Store from './components/Store';
import Items from './components/Items';
import Checkout from './components/Checkout';
import LoginPage from './components/SigninPage';
import RegisterPage from './components/SignupPage';
import Details from './components/details';
import CartPage from './components/CartPage';
import RedirectPage from './components/RedirectPage';
import VerifiedPage from './components/VerifiedPage';
import Profile from './components/profile/Profile';
import UserProfile from './components/profile/UserProfile';
import UserPurchase from './components/profile/UserPurchase';
import UserRating from './components/profile/UserRating';
import ShippingAddress from './components/profile/ShippingAddress';
import UserWishlist from './components/profile/UserWishlist';
import UserMessage from './components/profile/UserMessage';
import UserSetting from './components/profile/UserSetting';
import { getAppCredentials } from './actions/authActions';

class App extends Component {

  componentDidMount(){
    this.props.getAppCredentials();
  }

  render() {
    return <Router history={browserHistory}>
      <Route path="/" component={Infinia} />
      <Route path="/infinia2" component={Infinia2} />
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
      <Route path="/details" component={Details} />
      <Route path="/cart" component={CartPage} />
      <Route path="/redirect" component={RedirectPage}/>
      <Route path="/verified" component={VerifiedPage}/>
      <Route path="/:profile" component={Profile}>
        <IndexRoute component={UserProfile}/>
        <Route path="/:profile/purchase" component={UserPurchase}/>
        <Route path="/:profile/rating" component={UserRating}/>
        <Route path="/:profile/wishlist" component={UserWishlist}/>
        <Route path="/:profile/shipping" component={ShippingAddress}/>
        <Route path="/:profile/message" component={UserMessage}/>
        <Route path="/:profile/setting" component={UserSetting}/>

      </Route>

    </Router>
  }
}

export default connect(null, { getAppCredentials })(App);
