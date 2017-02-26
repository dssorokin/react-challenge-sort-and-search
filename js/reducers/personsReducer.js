const initialState = () => {
  return {
    items: [],
    isLoading: false,
    searchString: ''
  };
}

export default function PersonsReducer(state = initialState(), action) {
  switch (action.type) {
    case 'IS_LOADING':
      return Object.assign({
        isLoading: action.status
      }, state);
    case 'ADD_ITEMS':
      return {
        items: action.items,
        isLoading: state.isLoading,
        searchString: state.searchString
      };
    case 'SET_SEARCH_STRING':
      return {
        ...state,
        searchString: action.name
      };
    default:
      return state;
  }
};