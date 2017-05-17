import {
  userURL
} from "./urls";
import {getUserProfile} from "./userActions";

const CRUDMap = {
  user: {
    url: userURL,
    responseAction: getUserProfile
  }
}

function handleResponse(response) {
  if (response.ok) {
    return response.json()
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function CRUDGetAll(type, filterParams={}, url=undefined) {
  const getAllURL = CRUDMap[type].urlAll

  if (url===undefined) {
    url = getAllURL(filterParams)
  }

  console.log('logging get all url: ', url, filterParams)
  return () => {
    return fetch(url, {credentials: "include"}).then(handleResponse)
  }
}

export function CRUDGet(type, id) {
  const url = CRUDMap[type].url(id)

  return () => {
    return fetch(url, {credentials: "include"}).then(handleResponse)
  }
}

export function CRUDPost(type, formData) {
  const url = CRUDMap[type].urlAll()

  return () => {
    return fetch(url, {
      method: 'POST',
      body: formData,
      credentials: "include"
    }).then(handleResponse)
  }
}

export function CRUDPatch(type, id, formData, CSRFToken, doDispatch=true) {
  const url = CRUDMap[type].url(id)

  return (dispatch) => {
    return fetch(url, {
      method: 'PATCH',
      body: formData,
      credentials: "include",
      headers: {
        'X-CSRFToken': CSRFToken
      }
    }).then(handleResponse).then(
      (success) => {
        if (doDispatch===true) {
          console.log('dispatch is true: ', CRUDMap[type].responseAction)
          dispatch(CRUDMap[type].responseAction());
        }

        return success
      },
      (error) => {
        console.log(`error on patching ${type}: `, error)
      }
    )
  }
}

export function CRUDDelete(type, id) {
  const url = CRUDMap[type].url(id)

  return () => {
    return fetch(url, {
      method: 'DELETE',
      credentials: "include"
    })
  }
}