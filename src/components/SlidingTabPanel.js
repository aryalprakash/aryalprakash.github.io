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

    initialize(props){
        this.state = {
            children: props.children,
            totalChild: props.children.length,
            startIndex: 0,
            left: 0,
            endIndex: props.maxChildren + 1
        };

    }

    constructor(props){
        super(props);
        this.initialize(props);
    }

    componentWillReceiveProps(nextProps){
        this.initialize(nextProps);

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
                <Tabs onSelect={this.handleSelect}
                      selectedIndex={0} style={styles.tab} >
                    <TabList style={{left: this.state.left +"px"}} children={this.state.children}>

                    </TabList>
                    {this.props.catList.map((cat, index)=>
                        <TabPanel key={index}>
                            <SubCategoryList cat={cat.category} storeID={this.props.storeID}/>

                        </TabPanel>
                    )}

                </Tabs>

            </div>
        );
    }
}