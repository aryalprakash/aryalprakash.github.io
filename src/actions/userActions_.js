import {CRUDGet, CRUDPatch} from "./CRUDActions";

const TYPE = 'user'

export function getUser(user) {
  return CRUDGet(TYPE, user)
}

export function patchUser(user, formData, CSRFToken) {
  console.log('reached path user')
  return CRUDPatch(TYPE, user, formData, CSRFToken)
}