/**
 * Created by bikram on 1/30/17.
 */

import {ADD_FLASH_MESSAGE, CLEAR_STASH, DELETE_FLASH_MESSAGE, STASH_SEEN_MESSAGES} from '../constants/types';

export function addFlashMessage(message) {
  return {
    type: ADD_FLASH_MESSAGE,
    message
  }
}

export function deleteFlashMessage(id) {
  return {
    type: DELETE_FLASH_MESSAGE,
    id
  }
}

export function stashSeenMessages(ids) {
  return {
    type: STASH_SEEN_MESSAGES,
    ids
  }
}

export function clearStash() {
  return {
    type: CLEAR_STASH
  }
}