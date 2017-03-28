/**
 * Created by bikash on 2/22/17.
 */
import React, {Component} from 'react';
import Dialog from 'rc-dialog';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import _ from 'lodash';

import ProfileSideBar from './ProfileSideBar';
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
    this.state ={
      visible: false,
      destroyOnClose: false,
      file: '',
      imagePreviewUrl: ''

    };

    this.onClick = this.onClick.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  componentDidMount() {
    this.props.getUserProfile();
  }

  onClick() {
    this.setState({
      visible: true,
    });
  }

  onClose() {
    this.setState({
      visible: false,
    });
  }

  onDestroyOnCloseChange(e) {
    this.setState({
      destroyOnClose: e.target.checked,
    });
  }

  selectImage = () => {
    document.getElementById('upload-img').click();
  };

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

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

  render(){
    let dialog;
    let {userData} = this.props;
    console.log("user profile data", userData);

    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img className="img-thumbnail profile-pic" src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<img className="img-thumbnail profile-pic" src={require("../../../img/profile-icon.png")}/>);
    }

    if (this.state.visible || !this.state.destroyOnClose) {
      dialog = (
        <Dialog
          visible={this.state.visible}
          animation="zoom"
          maskAnimation="fade"
          onClose={this.onClose}
          style={{ width: 600 }}
          title={<div style={{marginTop: 15, fontSize: 17}}> Edit Your Profile</div>}
        >
          {
            !_.isEmpty(userData) ?

              <EditProfile userData={userData.user_data} />
              :
              <EditProfile userData={{}} />

          }

        </Dialog>
      );
    }
    return(
      <div className="main-content">
        <ProfileSideBar/>
        {
          !_.isEmpty(userData) ?
            <div className="card center-content">
              <div className="col-md-10 profile">
                <div className="col-md-2">
                  <div className="update-profile-pic" onClick={this.selectImage}>
                    <img className="camera-icon" src={require("../../../img/camera-icon.png")}/>
                    {$imagePreview}
                    <input type="file" accept="image/*" id="upload-img" style={{display: "none"}} onChange={(e)=>this.handleImageChange(e)}/>
                  </div>
                </div>
                <div className="col-md-6">
                  <h2 style={{marginTop: 0}}>{userData.user_data.username}</h2>
                  <h3 style={user}>({userData.user_data.username})</h3>
                  <p>{userData.user_data.email}</p>
                </div>
                <div className="col-md-4 edit-profile">
                  <span className="fa fa-pencil" onClick={this.onClick}/>
                </div>
              </div>

              <div className="col-md-12 following-store">
                <h3>Following Stores</h3>
                <div className="line" style={{marginBottom: 20}}></div>
                {
                  userData.followed_stores.map((store,index)=>
                    <div key={index} className="col-md-3">

                        <div className="thumbnail">
                          <div className="ribbon"><span className="fa fa-remove tooltip-bottom" onClick={() => this.unFollow(store.id)}><span className="tooltip-text">Unfollow</span></span></div>

                          <Link to={store.registered ?
                          { pathname: `/store/${store.display_name}`, query: { id: store.id } }
                            :
                          { pathname: `/${store.display_name}/profile`, query: { storeId: store.id } }

                          } >
                            <div>
                              <img src={require("../../../img/store.png")} alt="" />
                              <div className="caption">
                                <h4>{store.display_name}</h4>
                                <p>Location: {store.country}, {store.state}</p>
                                <p>Min-Order: {store.minimum_buy}{store.currency}</p>
                              </div>
                            </div>
                          </Link>
                        </div>
                    </div>
                  )
                }
              </div>

            </div>

            :
            <h2>There is no data to show</h2>
        }
        {dialog}

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