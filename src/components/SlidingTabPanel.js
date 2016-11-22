/**
 * Created by bikash on 11/21/16.
 */

import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import SubCategoryList from './subCategoryList'


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
        // console.log(props.children.length);
        this.state = {
            children: props.children,
            totalChild: props.children.length,
            startIndex: 0,
            left: 0,
            endIndex: props.maxChildren + 1
        };
    }
    // sliceIndex(){
    //
    //     // var newChildren = React.Children.toArray(this.props.children);
    //     // var start = this.state.startIndex;
    //     // var end = this.state.endIndex;
    //     // if (start < 0 )
    //     //     return;
    //
    //     // var startChild = newChildren[start];
    //     // var endChild = newChildren[end];
    //     //
    //     // newChildren = React.cloneElement(newChildren,
    //     //     [], {style:{
    //     //         left: "-126px"
    //     //     }});
    //
    //
    //     this.setState({
    //         children: newChildren
    //         // children: this.props.children.slice(start, end)
    //     });
    // }
    // componentDidMount(){
    //      // this.sliceIndex();
    // }


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
                        {/*<Slider {...settings}>*/}

                        {/*</Slider>*/}
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
                        you are in Fashion
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