import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import  { Link } from 'react-router';
import Dialog from 'rc-dialog';
import Register from './Register.js'
import Login from './Login.js'
import 'rc-dialog/assets/index.css';

let style={
    zIndex: '111111'
}

export default class Header extends Component{

    constructor() {
        super();
        this.state = {
            class: '',
            visible: false,
            width: 400,
            destroyOnClose: false,
            center: true,
            login: true
        }

        this.onClick = this.onClick.bind(this)
        this.onClose = this.onClose.bind(this)

    }

    onClick(e) {
        this.setState({
            visible: true
        });
    }

    onClose(e) {
        console.log(e);
        this.setState({
            visible: false
        });
    }

    center(e) {
        this.setState({
            center: e.target.checked,
        });
    }

    onDestroyOnCloseChange(e) {
        this.setState({
            destroyOnClose: e.target.checked,
        });
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
        let dialog;
        if (this.state.visible) {
            const style = {
                width: this.state.width
            };
            let wrapClassName = '';
            if (this.state.center) {
                wrapClassName = 'center';
            }
            dialog = (
                <Dialog
                    visible={this.state.visible}
                    wrapClassName={wrapClassName}
                    animation="zoom"
                    maskAnimation="fade"
                    onClose={this.onClose}
                    style={style}
                >
                {this.state.login?<Login />:<Register />}
                </Dialog>
            );
        }
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
                <div className="imenu-list" onClick={this.onClick}>Account</div>
                <div className="imenu-list">
                    <img src="../img/infinia/cart1.png" width="30px" />
                {this.props.cart>0?<span className="head-cart-count">{this.props.cart}</span>:null}
                </div>
            {dialog}
            </div>
        </div>)
    }


}