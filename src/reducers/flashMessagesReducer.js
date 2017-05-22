/**
 * Created by bikram on 1/30/17.
 */

import {ADD_FLASH_MESSAGE, CLEAR_STASH, DELETE_FLASH_MESSAGE, STASH_SEEN_MESSAGES} from "../constants/types";
import uuidV1 from 'uuid/v1';
import findIndex from 'lodash/findIndex';
import R from 'ramda';

const initialState = {
  messages: [],
  seenMessages: []
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case ADD_FLASH_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: uuidV1(),
            type: action.message.type,
            text: action.message.text,
            seen: false
          }
        ]
      };
    case DELETE_FLASH_MESSAGE:
      const index = findIndex(state.messages, { id: action.id });
      if (index >= 0) {
        return {
          ...state,
          messages: [
          ...state.messages.slice(0, index),
          ...state.messages.slice(index + 1)
          ]
        };
      }
      return state;
    case STASH_SEEN_MESSAGES:
      return {
        ...state,
        seenMessages: [
          ...state.seenMessages,
          ...action.ids
        ]
      };
    case CLEAR_STASH:
      let currentMessages = state.messages;
      let stashedMessages = state.seenMessages.slice();
      const filteredMessages = currentMessages.filter((msg, index) => !R.contains(msg.id, stashedMessages));
      return {
        ...state,
        messages: filteredMessages,
        seenMessages: []
      };
    default: return state;
  }
}