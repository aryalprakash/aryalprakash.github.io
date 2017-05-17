/**
 * Created by bikash on 4/5/17.
 */
const initialState = {
  filters: []
};

export default (state=initialState, action) => {

  switch (action.type) {
    case 'GET_SEARCH_FILTERS':
      return {
        ...state,
        filters: action.data
      };

    default:
      return state
  }
}