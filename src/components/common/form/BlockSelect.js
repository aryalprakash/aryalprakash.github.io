/**
 * Created by anjan on 3/29/17.
 */
import React from 'react';

const styles= {
  buttonStyle:{
    margin: 5
  }
}

export default class BlockSelect extends React.Component{

  state={
    toggle_select: false,

  }

  selectBlock=(event)=>{
    event.preventDefault();
    // console.log(event.target.value);
  }

  render(){
    const {choices} = this.props;
    // console.log(choices);
    return(
      <div>
        { choices.map((choice)=><button
          type="button"
          value={choice[0]}
          style={styles.buttonStyle}
        >{choice[1]}
        </button>
        ) }
      </div>
    );
    // const {choices} = this.props;
    // return(
    //   choices.map((choice)=><div className="col-sm-3">
    //     <input
    //       type="button"
    //       onClick={this.selectBlock}
    //     >
    //       {choice[0]}
    //     </input>
    //   </div>)
    // );
  }
}
