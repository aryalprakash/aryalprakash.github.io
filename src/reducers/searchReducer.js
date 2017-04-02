/**
 * Created by bikash on 4/2/17.
 */

const initialState = {
  searchResult: {}
};

export default (state = initialState, action) => {
  console.log('i am in reducer`s infiniaAction.js');
  switch (action.type) {
    case 'SEARCH_STORE':
      return{
        ...state,
        searchResult: action.data
      };
    default:
      return state
  }
}