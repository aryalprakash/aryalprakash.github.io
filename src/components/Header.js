import React, { Component } from 'react';
import  { Link } from 'react-router';

export default class Header extends Component{

    constructor() {
        super();
        this.state = {
            class: ''
        }

    }

    componentDidMount() {
        window.addEventListener('scroll', function (e) {
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

    render(){
        return(<div className={`fheader blue head-border `+this.state.class}>
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
        </div>)
    }


}