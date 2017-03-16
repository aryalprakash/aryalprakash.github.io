import React from 'react';
import { Link } from 'react-router';


class HorizontalNavBar extends React.Component {

  render() {
    return (
      <div className="horizontal-navbar">
        <div className="collapse navbar-collapse" style={{paddingLeft: 0}}>
          <ul className="nav navbar-nav">
            <li className={this.props.active == "completed"? "active": ""}>
              <Link to="/user/Bikash/profile/purchase/completed">Completed Purchase</Link>
            </li>
            <li className={this.props.active == "pending"? "active": ""}>
              <Link to="/user/Bikash/profile/purchase/pending">Pending Purchase</Link>
            </li>
          </ul>
        </div>
      </div>

    );
  }

}

export default HorizontalNavBar;
