/**
 * Created by bikram on 1/30/17.
 */

import React from 'react';
import FlashMessage from './FlashMessage';
import { connect } from 'react-redux';
import { deleteFlashMessage, stashSeenMessages } from '../../actions/flashMessages';

class FlashMessagesList extends React.Component {
  stashFlashMessages = (ids) => {
    this.props.stashSeenMessages(ids);
  };

  render() {
    let seenMessages = [];
    const messages = this.props.messages.map(message => {
      seenMessages.push(message.id);
      return <FlashMessage key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage}/>;
    });

    this.stashFlashMessages(seenMessages);

    return (
      <div className="flash-messages" style={{position: 'fixed', bottom: 10, width: '100%', zIndex: 10000000000000}}>
        {messages}
      </div>
    );
  }
}

FlashMessagesList.propTypes = {
  messages: React.PropTypes.array.isRequired,
  deleteFlashMessage: React.PropTypes.func.isRequired,
  stashSeenMessages: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    messages: state.flashMessages.messages
  }
}

export default connect(mapStateToProps, { deleteFlashMessage, stashSeenMessages })(FlashMessagesList);
