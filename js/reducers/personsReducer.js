const initialState = () => {
  return {
    items: [],
    isLoading: false
  };
}

export default function PersonsReducer(state = initialState(), action) {
  switch (action.type) {
    case 'IS_LOADING':
      return Object.assign({
        isLoading: action.status
      }, state);
      break;
    case 'ADD_ITEMS':
      return {
        items: action.items,
        isLoading: state.isLoading
      };
      break;
    default:
      return state;
  }
};