/**
 * Created by user on 8/29/2016.
 */
import React, { Component } from 'react';
import  { Link } from 'react-router';
import Header from './Header';
import Breadcrumb from './Breadcrumb';
import MiniBreadcrumb from './MiniBreadcrumb';
import Footer from './Footer';
import ChatBox from './ChatBox';

let style={
    header: {
        background: 'grey'
    }
}

export default class Infinia extends Component{
    constructor(){
        super();
        this.state={
            list: false,
            place: 'Dubai'
        }
        this.show = this.show.bind(this)
        this.hide = this.hide.bind(this)
        this.change = this.change.bind(this)
    }

    componentDidMount(){

    }

    show(){
        this.setState({
            list: true
        })
    }
    hide(){
        this.setState({
            list: false
        })
    }

    change(place){
        this.setState({
            place
        })
        this.hide()
    }


    render(){
      let {props} = this.props.children;
      // console.log("title path",props);
      document.title = props.params[props.route.name] ? "Infinia Store | "+ props.params[props.route.name] : "Infinia Store | "+ props.route.name;

      return(
          <div className="icontainer">
            <Header/>
            {
              props.location.pathname !== "/" &&
                <div>
                    <Breadcrumb/>
                    <MiniBreadcrumb routes={props}/>
                </div>
            }
            <div>
              {this.props.children}
            </div>
            <ChatBox/>
            <Footer/>
        </div>
      );
    }
}
