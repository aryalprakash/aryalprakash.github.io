/**
 * Created by bikash on 4/2/17.
 */

const initialState = {
  searchResult: {},
  searchField: {},
  suggestions: {},
};

export default (state = initialState, action) => {
  console.log('i am in reducer`s infiniaAction.js');
  switch (action.type) {
    case 'SEARCH_STORE':
      return{
        ...state,
        searchResult: action.data
      };

    case 'SEARCH_OFFER':
      return{
        ...state,
        searchOfferResult: action.data
      };

    case 'SAVE_SEARCH_FIELD':
      return{
        ...state,
        searchField: action.data
      };

    case 'GET_SUGGESTIONS':
      return{
        ...state,
        suggestions: action.data
      };

    default:
      return state
  }
}