/**
 * Created by user on 8/29/2016.
 */
import React, { Component } from 'react';
import  { Link } from 'react-router';
import Header from './Header';
import Breadcrumb from './Breadcrumb';
import Footer from './Footer';
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
        return(
          <div className="icontainer">
            <Header/>
            {
              this.props.children.props.location.pathname !== "/" && <Breadcrumb/>
            }
            <div>
              {this.props.children}
            </div>
            <Footer/>
        </div>
      );
    }
}
