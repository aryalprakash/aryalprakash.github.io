/**
 * Created by bikram on 1/30/17.
 */

import React from 'react';
import classnames from 'classnames';

const flashMessageStyle = {
  marginBottom: 0,
  borderRadius: 0,
  padding: '10px 15px 10px 15px',
  margin: '0 20px'
};

class FlashMessage extends React.Component {
  onClick = () => {
    this.props.deleteFlashMessage(this.props.message.id);
  };

  render() {
    const { id, type, text } = this.props.message;
    return (
      <div
        className={classnames('alert', {
          'alert-success': type === 'success',
          'alert-danger': type === 'error',
          'alert-warning': type === 'warning'
        })}
        style={flashMessageStyle}
      >
        {text}<button onClick={this.onClick} className="close"><span>&times;</span></button>
      </div>
    );
  }
}

FlashMessage.propTypes = {
  message: React.PropTypes.object.isRequired,
  deleteFlashMessage: React.PropTypes.func.isRequired
};

export default FlashMessage;