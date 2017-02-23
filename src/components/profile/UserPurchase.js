/**
 * Created by bikash on 2/22/17.
 */
import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ProfileSideBar from './ProfileSideBar';
import CompletedPurchase from './CompletedPurchase';


let styles= {
  tab:{
    borderBottom: '2px solid #f7f7f7'
  },
  tabcontent:{
    width: '100%',
    marginTop: '10px'
  }
};

class UserPurchase extends Component{
  render(){
    return(
        <div className="main-content">
          <ProfileSideBar active="purchase"/>
          <div className="card center-content">
            <Tabs
              onSelect={this.handleSelect}
              selectedIndex={0}
              style={styles.tabcontent}
            >
              <TabList className="main-tab" style={styles.tab}>
                <Tab>Completed Purchase</Tab>
                <Tab>Pending Purchase</Tab>
              </TabList>
              <TabPanel>
                <div className="col-md-12 completed-purchase">
                  <CompletedPurchase/>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="col-md-12 pending-purchase">
                  <p>No Pending Purchase</p>
                </div>
              </TabPanel>

            </Tabs>
          </div>
        </div>
    );
  }
}

export default UserPurchase;