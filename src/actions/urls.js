/**
 * Created by bikash on 5/16/17.
 */
const API_URL = 'http://192.168.10.7:8000';

export function handleResponse(response) {
  if (response.ok) {
    return response.json()
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function dictToString(dict) {
  let tempString = [];

  if (isEmpty(dict)) {
    return '';
  }

  for (let key in dict) {
    const value = get(dict, key);
    tempString.push(`${key}=${value}`);
  }
  return '?'+tempString.reduce((x, y) => `${x}&${y}`);
}

export const userURL = (id) => {
  return `${API_URL}/api/v1/user/${id}/`;
};