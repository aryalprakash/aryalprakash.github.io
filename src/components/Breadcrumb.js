/**
 * Created by bikash on 2/22/17.
 */
import React, {Component} from 'react';

class Breadcrumb extends Component{
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
          <select>
            <option>Supermarket</option>
            <option>Fashion</option>
            <option>Electronics</option>
            <option>Kids Wear</option>
          </select>

        </div>
      </div>
    );
  }
}

export default Breadcrumb;