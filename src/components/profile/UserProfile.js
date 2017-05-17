/**
 * Created by bikash on 2/22/17.
 */
import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import ProfileImageForm from '../../forms/ProfileImageForm'
import ProfileForm from '../../forms/ProfileForm'
import ProfileSideBar from './ProfileSideBar';
import Modal from '../common/Modal';
import EditProfile from './EditProfile';
import { getUserProfile } from '../../actions/userActions';
import { unfollowStore } from '../../actions/authActions';

const user ={
  marginTop: 5,
  fontSize: "16px",
  color: "#a3a3a3"
};

const userFollowing = [
  {
    id: 1,
    display_name: "Wallmart",
    country: "USA",
    state: "California",
    minimum_buy: 50,
    currency: "AED"
  },
  {
    id: 2,
    display_name: "Yolo Mall",
    country: "England",
    state: "London",
    minimum_buy: 50,
    currency: "AED"
  },
  {
    id: 3,
    display_name: "Yolo Yolo Mall",
    country: "UAE",
    state: "Dubai",
    minimum_buy: 50,
    currency: "AED"
  },
];

class UserProfile extends Component{
  constructor(props){
    super(props);
    this.state = {
      showModal: false
    };
  }

  componentDidMount() {
    this.props.getUserProfile();
  }

  // componentWillReceiveProps (nextProps) {
  //   this.setState({
  //     userData: nextProps.userData
  //   })
  // }

  // selectImage = () => {
  //   document.getElementById('upload-img').click();
  // };


  unFollow(id) {
    this.props.unfollowStore(id).then(
      (success)=> {
        console.log("successfully unfollowed");
        this.props.getUserProfile();
      },
      (err)=> {
        console.log("error during unfollowing");
      }
    );
  }

  getUpdateForm = (user) => {
    console.log('logging user data on update user photo: ', user);
    return <ProfileImageForm
      update={true}
      user={user.user_data}
    />
  };

  hideModal = () => {
    this.setState({showModal: false})
  };

  render(){
    let {userData} = this.props;
    console.log("user profile data", userData);

    return(
      <div className="main-content">
        <ProfileSideBar/>
        {
          !isEmpty(userData) ?
            <div className="card center-content">
              <div className="col-md-12 profile">
                <div className="col-md-4 col-sm-3 col-xs-12">
                  {this.getUpdateForm(userData)}
                </div>
                <div className="col-md-6 col-sm-7 col-xs-10">
                  <h2 style={{marginTop: 0}}>{userData.user_data.first_name} {userData.user_data.last_name}</h2>
                  <h3 style={user}>({userData.user_data.username})</h3>
                  <p>{userData.user_data.email}</p>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-2 edit-profile">
                  <Modal title='Edit Your Profile' showModal={this.state.showModal}>
                    <ProfileForm update={true} user={isEmpty(userData) ? {} : userData.user_data} closeModal={this.hideModal}/>
                  </Modal>
                </div>
              </div>

              <div className="col-md-12 col-sm-12 col-xs-12 following-store">
                <h3>Following Stores</h3>
                <div className="line" style={{marginBottom: 20}}></div>
                {
                  userData.followed_stores.map((store,index)=>
                    <div key={index} className="col-md-3 col-sm-6">
                      <Link to={store.registered ?
                      { pathname: `/store/${store.display_name}`, query: { id: store.id } }
                        :
                      { pathname: `/${store.display_name}/profile`, query: { storeId: store.id } }

                      } >
                        <div className="thumbnail">
                          <div className="ribbon"><span className="fa fa-remove tooltip-bottom" onClick={() => this.unFollow(store.id)}><span className="tooltip-text">Unfollow</span></span></div>
                            <img src={require("../../../img/store.png")} alt="" />
                            <div className="caption">
                              <h4>{store.display_name}</h4>
                              <p>Location: {store.country}, {store.state}</p>
                              <p>Min-Order: {store.minimum_buy}{store.currency}</p>
                            </div>
                        </div>
                      </Link>
                    </div>
                  )
                }
              </div>

            </div>

            :
            <h2>There is no data to show</h2>
        }

      </div>

    );
  }
}

function mapStateToProps(state) {
  return{
    userData: state.user.userData
  }
}

export default connect(mapStateToProps, { getUserProfile, unfollowStore })(UserProfile);