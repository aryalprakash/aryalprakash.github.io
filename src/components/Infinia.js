/**
 * Created by user on 8/29/2016.
 */
import React, { Component } from 'react';
import  { Link } from 'react-router';

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
        return(<div className="icontainer">
            <div  className="iheader grey">
                <Link to="/" className="link"><div className="ilogo">
                    <img src="./img/infinia/logo.png" />
                    <div className="ilogo-text">Infinia Stores</div>
                </div></Link>
                <div className="imenu">
                    <Link to="/infinia2" className="link"><div className="imenu-list">Infinia2</div></Link>
                    <div className="imenu-list"><img src="../img/infinia/cart.png" width="30px" /></div>
                    <div className="imenu-list">Account</div>
                </div>
            </div>
            <div className="icontents">
                <div className="itagline">Shop The Best Deals From Retail Stores You Wish For in

                    <div className="iplaces" onMouseEnter={_=>this.show()} onMouseLeave={_=>this.hide()}>
                    {!this.state.list?<div className="current-place">{this.state.place}</div>: <div className="iplaces-list">
                        <div className="place" onClick={_=>this.change('Qatar')}>Qatar</div>
                        <div className="place" onClick={_=>this.change('Dubai')}>Dubai</div>
                        <div className="place" onClick={_=>this.change('Sarzah')}>Sarzah</div>
                    </div>}

                    </div>
                </div>
                <div className="iselect">
                 {
                     //<div className="ilabel">Select Shopping Store</div>
                     }
                    <div className="icat">
                        <div className="icategory sup">
                            <div className="cat-title">Supermarket</div>
                        </div>
                        <div className="icategory fas">
                            <div className="cat-title">Fashion</div>
                        </div>
                        <div className="icategory ele">
                            <div className="cat-title">Electronics</div>
                        </div>
                        <div className="icategory kid">
                            <div className="cat-title">Kids' Zone</div>
                        </div>
                    </div>
                </div>

                <div className="ideals">
                    <div className="ideals-title">Infinia Deals</div>
                    <div className="deal-list">
                        <img src="../img/infinia/shop.png" className="deal-img"  />ABC Supermarket is Offering 50% discount on Select Goods. Buy Now
                    </div>
                </div>

            </div>
            <div className="ifooter">
                <div className="imenu-list">About</div>
                <div className="imenu-list">Terms & Conditions</div>
                <div className="imenu-list">Policy</div>
            </div>
        </div>)
    }
}
