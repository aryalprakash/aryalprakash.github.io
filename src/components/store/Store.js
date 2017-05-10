/**
 * Created by prakash on 8/29/2016.
 */
import React, { Component } from 'react';
import  { Link } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { connect } from 'react-redux';
import Deals from '../Deals';
import Gmap from '../maps';
import SlidingTabPanel from '../SlidingTabPanel';
import StorePromo from './StorePromo';
import StoreAboutUs from './StoreAboutUs';

import {getStoreDetails} from '../../actions/storeActions';

let styles= {
    tab:{
        borderBottom: '2px solid #f7f7f7'
    },
    tabcontent:{
        width: '100%',
        marginTop: '10px'
    }
};

class Store extends Component {
    constructor(props) {
        super(props);
        console.log('Key in store page',props.location.query.id);
        this.state = {
            list: false,
            place: 'Dubai',
            class: '',
            loc: 'active-color',
            cat: 'passive-color',


        }


    }

    componentDidMount(){
        this.props.getStoreDetails(this.props.location.query.id);
    }

    handleSelect(index, last) {
      console.log('Selected tab: ' + index + ', Last tab: ' + last);
    }

    render() {

        const { search } = this.state;

        let {storeDetails} = this.props;
        console.log('storeDetails page',storeDetails);

        return (
          <div className="mycontainer">
           {storeDetails.length>0 ?
            <div className="main-content">

                    <div className="sidebar-left">

                      <div className="card profile">
                          <Link to={{ pathname: `/${storeDetails[0].display_name}/profile`, query: { storeId: storeDetails[0].id } }}>
                            <div className="store-image">
                                <img src={storeDetails[0].image} />
                            </div>
                          </Link>
                      </div>
                      <StoreAboutUs storeDetails={storeDetails[0]}/>

                      <div className="card">
                          Location
                          <div className="store-profile-content">
                              <Gmap initialCenter={{ lng: storeDetails[0].longitude, lat: storeDetails[0].latitude }} placeProp={this.state.place}/>

                          </div>
                      </div>

                    </div>


                <div className="card center-content">
                    <div className="store-title relative">
                        <Tabs
                        onSelect={this.handleSelect}
                        selectedIndex={0}
                        style={styles.tabcontent}
                        >
                            <TabList className="main-tab" style={styles.tab}>
                                <Tab>Regular Offer</Tab>
                                <Tab>{storeDetails[0].display_name} Deals</Tab>
                            </TabList>
                            {/*For regular offer*/}
                            <TabPanel>

                                <SlidingTabPanel maxChildren={5} storeID={storeDetails[0].id} catList={storeDetails[0].categorysecond}>
                                    {storeDetails[0].categorysecond.map((cat)=>
                                        <Tab key={cat.id}>
                                            <div className="cat-icon ">
                                                <img className="img-rounded" src={cat.image}/>
                                                {cat.category_name}
                                            </div>
                                        </Tab>
                                    )}

                                </SlidingTabPanel>


                            </TabPanel>
                            {/*For Store deals*/}
                            <TabPanel>
                              <StorePromo/>
                            </TabPanel>
                        </Tabs>
                        <div className="search-box absolute-search"><input className="search-input" placeholder="Search Items"/><div className="search-icon"><img src="../../img/infinia/search.png" /></div></div>
                    </div>
                </div>
                <div id="dealSection" className="deals-section">
                    <Deals />
                </div>
            </div>

               : <p>Sorry<br/>No data</p>
           }
        </div>)
    }
}

function mapStateToProps(state) {
  return {
      storeDetails: state.stores.storeDetails
  }
}


export default connect(mapStateToProps,{ getStoreDetails })( Store )