/**
 * Created by bikash on 5/17/17.
 */
import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';

import { followStore, unfollowStore } from '../../actions/authActions';


class StoreList extends Component {

  state = {
    slug: '',
  };

  componentDidMount() {
    let category = this.props.categories.filter((cat) => {
      return cat.category_name == this.props.currentCategory
    });
    this.setState({slug: category[0].slug});
    this.props.getStoresList(category[0].slug);
  }

  followStore (id, isFollowed) {
    if (isFollowed === null) {
      this.context.router.push('/login');
    }
    else {
      if (isFollowed === false) {
        this.props.followStore(id).then(
          (success)=> {
            console.log("successfully followed");
            this.props.getStoresList(this.state.slug);
          },
          (err)=> {
            console.log("error during following");
          }
        );
      }
      else {
        this.props.unfollowStore(id).then(
          (success)=> {
            console.log("successfully unfollowed");
            this.props.getStoresList(this.state.slug);

          },
          (err)=> {
            console.log("error during unfollowing");
          }
        );

      }
    }
  }

  render() {
    let {stores} = this.props;
    console.log('in storelist page',stores);

    return(
      <div className="all-stores">
        <div className="store-sec">
          <div className="row">
            {stores.length>0?stores.map(store=>
              <div key={store.id} className="col-md-4 col-sm-6">
                <div className="thumbnail">
                  <Link to={store.registered ?
                  { pathname: `/store/${store.display_name}`, query: { id: store.id } }
                    :
                  { pathname: `/${store.display_name}/profile`, query: { storeId: store.id } }

                  } >
                    <div className="inner-thumbnail">
                      <div className="ribbon"><span className={store.open == true ? "fa fa-circle opn": "fa fa-circle clo"}> </span></div>
                      <img src={store.image} />
                      <div className="caption">
                        <h4>{store.display_name}</h4>
                        <p>Location: {store.country}, {store.state}</p>
                        <p>Min-Order: {store.minimum_buy}{store.currency}</p>
                        <p>Category: {store.categorysecond.map((item)=>(<span key={item.id}>{item.category_name}, </span>))}</p>

                      </div>
                      {/*<button className="btn btn-sm btn-block btn-success"><span className="fa fa-plus"/> Follow</button>*/}
                    </div>
                  </Link>
                  {
                    store.followed === false || store.followed === null ?
                      <button className="btn btn-sm btn-block btn-success" style={{marginRight: "10px"}} onClick={() => this.followStore(store.id, store.followed)}>
                        <span className="fa fa-user-plus"/> Follow
                      </button>
                      :
                      <button className="btn btn-sm btn-block btn-danger" style={{marginRight: "10px"}} onClick={() => this.followStore(store.id, store.followed)}>
                        <span className="fa fa-user-times"/> Unfollow
                      </button>

                  }
                </div>

              </div>
            ):<h2 className="col-md-12">Sorry!!! <br/>There is no Store to show.</h2>}

          </div>

        </div>

      </div>
    )
  }
}

StoreList.contextTypes = {
  router: React.PropTypes.object.isRequired
};

StoreList.propTypes = {
  currentCategory: React.PropTypes.string.isRequired,
  categories: React.PropTypes.array.isRequired,
  getStoresList: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return{
    stores: state.stores.stores
  }

}

export default connect(mapStateToProps, { followStore, unfollowStore })(StoreList);