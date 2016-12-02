/**
 * Created by bikash on 11/21/16.
 */

import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import SubCategoryList from './subCategoryList'
import { Link } from 'react-router'

let styles= {
    tab:{
        overflow: "hidden",
    },
    tabcontent:{
        width: '100%',
        marginTop: '10px'
    }
}


export  default class SlidingTabPanel extends TabPanel{

    constructor(props){
        super(props);

        this.state = {
            children: props.children,
            totalChild: props.children.length,
            startIndex: 0,
            left: 0,
            endIndex: props.maxChildren + 1
        };
    }

    gonext(){
        if(this.state.endIndex < this.state.totalChild){
            this.state.startIndex += 1;
            this.state.endIndex += 1;
            this.setState({ left: this.state.left-126 });
        }
    }
    goprev(){
        if(this.state.startIndex > 0){
            this.state.startIndex -= 1;
            this.state.endIndex -= 1;
            this.setState({ left: this.state.left+126 });
        }
    }

    render(){
        return(
            <div className="myslider" >
                <a onClick={ this.gonext.bind(this) } className="control_next"><span className="fa fa-angle-double-right"/></a>
                <a onClick={ this.goprev.bind(this)} className="control_prev"><span className="fa fa-angle-double-left"/></a>
                <Tabs style={styles.tab} >
                    <TabList style={{left: this.state.left +"px"}} children={this.state.children}>

                    </TabList>

                    {/*For grocery category*/}
                    <TabPanel>
                        <SubCategoryList />

                    </TabPanel>
                    {/*For Buthcery category*/}
                    <TabPanel>
                        you are in Butchery
                    </TabPanel>
                    <TabPanel>
                        you are in Kitchen
                    </TabPanel>
                    <TabPanel>
                        you are in Personal
                    </TabPanel>
                    <TabPanel>
                        {/*you are in Fashion*/}
                        <div className="row sub-category">
                            <div className="sub-category-list col-md-6">
                                <div className="row">
                                    <div className="thumbnail col-md-5">
                                        <img className="img-responsive" src="../../img/men-fashion.jpg"/>
                                    </div>
                                    <div className="col-md-7">
                                        <h3>Men's Wear</h3>
                                        <p>Top Wear: Shirts, Jackets, Sweaters...</p>
                                        <p>Bottom Wear: Jeans, Shorts, Trouser...</p>
                                        <p>Accessories: Belts, Sun Glasses, Shoes...</p>
                                        <Link to="details"><button className="btn btn-sm btn-warning">View items, Enjoy Shopping</button></Link>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </TabPanel>
                    <TabPanel>
                        you are in Electronics
                    </TabPanel>
                    <TabPanel>
                        you are in Electronics1
                    </TabPanel>
                    <TabPanel>
                        you are in Electronics2
                    </TabPanel>
                </Tabs>

            </div>
        );
    }
}