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

export default class Infinia2 extends Component{
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
        return(<div className="container">
            <div className="top">
            <div  className="iheader blue head-border">
                <Link to="/" className="link"><div className="ilogo">
                    <img src="./img/infinia/logo1.png" />
                    <div className="ilogo-text"><span className="blue">Infinia</span><span className="orange"> Stores</span></div>
                </div></Link>
                <div className="imenu">
                    <div className="imenu-list search-box">
                        <input className="search-input" placeholder="What are you looking for?" type="text" />
                    </div>
                    <Link to="/" className="link"><div className="imenu-list">Infinia1</div></Link>
                    <Link to="/infinia3" className="link"><div className="imenu-list">Infinia3</div></Link>
                    <div className="imenu-list"><img src="../img/infinia/cart1.png" width="30px" /></div>
                    <div className="imenu-list">Account</div>
                </div>
            </div>
            <div className="slider">
                <div className="tag">
                    <div className="tag-text">Shop The Best Deals From Retail Stores You Wish For in</div>
                    <div className="place-button">
                        <div className="place-name">Dubai</div>
                        <div className="place-drop">
                            <img src="../img/select-project.png" width="100%"/>
                        </div>
                    </div>
                </div>
                <div className="girl">
                    <img src="../img/infinia/girl.png" width="100%"/>
                </div>
                </div>
                </div>
                <div className="full-width">
                <div className="iselect">
                    <div className="icat">
                        <div className="icategory cat-large sup">
                            <div className="cat-title">Supermarket</div>
                        </div>
                        <div className="icategory cat-large fas">
                            <div className="cat-title">Fashion</div>
                        </div>
                        <div className="icategory cat-large ele">
                            <div className="cat-title">Electronics</div>
                        </div>
                        <div className="icategory cat-large kid">
                            <div className="cat-title">Kids' Zone</div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="icontents">
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
