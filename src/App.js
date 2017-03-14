import React, { Component } from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import { connect } from 'react-redux';
import Infinia from './components/Infinia';
import Infinia2 from './components/testFolder/Infinia2';
import Infinia3 from './components/testFolder/Infinia3';
import Infinia4 from './components/testFolder/Infinia4';
import Infinia5 from './components/testFolder/Infinia5';
import Home from './components/home';
import Search from './components/Search';
import Store from './components/Store';
import StoreProfile from './components/StoreProfile';
import Items from './components/Items';
import Checkout from './components/Checkout';
import LoginPage from './components/SigninPage';
import RegisterPage from './components/SignupPage';
import Details from './components/productDetails';
import CartPage from './components/CartPage';
import RedirectPage from './components/RedirectPage';
import VerifiedPage from './components/VerifiedPage';
import Profile from './components/profile/Profile';
import UserProfile from './components/profile/UserProfile';
import UserPurchase from './components/profile/userPurchase/UserPurchase';
import CompletedPurchase from './components/profile/userPurchase/CompletedPurchase';
import PurchasedItems from './components/profile/userPurchase/PurchasedItems';
import PendingPurchase from './components/profile/userPurchase/PendingPurchase';
import PurchaseDetails from './components/profile/userPurchase/PurchaseDetails';
import UserRating from './components/profile/UserRating';
import ShippingAddress from './components/profile/ShippingAddress';
import UserWishlist from './components/profile/UserWishlist';
import UserMessage from './components/profile/UserMessage';
import UserSetting from './components/profile/UserSetting';
import { getAppCredentials } from './actions/authActions';
import { getCSRFToken } from './actions/cartActions';

import setStatus from './utils/setPurchaseDetailsStatus';

class App extends Component {

  componentDidMount(){
    this.props.getAppCredentials();
    this.props.getCSRFToken();
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Infinia} >
          <IndexRoute component={Home}/>
          <Route path="/infinia2" component={Infinia2} />
          <Route path="/infinia3" component={Infinia3} />
          <Route path="/infinia4" component={Infinia4} />
          <Route path="/infinia5" component={Infinia5} />
          <Route path="/store" component={Store} />
          <Route path="/:store/profile" component={StoreProfile} />
          <Route path="/items" component={Items} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/search/:category" component={Search} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={CartPage} />
          <Route path="/redirect" component={RedirectPage}/>
          <Route path="/verified" component={VerifiedPage}/>
          <Route path="/user/:user/profile" component={Profile}>
            <IndexRoute component={UserProfile}/>
            <Route component={UserPurchase}>
              <Route path="/user/:user/profile/purchase/completed" component={CompletedPurchase}>
                <IndexRoute component={setStatus(PurchasedItems)}/>
                <Route path="/user/:user/profile/purchase/completed/:tracking_number" component={setStatus(PurchaseDetails)}/>
              </Route>
              <Route path="/user/:user/profile/purchase/pending" component={PendingPurchase} >
                <IndexRoute component={setStatus(PurchasedItems)}/>
                <Route path="/user/:user/profile/purchase/pending/:tracking_number" component={setStatus(PurchaseDetails)}/>
              </Route>
            </Route>
            <Route path="/user/:user/profile/rating" component={UserRating}/>
            <Route path="/user/:user/profile/wishlist" component={UserWishlist}/>
            <Route path="/user/:user/profile/shipping" component={ShippingAddress}/>
            <Route path="/user/:user/profile/message" component={UserMessage}/>
            <Route path="/user/:user/profile/setting" component={UserSetting}/>
          </Route>
        </Route>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />

      </Router>
    )
  }
}

export default connect(null, { getAppCredentials, getCSRFToken })(App);
