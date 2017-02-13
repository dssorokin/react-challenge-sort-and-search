const initialState = () => {
  return {
    sortFilter: 'BY_NAME'
  };
}

export default function sortByFilterReducer(state = initialState(), action) {
  switch (action.type) {
    case 'SET_SORT_FILTER':
      return {
        sortFilter: action.filter
      }
    default:
      return state;
  }
} 