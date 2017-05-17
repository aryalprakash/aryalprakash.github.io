/**
 * Created by bikash on 3/1/17.
 */
import React, { Component } from 'react';

class TrackPendingPurchase extends Component {
  render() {
    return(
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="line"></div>
        <h4>Track Your Order</h4>
        <div className="row stepper" style={{borderBottom: 0}}>

          <div className="col-md-2 col-sm-2 stepper-step complete">
            <div className="text-center stepper-stepnum">Step 1</div>
            <div className="progress"><div className="progress-bar"></div></div>
            <div className="stepper-dot"></div>
            <div className="stepper-info text-center"> Pending</div>
          </div>

          <div className="col-md-2 col-sm-2 stepper-step complete">
            <div className="text-center stepper-stepnum">Step 2</div>
            <div className="progress"><div className="progress-bar"></div></div>
            <div className="stepper-dot"></div>
            <div className="stepper-info text-center"> Confirmed</div>
          </div>

          <div className="col-md-2 col-sm-2 stepper-step complete">
            <div className="text-center stepper-stepnum">Step 3</div>
            <div className="progress"><div className="progress-bar"></div></div>
            <div className="stepper-dot"></div>
            <div className="stepper-info text-center"> Items Collected</div>
          </div>

          <div className="col-md-2 col-sm-2 stepper-step current">
            <div className="text-center stepper-stepnum">Step 4</div>
            <div className="progress"><div className="progress-bar"></div></div>
            <div className="stepper-dot"></div>
            <div className="stepper-info text-center"> Items Processed</div>
          </div>
          <div className="col-md-2 col-sm-2 stepper-step disabled">
            <div className="text-center stepper-stepnum">Step 5</div>
            <div className="progress"><div className="progress-bar"></div></div>
            <div className="stepper-dot"></div>
            <div className="stepper-info text-center"> Delivered</div>
          </div>

        </div>

      </div>
    )
  }
}

export default TrackPendingPurchase;