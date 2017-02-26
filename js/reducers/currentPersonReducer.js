const initialState = () => {
  return {};
};

export default function CurrentPersonReducer(state = initialState(), action) {
  console.log(state);
  switch (action.type) {
    case 'SET_CURRENT_PERSON':
      return action.person;
    default:
      return state;
  }
};
