
const initialState= [];

export default function SortStore(state = initialState, action) {
    switch (action.type) {
        case 'SORT_BY_ATOZ':
            return {...state, sortby: 'atoz'};
        case 'SORT_BY_ZTOA':
            return {...state, sortby: 'ztoa'};

        default:
            return {...state, sortby: 'atoz'};
    }

    return state
}