const initialState = () => 'BY_NAME';

export default function sortByFilterReducer(state = initialState(), action) {
  switch (action.type) {
    case 'SET_SORT_TYPE':
      return action.filter;
    default:
      return state;
  }
}
