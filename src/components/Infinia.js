/**
 * Created by user on 8/29/2016.
 */
import React, { Component } from 'react';
import  { Link } from 'react-router';
import Header from './Header'
import Home from './home'
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
        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 300,
                header = document.querySelector("iheader");
            if (distanceY > shrinkOn) {
                classie.add(iheader,"smaller");
            } else {
                if (classie.has(iheader,"smaller")) {
                    classie.remove(iheader,"smaller");
                }
            }
        });
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
            <div>
              <Home />
            </div>
            <div className="ifooter">
                <div className="imenu-list">About</div>
                <div className="imenu-list">Terms & Conditions</div>
                <div className="imenu-list">Policy</div>
            </div>
        </div>
      );
    }
}
