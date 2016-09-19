/**
 * Created by user on 8/29/2016.
 */
import React, { Component } from 'react';
import  { Link } from 'react-router';
var Scroll  = require('react-scroll');

var scroll     = Scroll.animateScroll;

let style={
    header: {
        background: 'grey'
    },
    slider:{
        'position': 'relative',
        'top': '90px',
        padding: '0px 50px 5px 50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        background: "url('../../img/infinia/back1.png')",
        backgroundSize: 'cover'
    },
    tag:{
        width: '1050px'
    },
    icat:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-end'
    },
    category:{
        border: '0px',
        height: '225px',
        width: '225px',
        margin: '10px'
    },
    pointer:{
        cursor: 'pointer'
    }
}

export default class Infinia4 extends Component{
    constructor(){
        super();
        this.state={
            list: false,
            place: 'Dubai',
            class: '',
            loc: 'active-color',
            cat: 'passive-color'
        }
        this.show = this.show.bind(this)
        this.hide = this.hide.bind(this)
        this.change = this.change.bind(this)
        this.scrollTo = this.scrollTo.bind(this)
    }

    componentDidMount(){
        window.addEventListener('scroll', function(e){
            let distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 10,
                header = document.querySelector("iheader");
            if (distanceY > shrinkOn) {
                this.setState({
                    class: 'smaller'
                })
            } else {
                this.setState({
                    class: ''
                })
            }
        }.bind(this));
    }

    scrollTo(){
        scroll.scrollTo(900);
    }

    show(){
        this.setState({
            list: !this.state.list
        })
    }
    hide(){
        this.setState({
            list: false
        })
    }

    change(place){
        this.setState({
            place,
            cat: 'active-color',
            loc: 'passive-color'
        })
        this.hide()
    }


    render(){
        return(<div className="container">
            <div className="top">
                <div className={`fheader blue head-border `+this.state.class}>
                    <Link to="/" className="link"><div className="ilogo">
                        <img src="./img/infinia/logo1.png" />
                        <div className="ilogo-text"><span className="blue">Infinia</span><span className="orange"> Stores</span></div>
                    </div></Link>
                    <div className="imenu">
                        <div className="imenu-list search-box">
                            <input className="search-input" placeholder="What are you looking for?" type="text" />
                        </div>
                        <div className="imenu-list menu-button">Add your Store</div>
                        <div className="imenu-list">Account</div>
                        <div className="imenu-list"><img src="../img/infinia/cart1.png" width="30px" /></div>

                    </div>
                </div>
                <div  style={style.slider}>
                    <div  style={style.tag}>
                        <div className="tag-text">Shop The Best Deals From Retail Stores</div>
                        <div className="buttons">
                            <div className={`active-button `+this.state.loc} style={style.pointer} onClick={_=>this.show()}>
                                <div className="style active">1. Select a location</div>
                                <div className="place-name">{this.state.place}</div>
                                <div className="place-drop">
                                    <img src="../img/select-project.png" width="100%"/>
                                </div>
                            {this.state.list?<div className="all-places">
                                <div className="place" onClick={_=>this.change('Dubai')}>Dubai</div>
                                <div className="place" onClick={_=>this.change('Qatar')}>Qatar</div>
                                <div className="place" onClick={_=>this.change('Arab')}>Arab</div>
                            </div>:null}
                            </div>
                        </div>

                    </div>
                    <div className="girl">
                        <div className="iselect">
                            <div className={`active-button cat-button `+this.state.cat}>
                                <div className="style active">2. Choose a category </div>
                            </div>
                            <div className="icat" style={style.icat}>
                                <div className="icategory cat-small sup">
                                    <div className="cat-title">Supermarket</div>
                                </div>
                                <div className="icategory cat-small fas">
                                    <div className="cat-title">Fashion</div>
                                </div>
                                <div className="icategory cat-small ele">
                                    <div className="cat-title">Electronics</div>
                                </div>
                                <div className="icategory cat-small kid">
                                    <div className="cat-title">Kids' Zone</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="full-width ninty">
                <div className="iselect tagline">
                Redefining your shopping style or something like this :)
                    <div className="scroll-down">
                        <div className="scroll-down-box" title="Infinia Deals" onClick={this.scrollTo}>
                            <img src="../img/infinia/down.png" width="50%" />
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
                    <div className="deal-list">
                        <img src="../img/infinia/shop.png" className="deal-img"  />ABC Supermarket is Offering 50% discount on Select Goods. Buy Now
                    </div>
                    <div className="deal-list">
                        <img src="../img/infinia/shop.png" className="deal-img"  />ABC Supermarket is Offering 50% discount on Select Goods. Buy Now
                    </div>
                    <div className="deal-list">
                        <img src="../img/infinia/shop.png" className="deal-img"  />ABC Supermarket is Offering 50% discount on Select Goods. Buy Now
                    </div>
                    <div className="deal-list">
                        <img src="../img/infinia/shop.png" className="deal-img"  />ABC Supermarket is Offering 50% discount on Select Goods. Buy Now
                    </div>
                    <div className="deal-list">
                        <img src="../img/infinia/shop.png" className="deal-img"  />ABC Supermarket is Offering 50% discount on Select Goods. Buy Now
                    </div>
                </div>

            </div>
            <div className="ifooter">
                <div className="imenu-list">About</div>
                <div className="imenu-list">Terms Conditions</div>
                <div className="imenu-list">Policy</div>
            </div>
        </div>)
    }
}
