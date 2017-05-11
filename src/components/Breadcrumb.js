/**
 * Created by bikash on 2/22/17.
 */
import React, {Component} from 'react';

class Breadcrumb extends Component{

  handleChange = (e) => {
    console.log("value", e.target.value);
    this.context.router.push(`/search/${e.target.value}`);

  };

  render(){
    return(
      <div className="bread-crumb">
        <div className="select-location">My Location:
          <select className="selectLocation" onChange={()=> this.selectLocation()}>
            <option value="Dubai">Dubai</option>
            <option value="Qatar">Qatar</option>
            <option value="Nepal">Nepal</option>
          </select>
        </div>
        <div className="select-cat">Category:
          <select onChange={this.handleChange}>
            <option>Supermarket</option>
            <option>Fashion</option>
            <option>Electronics</option>
            <option>Kids Wear</option>
          </select>

        </div>
        <div className="breadcrumbPath">
          
        </div>
      </div>
      
    );
  }
}

Breadcrumb.contextTypes = {
  router: React.PropTypes.object.isRequired
};


function mapStateToProps(state) {
  return {
    path: state.path
  }
}
export default Breadcrumb;
