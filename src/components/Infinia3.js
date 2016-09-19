/**
 * Created by user on 8/29/2016.
 */
import React, { Component } from 'react';
import  { Link } from 'react-router';

let style={
    header: {
        background: 'grey'
    },
    slider:{
        'position': 'relative',
        'top': '90px',
        padding: '0px 50px 20px 50px',
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
    }
}

export default class Infinia3 extends Component{
    constructor(){
        super();
        this.state={
            list: false,
            place: 'Dubai',
            class: ''
        }
        this.show = this.show.bind(this)
        this.hide = this.hide.bind(this)
        this.change = this.change.bind(this)
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
                <div className={`fheader blue head-border `+this.state.class}>
                    <Link to="/" className="link"><div className="ilogo">
                        <img src="./img/infinia/logo1.png" />
                        <div className="ilogo-text"><span className="blue">Infinia</span><span className="orange"> Stores</span></div>
                    </div></Link>
                    <div className="imenu">
                        <div className="imenu-list search-box">
                            <input className="search-input" placeholder="What are you looking for?" type="text" />
                        </div>
                        <Link to="/" className="link"><div className="imenu-list">Infinia1</div></Link>
                        <Link to="/infinia2" className="link"><div className="imenu-list">Infinia2</div></Link>
                        <div className="imenu-list"><img src="../img/infinia/cart1.png" width="30px" /></div>
                        <div className="imenu-list">Account</div>
                    </div>
                </div>
                <div  style={style.slider}>
                    <div  style={style.tag}>
                        <div className="tag-text">Shop The Best Deals From Retail Stores You Wish For in</div>
                        <div className="place-button">
                            <div className="place-name">Dubai</div>
                            <div className="place-drop">
                                <img src="../img/select-project.png" width="100%"/>
                            </div>
                        </div>
                    </div>
                    <div className="girl">
                        <div className="iselect">
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
                Redefining your shopping style or something like this ;)
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