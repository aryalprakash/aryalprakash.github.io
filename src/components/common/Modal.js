import React from 'react';
import Dialog from 'rc-dialog';

class Modal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      visible: this.props.showModal,
      width: '60%',
      destroyOnClose: false,
    };
    this.onClick = this.onClick.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      visible: nextProps.showModal
    })
  }

  onClick() {
    let width;

    if(screen.width <= 480){
      width = '90%';
    }
    else if(screen.width <= 768){
      width = '70%'
    }
    else {
      width = '50%'
    }

    this.setState({
      visible: true,
      width: width,
    });
  }

  onClose() {
    this.setState({
      visible: false,
    });
  }

  onDestroyOnCloseChange(e) {
    this.setState({
      destroyOnClose: e.target.checked,
    });
  }

  render() {
    return  <div style={{display: 'flex'}}>
      <span className={`${this.props.actionClass} fa-${this.props.actionIcon}`} onClick={this.onClick}> {this.props.actionName}</span>
      {
        this.props.showButton &&
          <button className={`btn ${this.props.buttonClass}`} onClick={this.onClick}>{this.props.buttonName}</button>
      }
      <Dialog
        visible={this.state.visible}
        wrapClassName={'center'}
        animation="zoom"
        maskAnimation="fade"
        onClose={this.onClose}
        style={{ width: this.state.width, marginLeft: 'auto', marginRight: 'auto' }}
        title={<div style={{marginTop: 15, fontSize: 17}}> {this.props.title}</div>}
      >
        {this.props.children}
      </Dialog>
    </div>
  }
}

Modal.propTypes = {
  actionName: React.PropTypes.string,
  actionClass: React.PropTypes.string,
  actionIcon: React.PropTypes.string,
  buttonClass: React.PropTypes.string,
  buttonName: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  showModal: React.PropTypes.bool.isRequired,
};

Modal.defaultProps = {
  actionName: '',
  actionIcon: '',
  buttonClass: 'btn-default',
  buttonName: '',
  showModal: false
};

export default Modal;