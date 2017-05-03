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
import SearchPage from './components/search/SearchPage';
import SearchResults from './components/search/SearchResults';
import StoreSearchPage from './components/search/StoreSearchPage';
import OfferSearchPage from './components/search/OfferSearchPage';
import Store from './components/store/Store';
import StoreProfile from './components/store/StoreProfile';
import StoreInfo from './components/store/StoreInfo';
import StorePromo from './components/store/StorePromo';
import StoreReview from './components/store/StoreReview';
import StoreMedia from './components/store/StoreMedia';
import Items from './components/Items';
import Checkout from './components/Checkout';
import AddStorePage from './components/AddStorePage';
import LoginPage from './components/SigninPage';
import RegisterPage from './components/SignupPage';
import Details from './components/productDetails';
import CartPage from './components/CartPage';
import RedirectPage from './components/RedirectPage';
import VerifiedPage from './components/VerifiedPage';
import Profile from './components/profile/Profile';
import UserProfile from './components/profile/UserProfile';
import UserNotification from './components/profile/UserNotifications';
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
import { getAppCredentials, getCSRFToken, isLoggedIn } from './actions/authActions';

import setStatus from './utils/setPurchaseDetailsStatus';
import requireAuth from './utils/requireAuth';
import requireLogin from './utils/requireLogin';

class App extends Component {

  componentDidMount(){
    this.props.getAppCredentials();
    this.props.getCSRFToken();
    this.props.isLoggedIn();
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route name="Home" path="/" component={Infinia} >
          <IndexRoute name="Home" component={Home}/>
          <Route path="/infinia2" component={Infinia2} />
          <Route path="/infinia3" component={Infinia3} />
          <Route path="/infinia4" component={Infinia4} />
          <Route path="/infinia5" component={Infinia5} />
          <Route name="store" path="/store/:store" component={Store} />
          <Route name="store" path="/:store/profile" component={StoreProfile} >
            <IndexRoute name="StoreInfo" component={StoreInfo}/>
            <Route name="Promo" path="/:store/profile/promo" component={StorePromo}/>
            <Route name="Reviews" path="/:store/profile/reviews" component={StoreReview}/>
            <Route name="Medias" path="/:store/profile/medias" component={StoreMedia}/>
          </Route>
          <Route name="Items" path="/items" component={Items} />
          <Route name="Checkout" path="/checkout" component={Checkout} />
          <Route name="Search" path="/search" component={SearchPage} >
            <IndexRoute name="All" component={SearchResults}/>
            <Route name="Store" path="/search/store" component={StoreSearchPage}/>
            <Route name="Offer" path="/search/offer" component={OfferSearchPage}/>
          </Route>
          <Route name="category" path="/search/:category" component={Search} />
          <Route name="Details" path="/details" component={Details} />
          <Route path="/redirect" component={RedirectPage}/>
          <Route path="/verified" component={VerifiedPage}/>
          <Route name="user" path="/user/:user/profile" component={requireAuth(Profile)}>
            <IndexRoute name="Profile" component={UserProfile}/>
            <Route name="Cart" path="/user/:user/cart" component={CartPage} />

            <Route name="Notifications" path="/user/:user/profile/notifications" component={UserNotification}/>
            <Route name="Purchase" component={UserPurchase}>
              <Route name="Completed" path="/user/:user/profile/purchase/completed" component={CompletedPurchase}>
                <IndexRoute name="Purchased Items" component={setStatus(PurchasedItems)}/>
                <Route name="tracking_number" path="/user/:user/profile/purchase/completed/:tracking_number" component={setStatus(PurchaseDetails)}/>
              </Route>
              <Route name="Pending" path="/user/:user/profile/purchase/pending" component={PendingPurchase} >
                <IndexRoute name="Pending Items" component={setStatus(PurchasedItems)}/>
                <Route name="tracking_number" path="/user/:user/profile/purchase/pending/:tracking_number" component={setStatus(PurchaseDetails)}/>
              </Route>
            </Route>
            <Route name="Rating" path="/user/:user/profile/rating" component={UserRating}/>
            <Route name="Wishlist" path="/user/:user/profile/wishlist" component={UserWishlist}/>
            <Route name="Shipping" path="/user/:user/profile/shipping" component={ShippingAddress}/>
            <Route name="Message" path="/user/:user/profile/message" component={UserMessage}/>
            <Route name="Setting" path="/user/:user/profile/setting" component={UserSetting}/>
          </Route>
        </Route>
        <Route path="/login" component={requireLogin(LoginPage)} />
        <Route path="/register" component={requireLogin(RegisterPage)} />
        <Route path="/addStore" component={AddStorePage}/>

      </Router>
    )
  }
}

export default connect(null, { getAppCredentials, getCSRFToken, isLoggedIn })(App);
