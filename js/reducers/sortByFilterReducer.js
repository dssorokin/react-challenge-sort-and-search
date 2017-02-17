const initialState = () => {
  return {
    sortType: 'BY_NAME'
  };
}

export default function sortByFilterReducer(state = initialState(), action) {
  switch (action.type) {
    case 'SET_SORT_TYPE':
      return {
        sortType: action.filter
      }
    default:
      return state;
  }
} 