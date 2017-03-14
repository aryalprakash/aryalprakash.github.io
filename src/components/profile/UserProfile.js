/**
 * Created by bikash on 2/22/17.
 */
import React, {Component} from 'react';
import Dialog from 'rc-dialog';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import ProfileSideBar from './ProfileSideBar';
import EditProfile from './EditProfile';

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

  render(){
    let dialog;

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
          style={{ width: 500 }}
          title={<div style={{marginTop: 15, fontSize: 17}}> Edit Your Profile</div>}
        >
          <EditProfile />

        </Dialog>
      );
    }
    return(
      <div className="main-content">
        <ProfileSideBar/>
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
              <h2 style={{marginTop: 0}}>Bikash Shrestha</h2>
              <h3 style={user}>(bikash-shrestha)</h3>
              <p>shresthabikash637@gmail.com</p>
            </div>
            <div className="col-md-4 edit-profile">
              <span className="fa fa-pencil" onClick={this.onClick}/>
            </div>
          </div>

          <div className="col-md-12 following-store">
            <h3>Following Stores</h3>
            <div className="line" style={{marginBottom: 20}}></div>
            {
              userFollowing.map((store,index)=>
                <div key={index} className="col-md-3">
                  <Link to={{ pathname: '/store', query: { id: store.id } }}>
                    <div className="thumbnail">
                      <div className="ribbon"><span className="fa fa-remove tooltip-bottom"><span className="tooltip-text">Unfollow</span></span></div>
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
        {dialog}

      </div>

    );
  }
}

export default UserProfile;