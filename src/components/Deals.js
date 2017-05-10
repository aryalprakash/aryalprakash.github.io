import React, { Component } from 'react';
import  { Link } from 'react-router';

export default class Deals extends Component {
    constructor() {
        super();
        this.state = {
            list: false,
            place: 'Dubai',
            class: '',
            loc: 'active-color',
            cat: 'passive-color'
        }

    }

    closeModal = () => {
      document.getElementById('dealSection').style.display = "";
    };

    render() {
        return(<div className="sidebar-right">
            <div className="card sidebar-title"><span className="fa fa-bolt"/> Infinia Deals
                <span className="close modal-close" onClick={this.closeModal}> &times;</span>
            </div>
            <div className="card deals">
                <div className="deal">
                    <div className="deal-thumb">
                        <img src="../../img/offers/2.jpg" />
                    </div>
                    <div className="deal-details">
                        <div className="deal-title">Heavy Discount on Kurtas</div>

                        <div className="deal-subtitle">50% discounts till 31st December</div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="deal">
                    <div className="deal-thumb">
                        <img src="../../img/offers/3.jpg" />
                    </div>
                    <div className="deal-details">
                        <div className="deal-title">Flat discount on Samsung Mobiles</div>

                        <div className="deal-subtitle">5000/- cash back on all.</div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="deal">
                    <div className="deal-thumb">
                        <img src="../../img/offers/1.png" />
                    </div>
                    <div className="deal-details">
                        <div className="deal-title">T-Shirts on Sale</div>

                        <div className="deal-subtitle">Buy 2 for 1000/-.</div>
                    </div>
                </div>

                <div className="line"></div>
                <div className="deal">
                    <div className="deal-thumb">
                        <img src="../../img/offers/4.jpg" />
                    </div>
                    <div className="deal-details">
                        <div className="deal-title">New Arrivals for Kids</div>

                        <div className="deal-subtitle">10% discount available</div>
                    </div>
                </div>

            </div>
        </div>)
    }
}
