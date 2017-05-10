/**
 * Created by bikash on 4/28/17.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import { BASE_URL } from '../constants/constants';
import { getChatHistory } from '../actions/userActions';

var chat_socket;

class ChatBox extends Component {
  state = {
    open: false,
    msg: '',
  };

  addDiv = (class_name, data) => {
    let chatContent = document.getElementById('chatContent');

    let chatMsg = document.createElement('div');
    chatMsg.className = 'chat-msg';

    let newDiv = document.createElement('div');
    newDiv.className = class_name;

    let timeStamp = document.createElement('div');
    timeStamp.className = 'time';
    timeStamp.innerHTML = data.timestamp;

    let msg = document.createElement('span');
    msg.innerHTML = data.message;

    newDiv.appendChild(timeStamp);
    newDiv.appendChild(msg);
    chatMsg.appendChild(newDiv);
    chatContent.appendChild(chatMsg);
    this.setScrollTop();

  };

  setScrollTop(){
    let chat = document.getElementById('chatContent');
    // console.log("scroll height", chat.scrollHeight);
    chat.scrollTop = chat.scrollHeight;

  }


  initializeChat = () => {
    this.props.getChatHistory(this.props.loggedIn.id);
    setTimeout(()=> {
      this.setScrollTop();
    },300);

    var ws_scheme = window.location.protocol == "https" ? "wss" : "ws";
    chat_socket = new WebSocket(ws_scheme + "://" + BASE_URL + '/chat/'+this.props.loggedIn.id);

    chat_socket.onmessage = (event) => {
      var data = JSON.parse(event.data);
      console.log(data);

      if(data.message !== undefined){
        if(data.handle === 'admin'){
          this.addDiv('admin-msg', data);
        }
        if(data.handle === 'user'){
          this.addDiv('user-msg', data)
        }
      }

    };

    chat_socket.onopen = function open() {
      console.log("websocket opened at " + chat_socket.url);
    };

    if (chat_socket.readyState == WebSocket.OPEN) {
      chat_socket.onopen();
    }

  };

  componentDidMount() {

  }

  openChat = () => {
    let box = document.getElementById('chatBox');
    if(this.state.open ){
      this.setState({open: false});
      box.style.width= '150px';
    }
    else{
      this.setState({open: true});
      this.props.loggedIn.status_code === 200 && this.initializeChat();
      box.style.width= '275px';
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let message = {
      'message': this.state.msg
    };

    console.log(message);

    chat_socket.send(JSON.stringify(message));
    JSON.stringify(message);
    this.setState({msg: ''});
  };

  render() {
    let {loggedIn, history} = this.props;
    console.log("chat history", history);

    return(
      <div id="chatBox" className="chat-box">
        <div className="chat-header" onClick={this.openChat}><i className="fa fa-comment"/> Chat with us</div>
        {
          this.state.open &&
            <div className="chat-body">
              <div id="chatContent" className="chat-content" style={{height: 250}}>
                {
                  !_.isEmpty(history) &&
                  !_.isEmpty(history.success_messages.chat_messages.messages) ?
                    history.success_messages.chat_messages.messages.map((msg,index)=>
                      <div className="chat-msg" key={index}>
                        {
                          msg.handle_key === "admin" &&
                            <div  id="adminmsg" className="admin-msg">
                              <div className="time">{msg.timestamp}</div>
                              <span>{msg.message}</span>
                            </div>
                        }
                        {
                          msg.handle_key === 'user' &&
                            <div id="usermsg" className="user-msg">
                              <div className="time">{msg.timestamp}</div>
                              <span>{msg.message}</span>
                            </div>
                        }
                      </div>
                  )
                  :
                  <div style={{padding: 10}}>Sorry there is no messages to show</div>
                }

              </div>
              {
                !_.isEmpty(loggedIn) &&
                loggedIn.status_code === 200 ?
                  <div className="chat-input">
                    <form onSubmit={this.handleSubmit}>
                      <div className="input-group">
                        <input className=""
                               type="text"
                               name="msg"
                               placeholder="Write to us"
                               value={this.state.msg}
                               onChange={this.handleChange}
                               autoComplete="off"
                        />
                        <span className="input-group-btn">
                          <button className="btn btn-success" type="submit"><i className="fa fa-send-o"/></button>
                        </span>
                      </div>
                    </form>
                  </div> :
                  <div style={{padding: 10}}>Please login to chat with us</div>
              }
            </div>
        }


      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    loggedIn: state.auth.loggedIn,
    history: state.user.history,
  }
}

export default connect(mapStateToProps, { getChatHistory })(ChatBox);